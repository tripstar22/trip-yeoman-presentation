'use strict';

$(document).ready(function() {
    // call all custom functions
    function init() {

        // sectionHeight();

        // full page scrolling sections
        $('#fullpage').fullpage();

        // fittext calls on h1 and h2
        $("h1").fitText(1.2, { minFontSize: '24px', maxFontSize: '68px' });
        $("h2").fitText(1.2, { minFontSize: '22px', maxFontSize: '50px' });

        console.log("init works!");
    }

    init();

    // make sections window height if window height greater than 699px
    function sectionHeight() {

        var windowHeight = $(window).height();

        if ($(window.height > 699)) {

          $("section").css("height", windowHeight);
          $("main").css("top", windowHeight);
        }
    }

});
