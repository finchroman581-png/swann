
/**
 * ========================================================================
 * FXC NEWS FILTER SCRIPT
 * ========================================================================
 * Enhanced news filtering system with:
 * - Responsive dropdown menus with accessibility
 * - Unified date picker with toggle functionality
 * - Mobile-first filter interface
 * - Real-time search with debouncing
 * - Dynamic pagination and filter tags
 * - No results state management
 * ========================================================================
 */

(function ($) {
  'use strict';

  // ====================================================================
  // GLOBAL VARIABLES & CONFIGURATION
  // ====================================================================
  
  let debounceTimer;
  let flatpickrInstance; // Store the flatpickr instance
  
  // Screen size breakpoints (matching CSS)
  const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
    desktop: 1025
  };

  // ====================================================================
  // INITIALIZATION & SETUP
  // ====================================================================

  $(document).ready(function () {
    initializeApplication();
  });

  /**
   * Main initialization function
   * Sets up all components and event listeners
   */
  function initializeApplication() {
    // Core component initialization
    setupCustomDropdown();
    setupFilterEvents();
    setupPaginationEvents();
    setupMobileFilterToggle();
    initUnifiedDatePicker();
    
    // UI state management
    toggleBottomBar();
    initializePageDetection();
    setupCategoryOptionsFormatter();
    setupGlobalClickHandlers();
  }

  /**
   * Detects current page from URL on initial load
   */
  function initializePageDetection() {
    const url = window.location.href;
    const pagedMatch = url.match(/[?&]paged=(\d+)/i) || url.match(/\/page\/(\d+)\//i);
    const paged = pagedMatch ? parseInt(pagedMatch[1]) : 1;

    let $currentPage = $('#news-current-page');
    if (!$currentPage.length) {
      $currentPage = $('<div id="news-current-page" style="display:none;"></div>').appendTo('body');
    }
    $currentPage.data('paged', paged);
  }

  /**
   * Formats category dropdown options with proper casing and filtering
   */
  function setupCategoryOptionsFormatter() {
    $('.dropdown-option').each(function () {
      const originalText = $(this).text().trim();
      
      // Hide "Uncategorized" options
      if (originalText.toLowerCase() === 'uncategorized') {
        $(this).hide();
        return;
      }

      // Process text formatting
      const formattedText = formatCategoryText(originalText);
      $(this).text(formattedText).attr('style', 'font-family: \'Montserrat\', sans-serif !important;');
    });
  }

  /**
   * Formats category text with proper title casing while preserving "4XC"
   * @param {string} text - Original text to format
   * @returns {string} - Formatted text
   */
  function formatCategoryText(text) {
    // Find all 4XC occurrences and their positions (case-insensitive)
    const matches = [];
    const regex4XC = /4XC/gi;
    let match;
    while ((match = regex4XC.exec(text)) !== null) {
      matches.push({ index: match.index, text: match[0] });
    }

    // Apply title case using Unicode-aware regex
    const lowerText = text.toLowerCase();
    const titleCased = lowerText.replace(/(\p{L})(\p{L}*)/gu, (match, first, rest) => {
      return first.toUpperCase() + rest.toLowerCase();
    });

    // Restore all 4XC matches to uppercase
    let finalText = titleCased;
    matches.forEach(({ index }) => {
      finalText = finalText.substring(0, index) + '4XC' + finalText.substring(index + 3);
    });

    return finalText;
  }

  /**
   * Sets up global click handlers for outside clicks
   */
  function setupGlobalClickHandlers() {
    // Close calendar when clicking outside
    $(document).on('click', function (e) {
      const $target = $(e.target);

      // Check if click is inside the date input wrapper OR the flatpickr UI
      const isClickInsideDatepicker =
        $target.closest('.date-input-wrapper').length ||
        $target.closest('.flatpickr-calendar').length;

      // If not inside, and calendar is open, close it
      if (!isClickInsideDatepicker && flatpickrInstance && flatpickrInstance.isOpen) {
        flatpickrInstance.close();
      }
    });
  }

  // ====================================================================
  // MOBILE INTERFACE MANAGEMENT
  // ====================================================================

  /**
   * Sets up mobile filter toggle functionality
   * Handles responsive behavior for mobile filter UI
   */
  function setupMobileFilterToggle() {
    const $toggle = $('#mobile-filter-toggle');
    const $filterUI = $('.news-filter-ui');

    // Toggle filter UI on button click
    $toggle.on('click', function (e) {
      e.preventDefault();
      $filterUI.toggleClass('is-open');

      // Update ARIA attributes for accessibility
      const isOpen = $filterUI.hasClass('is-open');
      $(this).attr('aria-expanded', isOpen);
    });

    // Close on ESC key (mobile only)
    $(document).on('keydown', function (e) {
      if (e.key === 'Escape' && window.innerWidth <= BREAKPOINTS.tablet && $filterUI.hasClass('is-open')) {
        $filterUI.removeClass('is-open');
        $toggle.attr('aria-expanded', 'false')
               .focus()
               .find('.icon--first').show()
               .siblings('.icon--second').hide();
      }
    });

    // Handle responsive behavior on window resize
    $(window).on('resize', function () {
      handleMobileFilterResize($filterUI, $toggle);
    });
  }

  /**
   * Handles mobile filter state during window resize
   * @param {jQuery} $filterUI - Filter UI element
   * @param {jQuery} $toggle - Toggle button element
   */
  function handleMobileFilterResize($filterUI, $toggle) {
    if (window.innerWidth > BREAKPOINTS.tablet) {
      // Desktop cleanup
      $filterUI.removeClass('is-open');
      $toggle.attr('aria-expanded', 'false')
             .find('.icon--first').show()
             .siblings('.icon--second').hide();
    } else {
      // Mobile icon state synchronization
      $('.icon-mobile-toggle').toggleClass('isOpen', $filterUI.hasClass('is-open'));
    }
  }

  // ====================================================================
  // DATE PICKER FUNCTIONALITY
  // ====================================================================

  /**
   * Initializes the unified date picker with custom styling and behavior
   */
  function initUnifiedDatePicker() {
    if (!$('#news-filter-datepicker').length) return;

    flatpickrInstance = flatpickr('#news-filter-datepicker', {
      disableMobile: true,
      altInput: true,
      altFormat: 'F j, Y',
      dateFormat: 'Y-m-d',
      allowInput: false,
      clickOpens: false,
      position: 'auto',
      mode: 'single',
      onChange: function () {
        debounceFilterRequest();
      },
      onOpen: function(selectedDates, dateStr, instance) {
        $('.date-input-wrapper').addClass('calendar-open');
      },
      onClose: function(selectedDates, dateStr, instance) {
        $('.date-input-wrapper').removeClass('calendar-open');
      },
      onReady: function(selectedDates, dateStr, instance) {
        setupDatePickerStyling(instance);
      }
    });

    setupDatePickerEventHandlers();
    enforceConsistentDatePicker();
  }

  /**
   * Sets up custom styling for the date picker
   * @param {Object} instance - Flatpickr instance
   */
  function setupDatePickerStyling(instance) {
    instance.calendarContainer.classList.add('fxc-datepicker-unified');
    instance.input.classList.add('fxc-datepicker-input');

    // Create custom header
    const header = document.createElement('div');
    header.className = 'flatpickr-custom-header';
    header.innerHTML = `
      <span>${fxcNewsAjax.translations.select_date || 'Filter by Date'}</span>
    `;
    console.log(fxcNewsAjax.translations.select_date);

    // Insert header if it doesn't exist
    if (!instance.calendarContainer.querySelector('.flatpickr-custom-header')) {
      instance.calendarContainer.insertBefore(header, instance.calendarContainer.firstChild);
    }

    // Apply Montserrat font family
    instance.calendarContainer.style.fontFamily = "'Montserrat', sans-serif !important";
    $(instance.input).css('font-family', "'Montserrat', sans-serif !important");

    // Style the alt input if it exists
    if (instance.altInput) {
      instance.altInput.classList.add('fxc-datepicker-input');
    }
  }

  /**
   * Sets up event handlers for date picker interactions
   */
  function setupDatePickerEventHandlers() {
    // Handle clicks on the date input wrapper
    $(document).on('click', '.date-input-wrapper', function(e) {
      const $target = $(e.target);
      const isDirectClick = $target.hasClass('date-input-wrapper') || 
                           $target.hasClass('news-filter-date-from') ||
                           $target.hasClass('fxc-datepicker-input');
                           
      if (isDirectClick) {
        e.preventDefault();
        e.stopPropagation();
        toggleCalendar();
      }
    });

    // Handle calendar arrow clicks
    $(document).on('click', '.calendar-arrow', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleCalendar();
    });

    // Prevent default behavior on alt input
    if (flatpickrInstance && flatpickrInstance.altInput) {
      $(flatpickrInstance.altInput).on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleCalendar();
      });
    }

    // Prevent default behavior on main input
    if (flatpickrInstance) {
      $(flatpickrInstance.input).on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        toggleCalendar();
      });
    }
  }

  /**
   * Toggles calendar open/close state
   */
  function toggleCalendar() {
    if (flatpickrInstance) {
      if (flatpickrInstance.isOpen) {
        flatpickrInstance.close();
      } else {
        flatpickrInstance.open();
      }
    }
  }

  /**
   * Enforces consistent date picker styling across different devices
   */
  function enforceConsistentDatePicker() {
    setTimeout(function() {
      const dateInput = document.querySelector('#news-filter-datePicker');
      if (dateInput) {
        // Remove mobile-specific classes
        dateInput.classList.remove('flatpickr-mobile');
        dateInput.classList.add('fxc-datepicker-input');
        
        // Style alt input consistently
        if (dateInput._flatpickr && dateInput._flatpickr.altInput) {
          dateInput._flatpickr.altInput.classList.add('fxc-datepicker-input');
          dateInput._flatpickr.altInput.classList.remove('flatpickr-mobile');
        }
      }
    }, 100);
  }

  // ====================================================================
  // CUSTOM DROPDOWN FUNCTIONALITY
  // ====================================================================

  /**
   * Sets up custom dropdown menu functionality with accessibility
   */
  function setupCustomDropdown() {
    setupDropdownToggle();
    setupDropdownSelection();
    setupDropdownOutsideClick();
    setupDropdownKeyboardNavigation();
  }

  /**
   * Sets up dropdown toggle functionality
   */
  function setupDropdownToggle() {
    $(document).on('click', '.custom-dropdown .dropdown-selected', function (e) {
      e.stopPropagation();
      const dropdown = $(this).closest('.custom-dropdown');
      const isOpen = dropdown.hasClass('open');
      
      // Close all other dropdowns first
      $('.custom-dropdown').removeClass('open');
      
      if (!isOpen) {
        dropdown.addClass('open');
        // Focus management for accessibility
        dropdown.find('.dropdown-options .dropdown-option:visible').first().focus();
      }
    });
  }

  /**
   * Sets up dropdown option selection
   */
  function setupDropdownSelection() {
    $(document).on('click', '.custom-dropdown .dropdown-option', function (e) {
      e.stopPropagation();
      const dropdown = $(this).closest('.custom-dropdown');
      const value = $(this).data('value');
      const text = $(this).text();
      
      // Skip if this is the uncategorized option
      if (text.toLowerCase() === 'uncategorized') {
        return;
      }
      
      // Update UI
      dropdown.find('.dropdown-selected').attr('data-value', value);
      dropdown.find('.selected-text').text(text);
      
      // Update hidden input and trigger change
      $('#category-filter').val(value).trigger('change');
      dropdown.removeClass('open');
      
      // Return focus to dropdown button
      dropdown.find('.dropdown-selected').focus();
    });
  }

  /**
   * Sets up outside click handler for dropdowns
   */
  function setupDropdownOutsideClick() {
    $(document).on('click', function (e) {
      if (!$(e.target).closest('.custom-dropdown').length) {
        $('.custom-dropdown').removeClass('open');
      }
    });
  }

  /**
   * Sets up keyboard navigation for dropdowns
   */
  function setupDropdownKeyboardNavigation() {
    // Main dropdown keyboard navigation
    $(document).on('keydown', '.custom-dropdown', function (e) {
      const dropdown = $(this);
      const isOpen = dropdown.hasClass('open');
      
      switch (e.key) {
        case 'Enter':
        case ' ':
          if (!isOpen) {
            e.preventDefault();
            dropdown.find('.dropdown-selected').click();
          }
          break;
        case 'Escape':
          if (isOpen) {
            e.preventDefault();
            dropdown.removeClass('open');
            dropdown.find('.dropdown-selected').focus();
          }
          break;
        case 'ArrowDown':
          if (isOpen) {
            e.preventDefault();
            navigateDropdownOptions(dropdown, 'down');
          }
          break;
        case 'ArrowUp':
          if (isOpen) {
            e.preventDefault();
            navigateDropdownOptions(dropdown, 'up');
          }
          break;
      }
    });

    // Dropdown option keyboard selection
    $(document).on('keydown', '.dropdown-option', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        $(this).click();
      }
    });
  }

  /**
   * Handles dropdown option navigation
   * @param {jQuery} dropdown - Dropdown element
   * @param {string} direction - Navigation direction ('up' or 'down')
   */
  function navigateDropdownOptions(dropdown, direction) {
    const options = dropdown.find('.dropdown-option:visible');
    const focused = options.filter(':focus');
    
    let target;
    if (direction === 'down') {
      target = focused.length ? focused.next('.dropdown-option:visible') : options.first();
    } else {
      target = focused.length ? focused.prev('.dropdown-option:visible') : options.last();
    }
    
    if (target.length) target.focus();
  }

  // ====================================================================
  // FILTER EVENT MANAGEMENT
  // ====================================================================

  /**
   * Sets up event listeners for all filter components
   */
  function setupFilterEvents() {
    setupFilterChangeEvents();
    setupSearchInputEvents();
    setupInputFocusEvents();
  }

  /**
   * Sets up filter change events with debouncing
   */
  function setupFilterChangeEvents() {
    $('.news-filter-ui').on('change', '.news-filter-trigger', function () {
      debounceFilterRequest();
    });
  }

  /**
   * Sets up search input events with debouncing
   */
  function setupSearchInputEvents() {
    $('#desktopNewsSearchInput, #mobileNewsSearchInput').on('keyup', function () {
      debounceFilterRequest();
    });
  }

  /**
   * Sets up input focus/blur events for better mobile experience
   */
  function setupInputFocusEvents() {
    $('.news-filter-ui').on('focus', 'input', function () {
      $(this).closest('.news-filter-ui').addClass('input-focused');
    });

    $('.news-filter-ui').on('blur', 'input', function () {
      $(this).closest('.news-filter-ui').removeClass('input-focused');
    });
  }

  /**
   * Debounces filter requests to prevent excessive API calls
   * @param {boolean} resetPage - Whether to reset to page 1
   */
  function debounceFilterRequest(resetPage = true) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      fetchFilteredPosts(resetPage);
    }, 300);
  }

  // ====================================================================
  // PAGINATION MANAGEMENT
  // ====================================================================

  /**
   * Sets up pagination event handlers
   */
  function setupPaginationEvents() {
    $(document).on('click', '.fxc-news-pagination a', function (e) {
      e.preventDefault();
      
      const href = $(this).attr('href');
      const pagedMatch = href.match(/[?&]paged=(\d+)/i) || href.match(/\/page\/(\d+)\//i);
      let paged = 1; // Default to 1
      
      if (pagedMatch && pagedMatch[1]) {
        paged = parseInt(pagedMatch[1]);
      }
      
      updateCurrentPage(paged);
      fetchFilteredPosts(); // Triggers AJAX with new paged value
    });
  }

  /**
   * Updates the current page data
   * @param {number} paged - Page number
   */
  function updateCurrentPage(paged) {
    let $currentPage = $('#news-current-page');
    if (!$currentPage.length) {
      $currentPage = $('<div id="news-current-page" style="display:none;"></div>').appendTo('body');
    }
    $currentPage.data('paged', paged);
  }

  // ====================================================================
  // AJAX DATA FETCHING
  // ====================================================================

  /**
   * Fetches filtered posts via AJAX
   * @param {boolean} resetPage - Whether to reset to page 1
   */
  function fetchFilteredPosts(resetPage = false) {
    const filterData = collectFilterData(resetPage);
    const hasActiveFilter = checkForActiveFilters(filterData);
    
    // Manage featured post visibility based on filters
    manageFeaturedPostVisibility(filterData.currentPage, hasActiveFilter);
    
    // Show loader and prepare UI
    $('#filter-loader').show();
    hideNoResultsMessage();
    toggleBottomBar();
    
    // Execute AJAX request
    executeFilterRequest(filterData, hasActiveFilter);
  }

  /**
   * Collects all filter data for the request
   * @param {boolean} resetPage - Whether to reset to page 1
   * @returns {Object} - Filter data object
   */
  function collectFilterData(resetPage) {
    const featuredId = $('#news-featured-id').data('featured-id') || '';
    const category = $('#category-filter').val();
    const categories = category ? [category] : [];
    const dateFrom = $('.news-filter-date-from').val();
    const dateTo = $('.news-filter-date-to').val();
    const selectedDate = $('.news-filter-date-from').val();
    
    // Get search term from visible input
    let search_term = '';
    if ($('#desktopNewsSearchInput').is(':visible')) {
      search_term = $('#desktopNewsSearchInput').val().trim();
    } else if ($('#mobileNewsSearchInput').is(':visible')) {
      search_term = $('#mobileNewsSearchInput').val().trim();
    }
    
    // Get current page
    let $currentPage = $('#news-current-page');
    if (!$currentPage.length) {
      $currentPage = $('<div id="news-current-page" style="display:none;"></div>').appendTo('body');
      $currentPage.data('paged', 1);
    }
    const paged = resetPage ? 1 : parseInt($currentPage.data('paged')) || 1;
    
    return {
      featuredId,
      categories,
      dateFrom,
      dateTo,
      selectedDate,
      search_term,
      paged,
      currentPage: paged
    };
  }

  /**
   * Checks if any filters are currently active
   * @param {Object} filterData - Filter data object
   * @returns {boolean} - Whether any filter is active
   */
  function checkForActiveFilters(filterData) {
    return !!(filterData.search_term || 
              filterData.categories.length > 0 || 
              filterData.dateFrom || 
              filterData.dateTo);
  }

  /**
   * Manages featured post visibility based on page and filters
   * @param {number} currentPage - Current page number
   * @param {boolean} hasActiveFilter - Whether any filter is active
   */
  function manageFeaturedPostVisibility(currentPage, hasActiveFilter) {
    const $featuredPost = $('.fxc-news-featured');
    
    // Hide featured post when filters are active (it will be included in results)
    // Show featured post only on page 1 when no filters are active
    if (hasActiveFilter) {
      $featuredPost.hide();
    } else if (currentPage === 1) {
      $featuredPost.show();
    } else {
      $featuredPost.hide();
    }
  }

  /**
   * Executes the AJAX filter request
   * @param {Object} filterData - Filter data object
   * @param {boolean} hasActiveFilter - Whether any filter is active
   */
  function executeFilterRequest(filterData, hasActiveFilter) {
    // Determine whether to exclude featured post
    // Exclude featured post when NO filters are active (default behavior)
    // Include featured post when filters ARE active
    const excludeFeatured = hasActiveFilter ? '' : filterData.featuredId;
    
    $.ajax({
      url: fxcNewsAjax.ajax_url,
      type: 'POST',
      data: {
        action: 'fxc_filter_news',
        security: fxcNewsAjax.nonce,
        categories: filterData.categories,
        date_from: filterData.dateFrom,
        date_to: filterData.dateTo,
        date_selected: filterData.selectedDate,
        search_term: filterData.search_term,
        exclude_featured: excludeFeatured,
        paged: filterData.paged
      },
      success: function (response) {
        handleFilterSuccess(response, filterData);
      },
      error: function (xhr, status, error) {
        console.error('AJAX error:', error);
        showNoResultsMessage();
      },
      complete: function () {
        handleFilterComplete();
      }
    });
  }

  /**
   * Handles successful filter response
   * @param {Object} response - AJAX response
   * @param {Object} filterData - Filter data object
   */
  function handleFilterSuccess(response, filterData) {
    if (response.success) {
      updateCurrentPage(filterData.paged);
      
      // Check if we have posts or if it's empty
      if (response.data.posts && response.data.posts.length > 0) {
        $('.fxc-news-grid').html(response.data.posts.join(''));
        $('.fxc-news-pagination').html(response.data.pagination_html);
        hideNoResultsMessage();
      } else {
        // No posts found - show no results message
        showNoResultsMessage();
      }
      
      updateFilterTags(filterData.categories, filterData.dateFrom, filterData.dateTo, filterData.search_term);
      
      // Close mobile filter panel after applying filters
      if (window.innerWidth <= BREAKPOINTS.tablet) {
        $('.news-filter-ui').removeClass('is-open');
        $('#mobile-filter-toggle').attr('aria-expanded', 'false');
      }
    } else {
      console.error('Filter request failed:', response.data);
      showNoResultsMessage();
    }
  }

  /**
   * Handles filter request completion
   */
  function handleFilterComplete() {
    $('#filter-loader').hide();
    toggleBottomBar();
    
    // Re-setup events for dynamically loaded content
    // setupFilterEvents();
    // setupPaginationEvents();
  }

  // ====================================================================
  // NO RESULTS STATE MANAGEMENT
  // ====================================================================

  /**
   * Shows the no results message
   */
  function showNoResultsMessage() {
    $('.fxc-news-no-results').show();
    $('.fxc-news-grid').empty();
    $('.fxc-news-pagination').html('');
  }

  /**
   * Hides the no results message
   */
  function hideNoResultsMessage() {
    $('.fxc-news-no-results').hide();
  }

  // ====================================================================
  // FILTER TAGS UI MANAGEMENT
  // ====================================================================

  /**
   * Updates the active filter tags display
   * @param {Array} categories - Selected categories
   * @param {string} dateFrom - From date
   * @param {string} dateTo - To date
   * @param {string} search_term - Search term
   */
  function updateFilterTags(categories, dateFrom, dateTo, search_term) {
    const $tagContainer = $('.news-filter-tags');
    $tagContainer.empty();
    
    // Add category tags
    addCategoryTags($tagContainer, categories);
    
    // Add date tags
    addDateTags($tagContainer, dateFrom, dateTo);
    
    // Add search term tag
    addSearchTermTag($tagContainer, search_term);
    
    toggleBottomBar();
  }

  /**
   * Adds category filter tags
   * @param {jQuery} $container - Tag container element
   * @param {Array} categories - Selected categories
   */
  function addCategoryTags($container, categories) {
    categories.forEach(cat => {
      const label = $('#category-dropdown .dropdown-option[data-value="' + cat + '"]').text();
      if (label && label !== 'Filter by category' && label.toLowerCase() !== 'uncategorized') {
        $container.append(`
          <span class="news-filter-tag" data-type="category" data-value="${cat}">
            ${label}
            ${generateRemoveIcon()}
          </span>
        `);
      }
    });
  }

  /**
   * Adds date filter tags
   * @param {jQuery} $container - Tag container element
   * @param {string} dateFrom - From date
   * @param {string} dateTo - To date
   */
  function addDateTags($container, dateFrom, dateTo) {
    if (dateFrom && dateTo) {
      $container.append(`
        <span class="news-filter-tag" data-type="date_range">
          ${formatDate(dateFrom)} – ${formatDate(dateTo)}
          ${generateRemoveIcon()}
        </span>
      `);
    } else if (dateFrom) {
      $container.append(`
        <span class="news-filter-tag" data-type="date_from">
          ${formatDate(dateFrom)}
          ${generateRemoveIcon()}
        </span>
      `);
    } else if (dateTo) {
      $container.append(`
        <span class="news-filter-tag" data-type="date_to">
          Until ${formatDate(dateTo)}
          ${generateRemoveIcon()}
        </span>
      `);
    }
  }

  /**
   * Adds search term filter tag
   * @param {jQuery} $container - Tag container element
   * @param {string} search_term - Search term
   */
  function addSearchTermTag($container, search_term) {
    if (search_term) {
      $container.append(`
        <span class="news-filter-tag" data-type="search_term">
          "${search_term}"
          ${generateRemoveIcon()}
        </span>
      `);
    }
  }

  /**
   * Removes individual filter tags
   */
  $(document).on('click', '.news-filter-tag-remove', function (e) {
    e.preventDefault();
    e.stopPropagation();
    
    const $tag = $(this).closest('.news-filter-tag');
    const type = $tag.data('type');
    const value = $tag.data('value');
    
    // Reset the appropriate filter
    resetFilterByType(type);
    
    // Remove the tag and fetch new results
    $tag.remove();
    fetchFilteredPosts(true);
  });

  /**
   * Resets filter based on type
   * @param {string} type - Filter type to reset
   */
  function resetFilterByType(type) {
    switch (type) {
      case 'category':
        $('#category-filter').val('');
        $('.custom-dropdown .selected-text').text('Filter by category');
        $('.custom-dropdown .dropdown-selected').attr('data-value', '');
        break;
      case 'search_term':
        $('.news-filter-search-term').val('');
        break;
      case 'date_range':
      case 'date_from':
      case 'date_to':
        $('.news-filter-date-from').val('');
        if (flatpickrInstance) {
          flatpickrInstance.clear();
        }
        break;
    }
  }

  /**
   * Clears all active filters
   */
  $(document).on('click', '.news-clear-all-filters', function (e) {
    e.preventDefault();
    
    // Reset all filter inputs
    resetAllFilters();
    
    // Show featured content and clear tags
    $('.fxc-news-featured').show();
    $('.news-filter-tags').empty();
    hideNoResultsMessage();
    
    // Reset page counter
    updateCurrentPage(1);
    toggleBottomBar();
    fetchFilteredPosts(true);
  });

  /**
   * Resets all filter inputs to their default state
   */
  function resetAllFilters() {
    // Reset category filter
    $('#category-filter').val('');
    $('.custom-dropdown .selected-text').text('Filter by category');
    $('.custom-dropdown .dropdown-selected').attr('data-value', '');
    
    // Reset search input
    $('.news-filter-search-term').val('');
    
    // Reset date picker
    $('.news-filter-date-from').val('');
    if (flatpickrInstance) {
      flatpickrInstance.clear();
    }
  }

  // ====================================================================
  // UTILITY FUNCTIONS
  // ====================================================================

  /**
   * Formats date string for display
   * @param {string} dateString - Date string to format
   * @returns {string} - Formatted date string
   */
  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  /**
   * Generates the remove icon SVG for filter tags
   * @returns {string} - SVG markup for remove icon
   */
  function generateRemoveIcon() {
    return `
      <svg class="news-filter-tag-remove" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.4713 6.47133L8.94267 8L10.4713 9.52867C10.732 9.78933 10.732 10.2107 10.4713 10.4713C10.3413 10.6013 10.1707 10.6667 10 10.6667C9.82933 10.6667 9.65867 10.6013 9.52867 10.4713L8 8.94267L6.47133 10.4713C6.34133 10.6013 6.17067 10.6667 6 10.6667C5.82933 10.6667 5.65867 10.6013 5.52867 10.4713C5.268 10.2107 5.268 9.78933 5.52867 9.52867L7.05733 8L5.52867 6.47133C5.268 6.21067 5.268 5.78933 5.52867 5.52867C5.78933 5.268 6.21067 5.268 6.47133 5.52867L8 7.05733L9.52867 5.52867C9.78933 5.268 10.2107 5.268 10.4713 5.52867C10.732 5.78933 10.732 6.21067 10.4713 6.47133ZM16 8C16 12.4113 12.4113 16 8 16C3.58867 16 0 12.4113 0 8C0 3.58867 3.58867 0 8 0C12.4113 0 16 3.58867 16 8ZM14.6667 8C14.6667 4.324 11.676 1.33333 8 1.33333C4.324 1.33333 1.33333 4.324 1.33333 8C1.33333 11.676 4.324 14.6667 8 14.6667C11.676 14.6667 14.6667 11.676 14.6667 8Z" fill="#00A9A9"/>
      </svg>
    `;
  }

  // ====================================================================
  // BOTTOM BAR STATE MANAGEMENT
  // ====================================================================

  /**
   * Toggles the bottom bar visibility based on content
   * Shows/hides the bottom bar when filter tags or loader are present
   */
  function toggleBottomBar() {
    const $bottomBar = $('.news-filter-bottom');
    const $filterTags = $('.news-filter-tags');
    const $loader = $('#filter-loader');
    
    const hasContent = $filterTags.children().length > 0 || $loader.is(':visible');
    
    if (hasContent) {
      $bottomBar.addClass('has-content');
    } else {
      $bottomBar.removeClass('has-content');
    }
  }

  // ====================================================================
  // RESPONSIVE BEHAVIOR HELPERS
  // ====================================================================

  /**
   * Checks if current viewport is mobile
   * @returns {boolean} - Whether viewport is mobile size
   */
  function isMobile() {
    return window.innerWidth <= BREAKPOINTS.mobile;
  }

  /**
   * Checks if current viewport is tablet
   * @returns {boolean} - Whether viewport is tablet size
   */
  function isTablet() {
    return window.innerWidth > BREAKPOINTS.mobile && window.innerWidth <= BREAKPOINTS.tablet;
  }

  /**
   * Checks if current viewport is desktop
   * @returns {boolean} - Whether viewport is desktop size
   */
  function isDesktop() {
    return window.innerWidth > BREAKPOINTS.tablet;
  }

  /**
   * Gets the current viewport category
   * @returns {string} - Viewport category ('mobile', 'tablet', or 'desktop')
   */
  function getViewportCategory() {
    if (isMobile()) return 'mobile';
    if (isTablet()) return 'tablet';
    return 'desktop';
  }

})(jQuery);