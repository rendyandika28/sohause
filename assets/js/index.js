$(window).ready(function () {
  $("#loadingSpinner").fadeOut(1000);

  $(".fade-element-up").each(function (i) {
    const top_of_object = $(this).offset().top;
    const bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it */
    if (bottom_of_window > top_of_object) {
      $(this).addClass("reveal-up");
    } else {
      // reveal-up object reaches the in view port
      $(window).scroll(function () {
        $(".fade-element-up").each(function (i) {
          const top_of_object = $(this).offset().top;
          const bottom_of_window = $(window).scrollTop() + $(window).height();

          if (bottom_of_window > top_of_object) {
            $(this).addClass("reveal-up");
          } else {
            $(this).removeClass("reveal-up");
          }
        });
      });
    }
  });
});
