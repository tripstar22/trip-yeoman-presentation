'use strict';

$(document).ready(function() {
    // call all custom functions
    function init() {

        var windowHeight = $(window).height();

        // if window height is greater than 699px use fullpage.js
        if ($(windowHeight > 699)) {

            // full page scrolling sections
            $('#fullpage').fullpage({
              navigation: true,
              navigationPosition: 'right'
            });
        }

        // fittext calls on h1 and h2
        $("h1").fitText(1.5, { minFontSize: '20px', maxFontSize: '68px' });
        $("h2").fitText(1.5, { minFontSize: '18px', maxFontSize: '50px' });
    }

    init();

});
