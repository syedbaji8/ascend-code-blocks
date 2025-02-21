(function ($) {
    $(document).ready(function () {
        // Info:< Autocomplete Input dropdown
        $(document).on('focus', '.has-autocomplete input', function () {
            var $this = $(this);
            var $parent = $this.closest('.has-autocomplete');
            $parent.addClass('active');
        });
        $(document).on('click', function (event) {
            if (!$(event.target).closest('.has-autocomplete input').length) {
                $('.has-autocomplete').removeClass('active');
            }
            if (!$(event.target).closest('.add-candidate-or-requisition-button').length) {
                $('.add-candidate-or-requisition-button').removeClass('active');
            }
        });
        // Info: On select of any dropdown option
        $(document).on('click', '.autocompletedropdowns li', function (event) {
            var $this = $(this);
            var $parent = $this.closest('.has-autocomplete');
            var $input = $parent.find('input');
            var $dropdown = $parent.find('.autocompletedropdowns');
            $input.val($this.text());
        });
        // Info:> Autocomplete Input dropdown
        // Info:< advance search style
        $(document).on('click', '.advance-search--toggler', function () {
            var $this = $(this);
            var $parent = $this.closest('.has-advance-search');
            if (!$parent.hasClass('active')) {
                $parent.addClass('active');
            } else {
                $parent.removeClass('active');
            }
        });
        // Info:> advance search style
        // Info:< add-candidate-or-requisition dropdown
        $(document).on('click', '.add-candidate-or-requisition-button', function () {
            var $this = $(this);
            if ($this.hasClass('has-dropdown')) {
                if (!$this.hasClass('active')) {
                    $this.addClass('active');
                } else {
                    $this.removeClass('active');
                }
            }
        });
        // Info:> add-candidate-or-requisition dropdown

        // document.addEventListener('click', function (event) {
        //     const clickedElement = event.target;

        //     // Find the closest parent with the 'group' class
        //     const groupElement = clickedElement.closest('.form-group');

        //     if (groupElement) {
        //         const htmlSource = groupElement.outerHTML; // Get HTML of the group
        //         // Copy to clipboard
        //         navigator.clipboard.writeText(htmlSource)
        //             .then(() => {
        //                 console.log('Group HTML copied to clipboard:', htmlSource);
        //             })
        //             .catch(err => {
        //                 console.error('Failed to copy:', err);
        //             });
        //     } else {
        //         console.log('Clicked element is not inside a group.');
        //     }
        // });
    });
})(jQuery);