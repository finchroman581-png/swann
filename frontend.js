"use strict"; // Enforces stricter parsing and error handling


jQuery(document).ready(function ($) {
  // console.log("🔥 Frontend JS Code Runs 🔥");

  // ============================
  // POPUP FUNCTIONALITY
  // ============================
  $(".fxc-popup-trigger").click(function () {
    $(".fxc-popup-container").fadeIn("fast");
  });

  $(".fxc-close-icon").click(function () {
    $(".fxc-popup-container").fadeOut("fast");
  });

  $(".fxc-popup-container").click(function (event) {
    if ($(event.target).is(".fxc-popup-wrapper")) {
      $(".fxc-popup-container").fadeOut("fast");
    }
  });
});

(function($) {
  
    // Initialize AOS when jQuery document is ready (WordPress standard approach)
    $(document).ready(function() {
        initAOSWithFallback();
    });
    
    // Alternative hook to window load event for good measure
    $(window).on('load', function() {
        // If elements aren't animated yet, try to initialize again
        if (document.querySelectorAll('[data-aos].aos-animate').length === 0) {
            initAOSWithFallback();
        }
    });
    
    function initAOSWithFallback() {
        // Check if AOS is available (properly enqueued in WordPress)
        if (typeof AOS !== 'undefined') {
            try {
                // Initialize AOS with preferred settings
                AOS.init({
                    once: true,
                    // Add other AOS options as needed
                    // offset: 120,
                    // delay: 50,
                    // duration: 800,
                    // easing: 'ease-in-out'
                });
                console.log("A.I.S");
            } catch (error) {
                console.warn("A.I.F:", error);
                applyAOSFallback();
            }
        } else {
            // Fallback if AOS script wasn't properly enqueued
            console.warn("AOS Fallback");
            applyAOSFallback();
        }
    }
    
    // Function to ensure elements are visible if AOS fails
    function applyAOSFallback() {
        // Select all elements with AOS attributes
        $('[data-aos]').each(function() {
            var $element = $(this);
            
            // Remove AOS classes that might hide the element
            $element.removeClass('aos-animate aos-init');
            
            // Ensure element is visible
            $element.css({
                'opacity': '1',
                'transform': 'none',
                'transition': 'none'
            });
        });
    }
    
    // Additional fallback: Check if animations didn't trigger after a delay
    setTimeout(function() {
        if ($('[data-aos]').length > 0 && $('.aos-animate').length === 0 && typeof AOS !== 'undefined') {
            console.warn("AOS animations didn't trigger after timeout, applying fallback");
            applyAOSFallback();
        }
    }, 3000);
    
})(jQuery);


// ============================
// STICKY HEADER
// ============================
jQuery(document).ready(function ($) {
  var header = $(".fxc-header");
  var scrollOffset = 150;

  $(window).scroll(function () {
    if ($(window).scrollTop() > scrollOffset) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  });
});

// ============================
// HERO SLIDER FUNCTIONALITY
// ============================
jQuery(document).ready(function ($) {
  var $carouselWrapper = $(".fxc-hero-slider-main-wrapper");
  var $carousel = $(".fxc-hero-carousel");
  var $slides = $(".fxc-hero-slide");
  var $tabs = $(".fxc-hero-tab");
  var $indicator = $(".fxc-hero-glider");
  var currentIndex = 0;
  var autoplayInterval;
  var touchStartX = 0;
  var touchStartY = 0;
  var isTransitioning = false;
  var minSwipeDistance = 50;
  // Assuming the number of slides and tabs are the same:
  var totalSlides = $tabs.length;
  
  // Configuration: Set to true to enable autoplay on mobile
  var enableMobileAutoplay = true;

  function updateCarousel(index) {
    if (isTransitioning || index < 0 || index >= totalSlides) return;
    
    isTransitioning = true;
    var $currentTab = $tabs.eq(index);
    if (!$currentTab.length) return;
    
    $slides.removeClass("active");
    $slides.eq(index).addClass("active");

    $tabs.removeClass("active");
    $currentTab.addClass("active");

    $carouselWrapper.toggleClass("dark-mode-section", Boolean($currentTab.data("dark-mode")));

    var tabPosition = $currentTab.position();
    if (tabPosition) {
      $indicator.css({
        width: $currentTab.outerWidth() + "px",
        transform: "translateX(" + tabPosition.left + "px)"
      });
    }
    
    currentIndex = index;
    
    setTimeout(function() {
      isTransitioning = false;
    }, 300);
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayInterval = setInterval(function () {
      if (!isTransitioning) {
        updateCarousel((currentIndex + 1) % totalSlides);
      }
    }, 5000);
  }

  function stopAutoplay() {
    clearInterval(autoplayInterval);
  }

  // Touch handlers
  $carousel.on("touchstart", function (e) {
    if ($(e.target).closest('a, button, input, select, textarea').length) return;
    
    touchStartX = e.originalEvent.touches[0].clientX;
    touchStartY = e.originalEvent.touches[0].clientY;
    stopAutoplay();
  });

  $carousel.on("touchmove", function (e) {
    if (!touchStartX) return;

    var touchMoveX = e.originalEvent.touches[0].clientX;
    var touchMoveY = e.originalEvent.touches[0].clientY;
    
    if (Math.abs(touchMoveY - touchStartY) > Math.abs(touchMoveX - touchStartX)) return;

    if (Math.abs(touchMoveX - touchStartX) > 10) {
      e.preventDefault();
    }
  });

  $carousel.on("touchend", function (e) {
    if (!touchStartX || isTransitioning) return;

    var touchEndX = e.changedTouches[0].clientX;
    var deltaX = touchEndX - touchStartX;

    if (Math.abs(deltaX) > minSwipeDistance) {
      var newIndex = deltaX > 0 
        ? (currentIndex - 1 + totalSlides) % totalSlides
        : (currentIndex + 1) % totalSlides;
      
      updateCarousel(newIndex);
    }

    touchStartX = 0;
    touchStartY = 0;
    
    // Restart autoplay on mobile if enabled
    if (enableMobileAutoplay) {
      startAutoplay();
    }
  });

  // Tab click handler
  $tabs.on("click", function () {
    if (isTransitioning) return;
    
    var index = $(this).data("slide") - 1;
    updateCarousel(index);
    stopAutoplay(); // Stop autoplay when a tab is selected (both desktop & mobile).
  });

  // Handle window resize to update the glider’s position.
  var resizeTimer;
  $(window).on("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      if (!isTransitioning) {
        var $currentTab = $tabs.eq(currentIndex);
        var tabPosition = $currentTab.position();
        if (tabPosition) {
          $indicator.css({
            width: $currentTab.outerWidth() + "px",
            transform: "translateX(" + tabPosition.left + "px)"
          });
        }
      }
      
      // Manage autoplay based on screen size
      if (window.innerWidth >= 768) {
        // Desktop: start autoplay if not already running
        if (!autoplayInterval) {
          startAutoplay();
        }
      } else {
        // Mobile: stop or start based on configuration
        if (enableMobileAutoplay) {
          if (!autoplayInterval) {
            startAutoplay();
          }
        } else {
          stopAutoplay();
        }
      }
    }, 250);
  });

  // Initialize the carousel.
  var initialIndex = $tabs.filter(".active").index();
  updateCarousel(initialIndex === -1 ? 0 : initialIndex);
  
  // Start autoplay based on screen size and configuration
  if (window.innerWidth >= 768 || enableMobileAutoplay) {
    startAutoplay();
  }
});

// ============================
// TABS FUNCTIONALITY
// ============================
jQuery(document).ready(function ($) {
  $(".fxc-tabs-section").each(function () {
    var $section = $(this);
    var tabKey = $section.data("tab-key");
    var autoplay = $section.data("autoplay") !== false;
    var autoplayDelay = $section.data("autoplay-delay") || 5000;
    var $tabsWrapper = $(`[data-tab-key="${tabKey}"]`);
    var $tabs = $tabsWrapper.find(".fxc-tabs .fxc-tab");
    var $content = $tabsWrapper.find(".fxc-tabs-container");
    var $slides = $content.find(".fxc-tab-content");
    var $indicator = $tabsWrapper.find(".fxc-tab-glider");
    var currentIndex = 0;
    var autoplayInterval;
    var isMobile = window.innerWidth < 860;

    // Helper function to check if device is mobile
    function checkMobile() {
      isMobile = window.innerWidth < 860;
      return isMobile;
    }

    // Update tabs function with mobile support
    function updateTabs(index, isResize = false) {
      $slides.removeClass("active").css("opacity", "0");
      $($slides[index]).addClass("active").css("opacity", "1");
      $tabs.removeClass("active");
      $($tabs[index]).addClass("active");

      if ($($tabs[index]).data("dark-mode")) {
        $tabsWrapper.addClass("dark-mode-tab");
      } else {
        $tabsWrapper.removeClass("dark-mode-tab");
      }

      // Get the active tab
      var $activeTab = $($tabs[index]);

      // Calculate dimensions and position
      var tabWidth = $activeTab.outerWidth();
      var tabHeight = $activeTab.outerHeight();
      var leftPosition = $activeTab.position().left;

      // Add transition only if it's not a resize event
      $indicator.css({
        transition: isResize ? "none" : "transform 0.3s ease, width 0.3s ease",
        width: tabWidth + "px",
        height: tabHeight + "px",
        transform: "translateX(" + leftPosition + "px)",
      });

      // If it's a resize event, restore transition after position update
      if (isResize) {
        setTimeout(function () {
          $indicator.css("transition", "transform 0.3s ease, width 0.3s ease");
        }, 50);
      }

      // Scroll active tab into view on mobile
      if (checkMobile()) {
        var tabsContainer = $tabsWrapper.find(".fxc-tabs")[0];
        var activeTabElement = $activeTab[0];

        if (tabsContainer && activeTabElement) {
          var containerWidth = tabsContainer.offsetWidth;
          var scrollLeft = tabsContainer.scrollLeft;
          var tabOffset = activeTabElement.offsetLeft;
          var tabWidth = activeTabElement.offsetWidth;

          // Calculate the desired scroll position
          var desiredScrollLeft = tabOffset - (containerWidth - tabWidth) / 2;

          // Smooth scroll to the active tab
          $(tabsContainer).animate(
            {
              scrollLeft: desiredScrollLeft,
            },
            isResize ? 0 : 300
          );
        }
      }
    }

    // Autoplay functions
    function startAutoplay() {
      autoplayInterval = setInterval(function () {
        currentIndex = (currentIndex + 1) % $slides.length;
        updateTabs(currentIndex);
      }, autoplayDelay);
    }

    function stopAutoplay() {
      clearInterval(autoplayInterval);
    }

    // Event handlers
    $tabs.on("click", function () {
      var index = $(this).data("slide") - 1;
      currentIndex = index;
      updateTabs(index);
      stopAutoplay();
    });

    // Handle window resize with debounce
    var resizeTimeout;
    $(window).on("resize", function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        var currentTab = $tabs.filter(".active").index();
        updateTabs(currentTab >= 0 ? currentTab : 0, true);
      }, 250);
    });

    // Initialize on page load
    $(window).on("load", function () {
      var initialIndex = $tabs.filter(".active").index();
      updateTabs(initialIndex >= 0 ? initialIndex : 0);
    });

    // Initialize autoplay if enabled
    if (autoplay) {
      startAutoplay();
    }

    // Add touch scroll prevention when touching the tabs
    $tabsWrapper.find(".fxc-tabs").on("touchmove", function (e) {
      e.stopPropagation();
    });
  });
});
// ============================
// ACCOUNT TYPES TABS
// ============================
jQuery(document).ready(function ($) {
  $(".fxc-account-types-tab-link").on("click", function (e) {
    var currentAttrValue = $(this).data("tab");
    $(currentAttrValue).show().siblings(".fxc-account-types-tab").hide();
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// ============================
// MAIN MENU HOVER BEHAVIOR
// ============================
jQuery(document).ready(function ($) {
  $(".desktop-header .menu-item").mouseenter(function () {
    $(this).addClass("active");
    $(".menu-overlay").addClass("active");
  });

  $(".desktop-header .menu-item").mouseleave(function () {
    $(this).removeClass("active");
    if (!$(".desktop-header .menu-item:hover").length) {
      $(".menu-overlay").removeClass("active");
    }
  });

  $(".menu-overlay").hover(function () {
    $(".desktop-header .menu-item").removeClass("active");
    $(this).removeClass("active");
  });

  $(document).click(function (event) {
    if (
      !$(event.target).closest(".desktop-header .menu-item").length &&
      !$(event.target).closest(".menu-overlay").length
    ) {
      $(".desktop-header .menu-item").removeClass("active");
      $(".menu-overlay").removeClass("active");
    }
  });
});

// ============================
// NUMBER FORMATTING & ANIMATION
// ============================
jQuery(document).ready(function ($) {
  function fxcFormatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function fxcAnimateCount($numberSpan, countTo) {
    var increment = countTo * 1;
    var start = 0;

    $({ countNum: start }).animate(
      { countNum: countTo },
      {
        duration: 1500,
        easing: "swing",
        step: function () {
          var currentNumber = Math.floor(
            start + increment * (this.countNum / countTo)
          );
          var formattedNumber = fxcFormatNumber(currentNumber);
          $numberSpan.text(formattedNumber);
        },
        complete: function () {
          var formattedNumber = fxcFormatNumber(countTo);
          $numberSpan.text(formattedNumber);
        },
      }
    );
  }

  function fxcHandleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var $target = $(entry.target);
        var $numberSpan = $target.find(".number");
        var countTo = parseInt($numberSpan.text().replace(/[^\d]/g, ""));
        fxcAnimateCount($numberSpan, countTo);
        observer.unobserve(entry.target);
      }
    });
  }

  var fxcObserver = new IntersectionObserver(fxcHandleIntersect, {
    root: null,
    threshold: 0.1,
  });

  $(".counter").each(function () {
    fxcObserver.observe(this);
  });
});

// ============================
// FAQ ACCORDION
// ============================
jQuery(document).ready(function ($) {
  $(".fxc-faq-header").on("click", function () {
    var $faqBox = $(this).closest(".fxc-faq-box");
    var accordion = $faqBox.data("accordion");

    if (accordion) {
      $(".fxc-faq-box .fxc-faq-content").slideUp();
      $(".fxc-faq-box").removeClass("open");
      if ($faqBox.find(".fxc-faq-content").is(":hidden")) {
        $faqBox.find(".fxc-faq-content").slideDown();
        $faqBox.addClass("open");
      }
    } else {
      $faqBox.find(".fxc-faq-content").slideToggle();
      $faqBox.toggleClass("open");
    }
  });
});

// ============================
// SCROLL ANIMATIONS
// ============================
jQuery(document).ready(function ($) {
  function addActiveAttributeOnVisible() {
    $("[data-active]").each(function () {
      var $element = $(this);
      if ($element.attr("data-active") === "false" && isInViewport($element)) {
        $element.attr("data-active", "true");
      }
    });
  }

  function isInViewport(element) {
    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  $(window).on("load scroll", addActiveAttributeOnVisible);
  addActiveAttributeOnVisible();
});

// ============================
// VIDEO PLAYBACK IN TABS
// ============================
jQuery(document).ready(function ($) {
  $(".fxc-tab").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");

    var slideNumber = $(this).data("slide");
    var targetContent = $(".fxc-tab-content.playbackvid").filter(function () {
      return $(this).hasClass("fxc-tab-content" + slideNumber);
    });

    targetContent.addClass("active").css("opacity", "1");
    $(".fxc-tab-content.playbackvid")
      .not(targetContent)
      .removeClass("active")
      .css("opacity", "0");

    targetContent.find("video").each(function () {
      this.currentTime = 0;
      this.play();
    });
  });

  $(".fxc-tab.active").trigger("click");
});

// ============================
// Offcanvas Menu
// ============================
jQuery(document).ready(function ($) {
  // Toggle offcanvas menu
  $(".fxc-offcanvas-toggle").click(function (e) {
    e.preventDefault();
    $(".fxc-offcanvas-menu").addClass("active");
    $(".fxc-offcanvas-item").removeClass("active");
    //$(".fxc-submenu-toggle").removeClass("rotated");
    $("body").css("overflow", "hidden");
  });

  // Close offcanvas menu with complete reset
  function closeOffcanvasMenu() {
    $(".fxc-offcanvas-menu").removeClass("active");
    $(".fxc-offcanvas-item").removeClass("active");
    //$(".fxc-submenu-toggle").removeClass("rotated");
    $("body").css("overflow", "");
    $(".sub-menu").find(".active").removeClass("active");
    //$(".sub-menu").find(".rotated").removeClass("rotated");
  }

  // Close offcanvas menu
  $(".fxc-offcanvas-close").click(function (e) {
    e.preventDefault();
    closeOffcanvasMenu();
  });

  // Handle submenu toggle for both .fxc-offcanvas-link and .fxc-offcanvas-title-no-link
  function toggleSubmenu(e, $menuItem) {
    e.preventDefault();
    e.stopPropagation();

    // Close siblings and their children
    const $siblings = $menuItem.siblings(".active");
    $siblings.removeClass("active");
    $siblings.find(".active").removeClass("active");
    //$siblings.find(".rotated").removeClass("rotated");

    // Toggle current submenu
    $menuItem.toggleClass("active");
    //$menuItem.find(".fxc-submenu-toggle").toggleClass("rotated");
  }

  // Handle link or content click for items with submenus
  $(document).on("click", ".fxc-offcanvas-link, .fxc-offcanvas-title-no-link", function (e) {
    const $menuItem = $(this).closest(".fxc-offcanvas-item");
    if ($menuItem.hasClass("has-submenu")) {
      toggleSubmenu(e, $menuItem);
    }
  });

  // Handle submenu toggle with smooth animation
  $(document).on("click", ".fxc-submenu-toggle", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const $menuItem = $(this).closest(".fxc-offcanvas-item");
    toggleSubmenu(e, $menuItem);
  });

  // Close menu when clicking outside
  $(document).on("click", function (e) {
    if (
      !$(e.target).closest(".fxc-offcanvas-menu").length &&
      !$(e.target).closest(".fxc-offcanvas-toggle").length &&
      $(".fxc-offcanvas-menu").hasClass("active")
    ) {
      closeOffcanvasMenu();
    }
  });

  // Close menu on ESC key
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      closeOffcanvasMenu();
    }
  });

  // On page load, ensure no submenus are open
  $(window).on("load", function () {
    $(".fxc-offcanvas-item").removeClass("active");
    //$(".fxc-submenu-toggle").removeClass("rotated");
  });

  // Close .fxc-offcanvas-title-no-link when .fxc-offcanvas-link is clicked
  $(document).on("click", ".fxc-offcanvas-link", function (e) {
    const $menuItem = $(this).closest(".fxc-offcanvas-item");
    if ($menuItem.hasClass("has-submenu")) {
      // Close any open .fxc-offcanvas-title-no-link inside the same .fxc-offcanvas-item
      $menuItem.find(".fxc-offcanvas-title-no-link").removeClass("active");
      //$menuItem.find(".fxc-submenu-toggle").removeClass("rotated");
    }
  });
});

// ============================
// Tooltips
// ============================
jQuery(document).ready(function ($) {
  $(".fxc-tooltip-container").each(function () {
    const triggerType = $(this).data("trigger");

    // Handle click triggers
    if (triggerType === "click") {
      $(this).on("click", ".fxc-tooltip-trigger", function (e) {
        e.stopPropagation(); // Prevent clicks from propagating
        $(".fxc-tooltip-container")
          .not($(this).parent())
          .removeClass("tooltip-active"); // Deactivate other tooltips
        $(this).parent().toggleClass("tooltip-active"); // Toggle tooltip visibility
      });

      // Close tooltips if clicking outside
      $(document).on("click", function () {
        $(".fxc-tooltip-container").removeClass("tooltip-active");
      });
    }

    // Handle hover triggers
    if (triggerType === "hover") {
      $(this).hover(
        function () {
          $(this).addClass("tooltip-active"); // Show tooltip on hover
        },
        function () {
          $(this).removeClass("tooltip-active"); // Hide tooltip when mouse leaves
        }
      );
    }

    // Handle both hover and click triggers
    if (triggerType === "both") {
      // Click handling
      $(this).on("click", ".fxc-tooltip-trigger", function (e) {
        e.stopPropagation(); // Prevent clicks from propagating
        $(".fxc-tooltip-container")
          .not($(this).parent())
          .removeClass("tooltip-active"); // Deactivate other tooltips
        $(this).parent().toggleClass("tooltip-active"); // Toggle tooltip visibility
      });

      // Hover handling
      $(this).hover(
        function () {
          $(this).addClass("tooltip-active"); // Show tooltip on hover
        },
        function () {
          $(this).removeClass("tooltip-active"); // Hide tooltip when mouse leaves
        }
      );

      // Close tooltips if clicking outside
      $(document).on("click", function () {
        $(".fxc-tooltip-container").removeClass("tooltip-active");
      });
    }
  });
});

jQuery(document).ready(function ($) {
  // Toggle dropdown open/close on display click
  $(document).on("click", ".fxc-dropdown-display", function (event) {
    // Close all open dropdowns except the one clicked
    $(".fxc-dropdown")
      .not($(this).closest(".fxc-dropdown"))
      .removeClass("open");
    $(this).closest(".fxc-dropdown").toggleClass("open");
    event.stopPropagation();
  });

  // Item selection
  $(document).on("click", ".fxc-dropdown-item", function (event) {
    var $item = $(this);
    var $dropdown = $item.closest(".fxc-dropdown");
    var $display = $dropdown.find(".fxc-dropdown-display");

    $display.text($item.text());
    $dropdown.removeClass("open");
    event.stopPropagation();
  });

  // Close dropdown if clicked outside
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".fxc-dropdown").length) {
      $(".fxc-dropdown").removeClass("open");
    }
  });
});

// ============================
// LANGUAGE SWITCHER FUNCTIONALITY
// ============================
(function ($) {
  "use strict";

  $(document).ready(function () {
    initLanguageSwitcher();
  });

  function initLanguageSwitcher() {
    // Remove any existing event listeners
    $(".fxc-ls-button").off("click");
    $(document).off("click.languageSwitcher");
    $(document).off("keydown.languageSwitcher");

    // Button click handler
    $(".fxc-ls-button").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const $container = $(this).closest(".fxc-ls-container");
      const $dropdown = $container.find(".fxc-ls-dropdown");
      const $allDropdowns = $(".fxc-ls-dropdown");

      // Close all other dropdowns
      $allDropdowns.not($dropdown).removeClass("active");

      // Toggle current dropdown with a slight delay
      setTimeout(function () {
        $dropdown.toggleClass("active");
      }, 10);
    });

    // Document click handler
    $(document).on("click.languageSwitcher", function (e) {
      if (!$(e.target).closest(".fxc-ls-container").length) {
        $(".fxc-ls-dropdown").removeClass("active");
      }
    });

    // Escape key handler
    $(document).on("keydown.languageSwitcher", function (e) {
      if (e.key === "Escape") {
        $(".fxc-ls-dropdown").removeClass("active");
      }
    });

    // Language selection handler
    $(".fxc-ls-item").on("click", function (e) {
      e.preventDefault();
      const $this = $(this);
      const href = $this.attr("href");

      // Visual feedback
      $this.css({
        opacity: "0.7",
        "pointer-events": "none",
      });

      // Redirect after a short delay
      setTimeout(function () {
        window.location.href = href;
      }, 100);
    });
  }

  // Reinitialize on AJAX content load (if needed)
  $(document).on("ajaxComplete", function () {
    initLanguageSwitcher();
  });
})(jQuery);



// ============================
// ACCOUNTS OVERVIEW SLIDER
// ============================

document.addEventListener("DOMContentLoaded", function () {
  const imagesContainer = document.querySelector(".overview-accounts-list-image");
  if (!imagesContainer) return; // Exit if the container is not present

  const images = imagesContainer.querySelectorAll("img");
  let currentIndex = 0;

  setInterval(() => {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
  }, 5000); // Change image every 5 seconds
});

// ======================================
// ACCOUNTS PAGES CAROUSEL DEPOSIT FUNDS
// ======================================

document.addEventListener("DOMContentLoaded", () => {
    const tracks = document.querySelectorAll(".icons-carousel-track");
    if (!tracks) return;

    tracks.forEach((track) => {
        const container = track.parentElement;
        const items = [...track.children];

        // Measure the width of all original items
        const itemWidth = items[0].offsetWidth;
        const totalItemsWidth = itemWidth * items.length;
        const containerWidth = container.offsetWidth;

        // Duplicate items until they fill at least 2x container width
        const minWidthNeeded = containerWidth * 2;
        const duplicatesNeeded = Math.ceil(minWidthNeeded / totalItemsWidth);

        for (let i = 0; i < duplicatesNeeded; i++) {
            items.forEach((item) => {
                const clone = item.cloneNode(true);
                track.appendChild(clone);
            });
        }

        let scrollAmount = 0;
        const scrollSpeed = 0.5;
        const resetThreshold = track.scrollWidth / 2;

        function scrollTrack() {
            scrollAmount -= scrollSpeed;
            if (Math.abs(scrollAmount) >= resetThreshold) {
                scrollAmount = 0;
            }
            track.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(scrollTrack);
        }

        scrollTrack();
    });
});



// ============================
// Expandable Button
// ============================
jQuery(document).ready(function ($) {
    // Expand or collapse the dropdown on button click
    $(".fxc-expandable-btn").on("click", function (e) {
        e.stopPropagation(); // Prevent click from propagating to document
        const menu = $(this).siblings(".fxc-expandable-btn-dropdown");
        $(".fxc-expandable-btn-dropdown").not(menu).slideUp(); // Close other open dropdowns
        menu.slideToggle(); // Toggle the current dropdown
    });

    // Close the menu if clicked outside
    $(document).on("click", function () {
        $(".fxc-expandable-btn-dropdown").slideUp(); // Close all dropdowns
    });

    // Close the dropdown menu on menu-item click
    $(".fxc-menu-item").on("click", function () {
        $(this).closest(".fxc-expandable-btn-dropdown").slideUp(); // Close the dropdown after selection
    });
});
// ============================
// Expandable Button
// ============================
jQuery(document).ready(function($) {
    $('.plan-header').on('click', function() {
        var $parent = $(this).closest('.plan-box');
        var target = $parent.data('expand-target');
        
        // Toggle current box details
        $('#' + target).slideToggle(300);
        $parent.toggleClass('active');
        
        // Hide other boxes
        $('.plan-details').not('#' + target).slideUp(300);
        $('.plan-box').not($parent).removeClass('active');
    });
});
// ============================
// ib-influencer-carousel-mobile
// ============================
jQuery(document).ready(function($) {
    // Check if the body has the 'heremo' class
    if ($('body').hasClass('page-template-page-ib-influencer')) {
        $('.ib-influencer-carousel-mobile').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            autoplay: true,         // Enable autoplay
            autoplayTimeout: 5000,  // 5 seconds delay
            autoplayHoverPause: true, // Pause on hover
            smartSpeed: 800,        // Transition speed (milliseconds)
            autoplaySpeed: 800,     // Autoplay transition speed (milliseconds)
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }
});

// ============================
// Expandable Section
// ============================
jQuery(document).ready(function($) {
    $('#fxc-toggle-options').on('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior

        // Toggle the 'active' class for styling
        $(this).toggleClass('active');

        // Toggle the visibility of the options section with animation
        $('#fxc-toggle-section').slideToggle(300); // 300 milliseconds for smooth animation

        // Retrieve the translated texts from data attributes
        var seeMore = $(this).data('see-more');
        var seeLess = $(this).data('see-less');

        // Change the link text based on the current state
        if ($(this).hasClass('active')) {
            $(this).find('.fxc-toggle-text').text(seeLess);
        } else {
            $(this).find('.fxc-toggle-text').text(seeMore);
        }

        // Optional: Rotate the arrow
        // This requires CSS to handle the rotation based on the 'active' class
    });
});



// ============================
// AUTH MENU DROPDOWN FUNCTIONALITY
// ============================
(function ($) {
  "use strict";

  $(document).ready(function () {
    initAuthMenuDropdown();
  });

  function initAuthMenuDropdown() {
    // Remove any existing event listeners
    $(".fxc-auth-menu-button").off("click");
    $(document).off("click.authMenu");
    $(document).off("keydown.authMenu");

    // Button click handler
    $(".fxc-auth-menu-button").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const $container = $(this).closest(".fxc-auth-menu-dropdown");
      const $dropdown = $container.find(".fxc-auth-menu-dropdown-list");
      const $allDropdowns = $(".fxc-auth-menu-dropdown-list");

      // Close all other dropdowns
      $allDropdowns.not($dropdown).removeClass("active");

      // Toggle current dropdown with a slight delay
      setTimeout(function () {
        $dropdown.toggleClass("active");
      }, 10);
    });

    // Document click handler
    $(document).on("click.authMenu", function (e) {
      if (!$(e.target).closest(".fxc-auth-menu-dropdown").length) {
        $(".fxc-auth-menu-dropdown-list").removeClass("active");
      }
    });

    // Escape key handler
    $(document).on("keydown.authMenu", function (e) {
      if (e.key === "Escape") {
        $(".fxc-auth-menu-dropdown-list").removeClass("active");
      }
    });

    // Menu item click handler
    $(".fxc-auth-menu-dropdown-item").on("click", function (e) {
      e.preventDefault();
      const $this = $(this);
      const href = $this.attr("href");

      // Visual feedback
      $this.css({
        opacity: "0.7",
        "pointer-events": "none",
      });

      // Redirect after a short delay
      setTimeout(function () {
        window.location.href = href;
      }, 100);
    });
  }

  // Reinitialize on AJAX content load (if needed)
  $(document).on("ajaxComplete", function () {
    initAuthMenuDropdown();
  });
})(jQuery);


// ============================
// IB Tracking
// ============================
jQuery(document).ready(function($) {
    // Function to get the value of a URL parameter
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[[]]/g, "\\$&");
        const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return "";
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Function to set a cookie with an expiration date
    function setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = name + "=" + value + ";expires=" + expires.toUTCString() + ";path=/";
    }

    // Function to get the value of a cookie
    function getCookie(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
            if (cookie.indexOf(nameEQ) == 0) return cookie.substring(nameEQ.length, cookie.length);
        }
        return '';
    }

    // Function to check if a link contains specified patterns with or without a trailing slash
    function containsPattern(link) {
        return (
            link.indexOf('https://live.4xc.com/signup/') !== -1 ||
            link.indexOf('http://live.4xc.com/signup/') !== -1 ||
            link.indexOf('https://live.4xc.com/signup') !== -1 ||
            link.indexOf('http://live.4xc.com/signup') !== -1
        );
    }

    // Function to append the parameter to a link, considering additional parameters
    function appendParameterToLink(link, parameter) {
        const url = new URL(link);
        const pathArray = url.pathname.split('/');
        const signupIndex = pathArray.indexOf('signup') + 1;

        // Check if there's a segment after 'signup/'
        if (signupIndex > 0 && signupIndex < pathArray.length && pathArray[signupIndex]) {
            // Do not modify if there's already a segment after 'signup/'
            return url.toString();
        } else {
            // Add the parameter only if no segment exists after 'signup/'
            pathArray.splice(signupIndex, 0, parameter);
            url.pathname = pathArray.join('/');
        }

        return url.toString();
    }

    // Function to update links on the page with the affiliateID
    function updateAffiliateLinks(affiliateID) {
        $('a').each(function() {
            const currentHref = $(this).attr('href');
            // Check if the link contains the pattern and doesn't already have a parameter after 'signup'
            if (currentHref && containsPattern(currentHref)) {
                const updatedHref = currentHref.endsWith('/') ? currentHref : currentHref + '/';
                const finalHref = appendParameterToLink(updatedHref, affiliateID);
                $(this).attr('href', finalHref);
            }
        });
    }

    // Initial check and modification
    const affiliateIDFromURL = getParameterByName('ib');
    const affiliateIDFromCookie = getCookie('affiliateID');
    const affiliateID = affiliateIDFromURL || affiliateIDFromCookie;

    if (affiliateID) {
        setCookie('affiliateID', affiliateID, 30); // Set the cookie to expire in 30 days
        updateAffiliateLinks(affiliateID);
        console.log('🌎 v1.3');
    }

    // Remove old affiliateID if a new one is present in the URL
    const oldAffiliateID = getParameterByName('ib');
    if (oldAffiliateID && affiliateID !== oldAffiliateID) {
        setCookie('affiliateID', affiliateID, 30); // Set the cookie to expire in 30 days
        updateAffiliateLinks(affiliateID);
        console.log(' 🌎 ✖️');
    }
});

// ===========================================
// Instruments Table for Desktop & Mobile
// ===========================================
jQuery(document).ready(function($) {

    // Hide dropdown options when page loads
    $('.fxc-homepage-instruments-mobile-dropdown-options').removeClass('visible');

    // Function to update tab content and sync desktop and mobile views
    function updateTabContent(selectedValue) {
        // Remove active class and reset opacity for all tab contents
        $('.fxc-tab-content-instruments').removeClass('active').css('opacity', '0');

        // Remove active class from all tabs and dropdown options
        $('.tab-instruments-overview-selector, .fxc-homepage-instruments-mobile-dropdown-option').removeClass('active');

        // Add active class to the selected tab and dropdown option
        var selectedTab = $('.tab-instruments-overview-selector[data-slide="' + selectedValue + '"]');
        var selectedDropdownOption = $('.fxc-homepage-instruments-mobile-dropdown-option[data-value="' + selectedValue + '"]');
        
        if (selectedTab.length) {
            selectedTab.addClass('active');
        }
        
        if (selectedDropdownOption.length) {
            selectedDropdownOption.addClass('active');
            
            // Update dropdown selected text
            $('.fxc-homepage-instruments-mobile-dropdown-selected .fxc-homepage-instruments-mobile-dropdown-text').text(selectedDropdownOption.text());
            $('.fxc-homepage-instruments-mobile-dropdown-selected').data('value', selectedValue);
        }

        // Add active class to the corresponding tab content and set opacity to 1
        var selectedTabContent = $('.fxc-tab-content-instruments-' + selectedValue);
        if (selectedTabContent.length) {
            selectedTabContent.addClass('active').css('opacity', '1');
        }

        // Close the dropdown options by removing the 'visible' class
        $('.fxc-homepage-instruments-mobile-dropdown-options').removeClass('visible');
    }

    // Event handler for desktop tabs
    $('.tab-instruments-overview-selector').on('click', function() {
        var selectedValue = $(this).data('slide');
        updateTabContent(selectedValue);
    });

    // Toggle the visibility of the dropdown options with smooth fade-in and fade-out
    $('.fxc-homepage-instruments-mobile-dropdown-selected').on('click', function(event) {
        event.stopPropagation(); // Prevents the document click event from triggering

        var $dropdown = $('.fxc-homepage-instruments-mobile-dropdown-options');

        if ($dropdown.hasClass('visible')) {
            $dropdown.removeClass('visible');  // Remove 'visible' class to trigger fade-out
        } else {
            $dropdown.addClass('visible');  // Add 'visible' class to trigger fade-in
        }
    });

    // Handle selecting a dropdown option
    $('.fxc-homepage-instruments-mobile-dropdown-option').on('click', function() {
        var selectedValue = $(this).data('value');
        updateTabContent(selectedValue);
    });

    // Close dropdown if clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.fxc-homepage-instruments-mobile-dropdown').length) {
            $('.fxc-homepage-instruments-mobile-dropdown-options').removeClass('visible');
        }
    });

});



// ===========================================
// NEW NUMBERS SCROLL TO FUNCTION
// ===========================================


jQuery(document).ready(function($) {
    
    class AnimatedCounter {
        constructor($container) {
            this.$container = $container;
            this.$digitScrollers = $container.find('.digit-scroller');
            this.targetNumber = parseInt($container.data('target')) || 0;
            this.duration = parseInt($container.data('duration')) || 10000;
            this.numDigits = this.$digitScrollers.length;
            this.hasAnimated = false; // Track if animation has already run
            
            // Setup dynamic digit sequences and calculate height
            this.setupDigitSequences();
            
            // Track current positions for smooth scrolling
            this.currentPositions = new Array(this.numDigits).fill(0);
        }
        
        // Dynamically create enough digit sequences for smooth scrolling
        setupDigitSequences() {
            this.$digitScrollers.each((index, element) => {
                const $scroller = $(element);
                const digitPlace = Math.pow(10, this.numDigits - index - 1);
                
                // Calculate how many times this digit will roll over
                const rollOvers = Math.ceil(this.targetNumber / digitPlace);
                const sequencesNeeded = Math.max(1, Math.ceil(rollOvers / 10)) + 1; // +1 for safety
                
                // Generate the sequences
                let digitHTML = '';
                for (let seq = 0; seq < sequencesNeeded; seq++) {
                    for (let digit = 0; digit <= 9; digit++) {
                        digitHTML += digit + '<br>';
                    }
                }
                
                $scroller.html(digitHTML);
            });
            
            // Calculate digit height after setting up sequences
            const tempDiv = $('<div>0</div>').css({
                'font-size': this.$digitScrollers.first().css('font-size'),
                'line-height': this.$digitScrollers.first().css('line-height'),
                'font-family': this.$digitScrollers.first().css('font-family'),
                'position': 'absolute',
                'visibility': 'hidden'
            });
            $('body').append(tempDiv);
            this.digitHeight = tempDiv.outerHeight();
            tempDiv.remove();
        }
        
        // Move digit to position smoothly with forward-only scrolling
        moveDigitTo($scroller, digitValue, digitIndex) {
            const currentPos = this.currentPositions[digitIndex];
            let targetPos = digitValue;
            
            // If we need to "wrap around" (like 9→0), find the next occurrence
            if (digitValue < (currentPos % 10) && currentPos > 0) {
                const currentSequence = Math.floor(currentPos / 10);
                targetPos = digitValue + ((currentSequence + 1) * 10);
            } else if (digitValue >= (currentPos % 10) && currentPos > 0) {
                const currentSequence = Math.floor(currentPos / 10);
                targetPos = digitValue + (currentSequence * 10);
            }
            
            const targetTop = -targetPos * this.digitHeight;
            $scroller.css({
                'transition': 'top 1.5s linear',
                'top': targetTop + 'px'
            });
            
            this.currentPositions[digitIndex] = targetPos;
        }
        
        // Display number by moving each digit
        showNumber(number) {
            const digits = String(number).padStart(this.numDigits, '0').split('');
            
            this.$digitScrollers.each((index, element) => {
                const digitValue = parseInt(digits[index]);
                this.moveDigitTo($(element), digitValue, index);
            });
        }
        
        // Count from 0 to target with smooth progression
        startCounting(delay = 0) {
            // Prevent multiple animations on the same counter
            if (this.hasAnimated) return;
            this.hasAnimated = true;
            
            setTimeout(() => {
                const startTime = Date.now();
                let lastNumber = 0;
                
                // Start at 0
                this.showNumber(0);
                
                const updateCounter = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / this.duration, 1);
                    
                    // Smooth easing for natural progression
                    const easedProgress = progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2;
                    const currentNumber = Math.floor(this.targetNumber * easedProgress);
                    
                    if (currentNumber !== lastNumber) {
                        this.showNumber(currentNumber);
                        lastNumber = currentNumber;
                    }
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                };
                
                requestAnimationFrame(updateCounter);
            }, delay);
        }
    }
    
    // Store counter instances
    const counters = new Map();
    
    // Initialize all counters but don't start them yet
    $('.animated-digit-container').each(function(index) {
        const counter = new AnimatedCounter($(this));
        counters.set(this, counter);
    });
    
    // Create Intersection Observer to trigger animations when in viewport
    const observerOptions = {
        root: null, // Use viewport as root
        rootMargin: '0px 0px -10% 0px', // Trigger when 90% of element is visible
        threshold: 0.1 // Trigger when at least 10% is visible
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const counter = counters.get(entry.target);
                if (counter) {
                    // Add a small delay between multiple counters for staggered effect
                    const delay = index * 200; // 200ms delay between each counter
                    counter.startCounting(delay);
                    
                    // Stop observing this element after animation starts
                    observer.unobserve(entry.target);
                }
            }
        });
    }, observerOptions);
    
    // Start observing all counter containers
    $('.animated-digit-container').each(function() {
        observer.observe(this);
    });
});