'use strict';

$(document).ready(function() {
    // call all custom functions
    function init() {

        var windowHeight = $(window).height();

        // if window height is greater than 699px use fullpage.js
        if ($(window.height > 699)) {

            // full page scrolling sections
            $('#fullpage').fullpage();
        }

        // fittext calls on h1 and h2
        $("h1").fitText(0.8, { minFontSize: '24px', maxFontSize: '68px' });
        $("h2").fitText(0.4, { minFontSize: '22px', maxFontSize: '50px' });
    }

    init();

});
