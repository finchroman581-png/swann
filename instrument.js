(function ($) {
  $(document).ready(function () {
    // console.log("instrument.js");
    $(".instruments-wrapper").each(function () {
      var $wrapper = $(this);
      var itemsPerPage = parseInt($wrapper.data("items-per-page"), 10) || 5;
      var currentPage = 1;
      var $allItems = $wrapper.find(".symbol-item").not(".symbol-table-names");
      var filteredItems = $allItems;

      function paginate(items) {
        var startItem = (currentPage - 1) * itemsPerPage;
        var endItem = currentPage * itemsPerPage;

        $allItems.removeClass("visible even odd");
        items.slice(startItem, endItem).addClass("visible");

        updatePagination(items.length);
        applyStriping(items);
      }

      function applyStriping(items) {
        // console.log("Applying striping to visible items");
        items.filter(".visible").each(function (index) {
          $(this)
            .removeClass("even odd")
            .addClass(index % 2 === 0 ? "even" : "odd");
        });
      }

      function updatePagination(totalItems) {
        // console.log("Updating pagination. Total items:", totalItems);
        var $pageNumbers = $wrapper.find(".page-numbers");
        var totalPages = Math.ceil(totalItems / itemsPerPage);
        $pageNumbers.empty();

        if (totalPages > 1) {
          var startPage = Math.max(1, currentPage - 2);
          var endPage = Math.min(totalPages, startPage + 4);

          if (startPage > 1) {
            $pageNumbers.append('<button type="button">1</button>');
            if (startPage > 2) {
              $pageNumbers.append("<span>...</span>");
            }
          }

          for (var i = startPage; i <= endPage; i++) {
            var $pageButton = $('<button type="button"></button>').text(i);
            if (i === currentPage) {
              $pageButton.addClass("active");
            }
            $pageNumbers.append($pageButton);
          }

          if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
              $pageNumbers.append("<span>...</span>");
            }
            $pageNumbers.append(
              '<button type="button">' + totalPages + "</button>"
            );
          }

          $wrapper.find(".prev-page").prop("disabled", currentPage === 1);
          $wrapper
            .find(".next-page")
            .prop("disabled", currentPage === totalPages);

          // Show pagination container
          $wrapper.find(".pagination-container").show();
        } else {
          // Hide pagination if there's only one page
          $wrapper.find(".pagination-container").hide();
        }
      }

      // Enhanced Search Functionality
      $wrapper.find(".search-instruments").on("input", function () {
        // console.log("Search input event triggered.");

        var query = $(this).val().toLowerCase().trim();

        if (query.length === 0) {
          filteredItems = $allItems;
          // console.log("No search query, showing all items.");
        } else {
          filteredItems = $allItems.filter(function () {
            var symbol = $(this).attr("data-symbol")
              ? $(this).attr("data-symbol").toLowerCase().trim()
              : "";
            // console.log("Checking symbol:", symbol, "against query:", query);
            return symbol.includes(query);
          });
          // console.log("Filtered items count:", filteredItems.length);
        }

        currentPage = 1;
        paginate(filteredItems);
        $wrapper
          .find(".no-instruments-results")
          .toggle(filteredItems.length === 0);

        // Show pagination container when search is cleared
        if (query.length === 0) {
          $wrapper.find(".pagination-container").show();
        }
      });

      // Initial pagination call
      paginate($allItems);

      // Pagination button events
      $wrapper.find(".page-numbers").on("click", "button", function () {
        currentPage = parseInt($(this).text());
        // console.log("Page button clicked. Current page:", currentPage);
        paginate(filteredItems);
      });

      $wrapper.find(".prev-page").on("click", function () {
        if (currentPage > 1) {
          currentPage--;
          // console.log("Previous page clicked. New current page:", currentPage);
          paginate(filteredItems);
        }
      });

      $wrapper.find(".next-page").on("click", function () {
        var totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        if (currentPage < totalPages) {
          currentPage++;
          // console.log("Next page clicked. New current page:", currentPage);
          paginate(filteredItems);
        }
      });
    });
  });
})(jQuery);
