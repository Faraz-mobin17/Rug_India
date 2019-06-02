jssor_1_slider_init = function() {
  var jssor_1_SlideshowTransitions = [{ $Duration: 300, $Opacity: 2 }];

  var jssor_1_options = {
    $AutoPlay: 1,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/

  var MAX_WIDTH = 980;

  function ScaleSlider() {
    var containerElement = jssor_1_slider.$Elmt.parentNode;
    var containerWidth = containerElement.clientWidth;

    if (containerWidth) {
      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

      jssor_1_slider.$ScaleWidth(expectedWidth);
    } else {
      window.setTimeout(ScaleSlider, 30);
    }
  }

  ScaleSlider();

  $Jssor$.$AddEvent(window, "load", ScaleSlider);
  $Jssor$.$AddEvent(window, "resize", ScaleSlider);
  $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
};
jssor_1_slider_init();

(function($) {
  "use strict"; // Start of use strict

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(document).on("click", "a.nav-link", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 20
        },
        1250,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-collapse ul li a").click(function() {
    $(".navbar-toggler:visible").click();
  });
})(jQuery); // end of use strict

// add class
const border = document.querySelector(".border-small");
// scroll reveal effect
ScrollReveal().reveal("#custom", { delay: 500 });
ScrollReveal().reveal("#collection", { delay: 500 });
ScrollReveal().reveal("#contact", { delay: 500 });
ScrollReveal().reveal("section.locate", { delay: 500 });
