---
---


$(document).ready(function() {
  
  {% if jekyll.environment != 'production' %}
  // debug stuff
    $(document).on("click", function() {
      //console.log("clicked " + event.target.nodeName);
    });
    $(".viewport-measure").on("click", function() {
      console.log("click");
      if ($("body").hasClass("debug")) {
        $("body").removeClass("debug");
        localStorage.setItem("debug-css", "false");
        return false
      } else {
        $("body").addClass("debug");
        localStorage.setItem("debug-css", "true");
        return false
      };
    });
    $(window).resize(function() {
      // your size calculation code here
        $(".vwidth").html(window.innerWidth);
      }).resize();
  {% endif %}
});
