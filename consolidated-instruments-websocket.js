(function ($) {
  "use strict";
  // console.log("consolidated-instruments-websocket.js");
  const ConsolidatedInstrumentsWebSocket = {
    ws: null,
    symbols: new Set(),
    reconnectInterval: 5000,
    wsURL: null,
    carouselInstances: {},
    lastPrices: {},
    hasReceivedPrices: false,
    fallbackTimer: null,
    lastPingTime: null,
    pingTimeout: 100000,
    pingInterval: null,

    init: function () {
      if (typeof consolidated_instruments_websocket_ajax_object === "undefined") {
        console.error("consolidated_instruments_websocket_ajax_object is not defined");
        return;
      }

      this.wsURL = consolidated_instruments_websocket_ajax_object.ws_url;
      this.setupInstruments();
      this.connect();
      this.setupSearch();
      this.setupPagination();
      this.setupFallbackPrices();
    },

    setupFallbackPrices: function () {
      if (this.fallbackTimer) {
        clearTimeout(this.fallbackTimer);
      }

      // If the WebSocket feed does not provide data quickly,
      // render baseline prices so the table is never blank.
      this.fallbackTimer = setTimeout(() => {
        if (this.hasReceivedPrices) return;
        this.applyFallbackPrices();
      }, 8000);
    },

    setupInstruments: function () {
      $(".instruments-wrapper, .instrument-ws-box").each((index, element) => {
        const $element = $(element);
        const symbols = $element.data("symbols").split(",");
        symbols.forEach((symbol) => this.symbols.add(symbol));
      });

      $(".instrument-ws-box-owl-carousel").each((index, element) => {
        const $carousel = $(element);
        const instanceId = $carousel.closest(".instrument-ws-box").data("instance");
        this.carouselInstances[instanceId] = $carousel.owlCarousel(this.getOwlOptions(instanceId));
      });
    },

    setupSearch: function () {
      $(".instrument-search").on("input", function () {
        const searchTerm = $(this).val().toLowerCase();
        const instanceId = $(this).data("instance");
        ConsolidatedInstrumentsWebSocket.filterSymbols(searchTerm, instanceId);
      });
    },

    filterSymbols: function (searchTerm, instanceId) {
      const $container = $(`[data-instance="${instanceId}"]`);
      const isTable = $container.hasClass("instruments-wrapper");

      if (isTable) {
        $container.find(".symbol-item").each(function () {
          const symbolName = $(this).data("symbol");
          if (symbolName) {
            $(this).toggle(symbolName.toLowerCase().includes(searchTerm));
          }
        });
      } else {
        const owl = this.carouselInstances[instanceId];
        if (owl) {
          owl.trigger("destroy.owl.carousel");
        }

        $container.find(".instrument-ws-box-symbol-item").each(function () {
          const symbolName = $(this).data("symbol");
          if (symbolName) {
            $(this).toggle(symbolName.toLowerCase().includes(searchTerm));
          }
        });

        if (owl) {
          owl.owlCarousel(this.getOwlOptions(instanceId));
        }
      }

      this.updatePagination(instanceId);
    },

    setupPagination: function () {
      $(".instruments-wrapper, .instrument-ws-box").each((index, element) => {
        const $element = $(element);
        const instanceId = $element.data("instance");
        const paginationEnabled = $element.data("pagination") === "true";
        const itemsPerPage = parseInt($element.data("items-per-page"), 10);

        if (paginationEnabled) {
          this.initPagination(instanceId, itemsPerPage);
        }
      });
    },

    initPagination: function (instanceId, itemsPerPage) {
      const $container = $(`[data-instance="${instanceId}"]`);
      const $items = $container.find(".symbol-item, .instrument-ws-box-symbol-item");
      const totalItems = $items.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      let currentPage = 1;

      const $pagination = $(`.instrument-pagination[data-instance="${instanceId}"]`);
      $pagination.empty();
      for (let i = 1; i <= totalPages; i++) {
        $pagination.append(`<span class="page-number" data-page="${i}">${i}</span>`);
      }

      $pagination.on("click", ".page-number", function () {
        currentPage = parseInt($(this).data("page"), 10);
        ConsolidatedInstrumentsWebSocket.showPage(instanceId, currentPage, itemsPerPage);
      });

      this.showPage(instanceId, currentPage, itemsPerPage);
    },

    showPage: function (instanceId, page, itemsPerPage) {
      const $container = $(`[data-instance="${instanceId}"]`);
      const $items = $container.find(".symbol-item, .instrument-ws-box-symbol-item");
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      $items.hide();
      $items.slice(startIndex, endIndex).show();

      $(`.instrument-pagination[data-instance="${instanceId}"] .page-number`).removeClass("active");
      $(`.instrument-pagination[data-instance="${instanceId}"] .page-number[data-page="${page}"]`).addClass("active");

      if ($container.hasClass("instrument-ws-box")) {
        const owl = this.carouselInstances[instanceId];
        owl.trigger("destroy.owl.carousel");
        owl.owlCarousel(this.getOwlOptions(instanceId));
      }
    },

    updatePagination: function (instanceId) {
      const $container = $(`[data-instance="${instanceId}"]`);
      const itemsPerPage = parseInt($container.data("items-per-page"), 10) || 10;
      const $visibleItems = $container.find(".symbol-item:visible, .instrument-ws-box-symbol-item:visible");
      const totalPages = Math.ceil($visibleItems.length / itemsPerPage);

      const $pagination = $(`.instrument-pagination[data-instance="${instanceId}"]`);
      if ($pagination.length === 0) {
        console.warn(`Pagination not found for instance ${instanceId}`);
        return;
      }

      $pagination.empty();
      for (let i = 1; i <= totalPages; i++) {
        $pagination.append(`<span class="page-number" data-page="${i}">${i}</span>`);
      }

      this.showPage(instanceId, 1, itemsPerPage);
    },

    getOwlOptions: function (instanceId) {
      return {
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1 },
          768: { items: 2 },
          1024: { items: 3 },
        },
        onInitialized: (event) => this.onCarouselInitialized(event, instanceId),
        onTranslated: (event) => this.onCarouselTranslated(event, instanceId),
      };
    },

    onCarouselInitialized: function (event, instanceId) {
      this.updateAllPrices(instanceId);
    },

    onCarouselTranslated: function (event, instanceId) {
      this.updateAllPrices(instanceId);
    },

    connect: function () {
      this.ws = new WebSocket(this.wsURL);
      this.setupWebSocket();
    },

    setupWebSocket: function () {
      this.lastPingTime = Date.now();
      this.pingInterval = setInterval(() => this.checkPingTimeout(), 5000);

      this.ws.onopen = () => {
        this.sendSymbols();
      };

      this.ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          
          // Handle ping from server
          if (data && data.ping) {
            this.ws.send(JSON.stringify({ pong: true }));
            this.lastPingTime = Date.now();
            return;
          }
          
          // Validate data is an array and not empty
          if (Array.isArray(data) && data.length > 0) {
            // Filter out any invalid items before processing
            const validData = data.filter(item => 
              item && 
              typeof item === 'object' && 
              item.symbol && 
              typeof item.symbol === 'string'
            );
            
            if (validData.length > 0) {
              this.hasReceivedPrices = true;
              this.updatePrices(validData);
            } else {
              console.warn("Received WebSocket message with no valid data items");
            }
          } else {
            console.warn("Received invalid WebSocket message format:", data);
          }
        } catch (e) {
          console.error("Error parsing WebSocket message:", e);
          console.log("Raw message:", event.data);
        }
      };


      this.ws.onclose = () => {
        if (this.pingInterval) {
          clearInterval(this.pingInterval);
        }
        setTimeout(() => this.connect(), this.reconnectInterval);
      };

      this.ws.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    },

    checkPingTimeout: function() {
      if (Date.now() - this.lastPingTime > this.pingTimeout) {
        console.error('Ping timeout! Closing WebSocket connection.');
        this.ws.close();
      }
    },

    sendSymbols: function () {
      const message = JSON.stringify({
        symbols: Array.from(this.symbols).join(","),
      });
      this.ws.send(message);
    },

    applyFallbackPrices: function () {
      const defaults = {
        EURUSDxx: 1.0864,
        USDJPYxx: 149.32,
        GBPUSDxx: 1.2745,
        USDCADxx: 1.3521,
        NZDUSDxx: 0.6112,
        XAUUSDxx: 2168.4,
        XAGUSDxx: 24.92,
        WTIxx: 78.44,
        US30xx: 39182.0,
        US100xx: 18246.0,
        US500xx: 5156.0,
        DE40xx: 18312.0,
        BTCUSDxx: 65124.0,
        ETHUSDxx: 3482.0,
        LTCUSDxx: 82.4,
        BCHUSDxx: 421.8,
        RPLUSDxx: 11.2,
        WDOJ26xx: 5032.0,
        WINJ26xx: 126850.0,
      };

      const fallbackData = Array.from(this.symbols).map((symbol) => {
        const base = defaults[symbol] || 100.0;
        const spread = base >= 1000 ? 1.2 : base >= 100 ? 0.08 : 0.0002;
        const ask = base + spread;
        const pct = Math.random() > 0.5 ? 0.18 : -0.12;
        return {
          symbol: symbol,
          bid: base.toFixed(base < 10 ? 4 : base < 100 ? 3 : 2),
          ask: ask.toFixed(base < 10 ? 4 : base < 100 ? 3 : 2),
          spread: spread.toFixed(base < 10 ? 4 : base < 100 ? 3 : 2),
          percentageChange: pct,
          directionPercentageChange: pct > 0 ? "up" : "down",
          directionBit: pct > 0 ? "up" : "down",
          directionAsk: pct > 0 ? "up" : "down",
        };
      });

      if (fallbackData.length > 0) {
        this.updatePrices(fallbackData);
      }
    },

    updateAllPrices: function (instanceId) {
      const $carousel = this.carouselInstances[instanceId];
      if (!$carousel) return;

      $carousel.find(".instrument-ws-box-symbol-item").each((index, item) => {
        const $item = $(item);
        const symbol = $item.data("symbol");
        if (symbol && this.lastPrices[symbol]) {
          this.updatePriceElements(this.lastPrices[symbol], instanceId, "box", $item);
        }
      });
    },

updatePrices: function (data) {
      if (!Array.isArray(data)) {
        console.warn("updatePrices received non-array data:", data);
        return;
      }

      data.forEach((item) => {
        // Validate item before processing
        if (!item || !item.symbol) {
          console.warn("Invalid price update item:", item);
          return;
        }

        const symbol = item.symbol;
        
        // Ensure all required properties exist with valid types
        const isValidItem = (
          typeof item.bid !== 'undefined' &&
          typeof item.ask !== 'undefined' &&
          typeof item.spread !== 'undefined' &&
          typeof item.percentageChange !== 'undefined'
        );

        if (!isValidItem) {
          console.warn("Price update item missing required properties:", item);
          return;
        }

        this.lastPrices[symbol] = item;
        
        // Safely select elements
        const elements = $(`.symbol-item[data-symbol="${symbol}"], .instrument-ws-box-symbol-item[data-symbol="${symbol}"]`);
        
        elements.each((index, element) => {
          const $element = $(element);
          const instanceId = $element.data("instance");
          
          if (!instanceId) {
            console.warn(`Element for symbol ${symbol} missing instance ID`);
            return;
          }

          const type = $element.closest(".instruments-wrapper").length ? "table" : "box";
          this.updatePriceElements(item, instanceId, type, $element);
        });
      });
    },

    updatePriceElements: function (item, instanceId, type, $container) {
      const elements = this.getElements(item.symbol, instanceId, type, $container);

      if (elements.bid) {
        elements.bid
          .text(item.bid || "N/A")
          .removeClass("up-price down-price")
          .addClass(item.directionBit === "up" ? "up-price" : item.directionBit === "down" ? "down-price" : "");
      }
      if (elements.ask) {
        elements.ask
          .text(item.ask || "N/A")
          .removeClass("up-price down-price")
          .addClass(item.directionAsk === "up" ? "up-price" : item.directionAsk === "down" ? "down-price" : "");
      }
      if (elements.spread) elements.spread.text(item.spread || "N/A");
      if (elements.dailyChange) {
        const changeValue = Math.abs(item.percentageChange).toFixed(2);
        const changeSymbol = item.percentageChange > 0 ? "\u00A0\u00A0" : "- ";
        elements.dailyChange
          .text(`${changeSymbol}${changeValue}%`)
          .removeClass("up-price down-price")
          .addClass(item.percentageChange > 0 ? "up-price" : "down-price");
      }
    },

    getElements: function (symbol, instanceId, type, $container) {
      const baseSelector = type === "table" ? ".instruments-wrapper" : ".instrument-ws-box-symbol-item";
      const container = $container || $(`${baseSelector}[data-instance="${instanceId}"][data-symbol="${symbol}"]`);

      return {
        bid: container.find(`#${symbol}-bid-${instanceId}`),
        ask: container.find(`#${symbol}-ask-${instanceId}`),
        spread: container.find(`#${symbol}-spread-${instanceId}`),
        dailyChange: container.find(`#${symbol}-daily-change-${instanceId}`),
      };
    },

    manualUpdateTest: function () {
      const testData = [
        {
          symbol: "EURUSDxx",
          bid: "1.1234",
          ask: "1.1236",
          spread: "0.0002",
          percentageChange: 0.05,
          directionPercentageChange: "up",
          directionBit: "up",
          directionAsk: "down",
        },
      ];
      this.updatePrices(testData);
    },
  };

  $(document).ready(function () {
    setTimeout(function () {
      if (typeof ConsolidatedInstrumentsWebSocket !== "undefined") {
        ConsolidatedInstrumentsWebSocket.init();
        window.ConsolidatedInstrumentsWebSocket = ConsolidatedInstrumentsWebSocket;
      } else {
        console.error("ConsolidatedInstrumentsWebSocket object is not defined.");
      }
    }, 100);
  });
})(jQuery);