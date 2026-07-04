jQuery(document).ready(function($) {
    function setupCategoryExpansion() {
        function handleCategoryChange(categoryValue) {
            // Remove 'expanded' class from all symbol cards
            $('.symbol-card').removeClass('expanded');

            // Expand the first symbol card in each category container
            $('.fxc-tab-content-instruments').each(function () {
                const $firstCard = $(this).find('.symbol-card').first();
                if ($firstCard.length) {
                    $firstCard.addClass('expanded');
                }
            });

            // Expand the first symbol card in the active container
            const $activeContainer = $('.fxc-tab-content-instruments.active');
            const $firstActiveCard = $activeContainer.find('.symbol-card').first();
            if ($firstActiveCard.length) {
                $firstActiveCard.addClass('expanded');
            }
        }

        // Set up click event for dropdown options
        $('.fxc-dropdown-option').on('click', function () {
            const categoryValue = $(this).data('value');
            handleCategoryChange(categoryValue);
        });

        // Initial setup
        const initialCategory = $('.fxc-dropdown-selected').data('value') || '1';
        handleCategoryChange(initialCategory);
    }

    // Initialize on DOM ready
    setupCategoryExpansion();
});