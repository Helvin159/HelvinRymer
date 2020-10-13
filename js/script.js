$(".herocontent").css("opacity", "0");
$("body").css("backgroundColor", "#000404");
$(".heroitem").hide();
$(".sectionOne").css("opacity", 1);
$(".navbar").css("opacity", 0);

$(document).ready(function () {
  $(".herocontent").css("transition", "3s ease-in");

  $(".herocontent").css("opacity", "1");

  $(".navbar").css("transition", "4s ease-in");

  $(".navbar").css("opacity", 1);

  $("#viewsection6").click(function () {
    $(".section6").show();
  });

  $("#viewsection7").click(function () {
    $(".section7").show();
  });

  $("#viewsec6").click(function () {
    $(".section6").show();
  });

  $("#viewsec7").click(function () {
    $(".section7").show();
  });

  $("#firsth3").css("animation", "slidein 4s 1");

  $("#secondh3").css("animation", "slidein 3s 1");

  $("#thirdh3").css("animation", "slidein 2s 1");

  $("#fourthh3").css("animation", "slidein 1s 1");

  if ($(window).width() > 768) {
    $("#herorow1").mouseover(function () {
      $(".heroimg").css(
        "transform",
        "rotateY(180deg) translateX(310px) translateY(-100px)"
      );
      $(".heroimg").css("transition", "1.3s ease-in-out");
      $(".heroitem").show();
      $(".heroitem").css("transition", "3s ease-in");
      $(".heroitem").css("opacity", "1");
    });

    $(".heroitem").mouseover(function () {
      $(".heroimg").css("transform", "translateX(-250px) translateY(-100px)");
    });

    $(".heroitem").mouseout(function () {
      $(".heroimg").css(
        "transform",
        "rotateY(180deg) translateX(370px) translateY(-100px)"
      );
    });

    $("#madein").mouseover(function () {
      $(".downarrow").css("transition", "2s ease-in-out");
      $(".downarrow").css("transform", "rotateY(1600deg)");
    });

    $(".downarrow").mouseleave(function () {
      $(this).css("transition", "2s ease-in-out");
      $(this).css("transform", "rotateY(-1600deg)");
    });
  }

  $("#madein").mouseover(function () {
    $(".downarrow").css("transition", "2s ease-in-out");
    $(".downarrow").css("transform", "rotateY(1600deg)");
  });

  $(".downarrow").mouseleave(function () {
    $(this).css("transition", "2s ease-in-out");
    $(this).css("transform", "rotateY(-1600deg)");
  });

  //  Sections BELOW this comment animations and background images
  if ($(window).width() >= 1366) {
    //Section_1
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 300) {
        $("#sectionOne").css("transition", "1s ease-in");
        $("#sectionOne").css("transition", ".5s ease-in-out");
        $("#sectionOne").css("opacity", 1);
        $("#sectionOne").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)), url(assets/rymeracademy/1.png)");
        $("#sectionOne").css("background-size", "cover");
        $("#sectionOne").css("background-attachment", "fixed");
        $("#sectionOne").css("background-position", "center center");
        $("#title1").css("animation", "slidein 2s 1");
        $("#titlenum1").css("animation", "slidein2 2s 1");
      } else {
        $("#sectionOne").css("opacity", 0);
      }
    });

    //Section_2
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 2000) {
        $("#section2").css("transition", ".5s ease-in-out");
        $("#section2").css("opacity", 1);
        $("#section2").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/maniacink/1.png)"
        );
        $("#section2").css("background-size", "cover");
        $("#section2").css("background-attachment", "fixed");
        $("#section2").css("background-position", "center center");
        $("#title2").css("animation", "slidein 2s 1");
        $("#titlenum2").css("animation", "slidein2 2s 1");
      } else {
        $("#section2").css("opacity", 0);
      }
    });

    //Section_3
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 4350) {
        $("#section3").css("transition", ".5s ease-in-out");
        $("#section3").css("opacity", 1);
        $("#section3").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/Lifestyle/2.jpg)"
        );
        $("#section3").css("background-size", "cover");
        $("#section3").css("background-attachment", "fixed");
        $("#section3").css("background-position", "center center");
        $("#title3").css("animation", "slidein 2s 1");
        $("#titlenum3").css("animation", "slidein2 2s 1");
      } else {
        $("#section3").css("opacity", 0);
      }
    });

    //Section_4
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 6250) {
        $("#section4").css("transition", ".5s ease-in-out");
        $("#section4").css("opacity", 1);
        $("#section4").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/nblackburn/nb7.jpg)"
        );
        $("#section4").css("background-size", "cover");
        $("#section4").css("background-attachment", "fixed");
        $("#section4").css("background-position", "center center");
        $("#title4").css("animation", "slidein 2s 1");
        $("#titlenum4").css("animation", "slidein2 2s 1");
      } else {
        $("#section4").css("opacity", 0);
      }
    });

    //Section_5
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 8450) {
        $("#section5").css("transition", ".5s ease-in-out");
        $("#section5").css("opacity", 1);
        $("#section5").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/selffit/3.png)"
        );
        $("#section5").css("background-size", "cover");
        $("#section5").css("background-attachment", "fixed");
        $("#section5").css("background-position", "center center");
        $("#title5").css("animation", "slidein 2s 1");
        $("#titlenum5").css("animation", "slidein2 2s 1");
      } else {
        $("#section5").css("opacity", 0);
      }
    });

    //ABOUTME
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 200) {
        $("#aboutme").css("transition", "1s ease-in");
        $("#aboutme").css("transition", ".5s ease-in-out");
        $("#aboutme").css("opacity", 1);
        $("#aboutme").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/bgimages/bgimage7.jpg)"
        );
        $("#aboutme").css("background-size", "cover");
        $("#aboutme").css("background-position", "center center");
        $("#aboutme").css("background-attachment", "fixed");
      } else {
        $("#aboutme").css("opacity", 0);
      }
    });

    //Scroll to top btn
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 2000) {
        $("#backtotop").css("display", "block");
        $("#backtotop").css("transition", "2s ease-in");
        $("#backtotop").css("opacity", "1");
        $("#backtotop").css("z-index", "10");
      } else if (y < 2000) {
        $("#backtotop").css("display", "none");
        $("#backtotop").css("opacity", "0");
      }
    });
  } else if ($(window).width() > 1024 && $(window).width() < 1366) {
    //Section_1
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 300) {
        $("#sectionOne").css("transition", "1s ease-in");
        $("#sectionOne").css("transition", ".5s ease-in-out");
        $("#sectionOne").css("opacity", 1);
        $("#sectionOne").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/rymeracademy/1.png)"
        );
        $("#sectionOne").css("background-size", "cover");
        $("#sectionOne").css("background-attachment", "scroll");
        $("#sectionOne").css("background-position", "center center");
        $("#title1").css("animation", "slidein 2s 1");
        $("#titlenum1").css("animation", "slidein2 2s 1");
      } else {
        $("#sectionOne").css("opacity", 0);
      }
    });

    //Section_2
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 2000) {
        $("#section2").css("transition", ".5s ease-in-out");
        $("#section2").css("opacity", 1);
        $("#section2").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/maniacink/1.png)"
        );
        $("#section2").css("background-size", "cover");
        $("#section2").css("background-attachment", "scroll");
        $("#section2").css("background-position", "center center");
        $("#title2").css("animation", "slidein 2s 1");
        $("#titlenum2").css("animation", "slidein2 2s 1");
      } else {
        $("#section2").css("opacity", 0);
      }
    });

    //Section_3
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 4350) {
        $("#section3").css("transition", ".5s ease-in-out");
        $("#section3").css("opacity", 1);
        $("#section3").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/Lifestyle/2.jpg)"
        );
        $("#section3").css("background-size", "cover");
        $("#section3").css("background-attachment", "scroll");
        $("#section3").css("background-position", "center center");
        $("#title3").css("animation", "slidein 2s 1");
        $("#titlenum3").css("animation", "slidein2 2s 1");
      } else {
        $("#section3").css("opacity", 0);
      }
    });

    //Section_4
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 6250) {
        $("#section4").css("transition", ".5s ease-in-out");
        $("#section4").css("opacity", 1);
        $("#section4").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/nblackburn/nb7.jpg)"
        );
        $("#section4").css("background-size", "cover");
        $("#section4").css("background-attachment", "scroll");
        $("#section4").css("background-position", "center center");
        $("#title4").css("animation", "slidein 2s 1");
        $("#titlenum4").css("animation", "slidein2 2s 1");
      } else {
        $("#section4").css("opacity", 0);
      }
    });

    //Section_5
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 8450) {
        $("#section5").css("transition", ".5s ease-in-out");
        $("#section5").css("opacity", 1);
        $("#section5").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/selffit/3.png)"
        );
        $("#section5").css("background-size", "cover");
        $("#section5").css("background-attachment", "scroll");
        $("#section5").css("background-position", "center center");
        $("#title5").css("animation", "slidein 2s 1");
        $("#titlenum5").css("animation", "slidein2 2s 1");
      } else {
        $("#section5").css("opacity", 0);
      }
    });

    //ABOUTME
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 200) {
        $("#aboutme").css("transition", "1s ease-in");
        $("#aboutme").css("transition", ".5s ease-in-out");
        $("#aboutme").css("opacity", 1);
        $("#aboutme").css(
          "background",
          "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/bgimages/bgimage7.jpg)"
        );
        $("#aboutme").css("background-size", "cover");
        $("#aboutme").css("background-position", "center center");
        $("#aboutme").css("background-attachment", "scroll");
      } else {
        $("#aboutme").css("opacity", 0);
      }
    });

    //Scroll to top btn
    $(document).scroll(function () {
      var y = $(this).scrollTop();
      if (y > 2000) {
        $("#backtotop").css("display", "block");
        $("#backtotop").css("transition", "2s ease-in");
        $("#backtotop").css("opacity", "1");
        $("#backtotop").css("z-index", "10");
      } else if (y < 2000) {
        $("#backtotop").css("display", "none");
        $("#backtotop").css("opacity", "0");
      }
    });
  } else if ($(window).width() < 1024 && $(window).width() >= 768) {
    //Section_1
    $("#sectionOne").css("transition", "1s ease-in");
    $("#sectionOne").css("transition", ".5s ease-in-out");
    $("#sectionOne").css("opacity", 1);
    $("#sectionOne").css("height", "70vh");
    $("#sectionOne").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/rymeracademy/esports.png)"
    );
    $("#sectionOne").css("background-size", "100vw 100vh !important");
    $("#sectionOne").css("background-attachment", "scroll");
    $("#sectionOne").css("background-position", "center center");
    $("#title1").css("animation", "slidein 2s 1");
    $("#titlenum1").css("animation", "slidein2 2s 1");

    //Section_2
    $("#section2").css("transition", ".5s ease-in-out");
    $("#section2").css("opacity", 1);
    $("#section2").css("height", "70vh");
    $("#section2").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/maniacink/1.png)"
    );
    $("#section2").css("background-size", "100vw 100vh !important");
    $("#section2").css("background-attachment", "scroll");
    $("#section2").css("background-position", "center center");
    $("#title2").css("animation", "slidein 2s 1");
    $("#titlenum2").css("animation", "slidein2 2s 1");

    //Section_3
    $("#section3").css("transition", ".5s ease-in-out");
    $("#section3").css("opacity", 1);
    $("#section3").css("height", "70vh");
    $("#section3").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/lifestyle/2.jpg)"
    );
    $("#section3").css("background-size", "100vw 100vh !important");
    $("#section3").css("background-attachment", "scroll");
    $("#section3").css("background-position", "center center");
    $("#title3").css("animation", "slidein 2s 1");
    $("#titlenum3").css("animation", "slidein2 2s 1");

    //Section_4
    $("#section4").css("transition", ".5s ease-in-out");
    $("#section4").css("opacity", 1);
    $("#section4").css("height", "70vh");
    $("#section4").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/nblackburn/nb7.jpg)"
    );
    $("#section4").css("background-size", "100vw 100vh !important");
    $("#section4").css("background-attachment", "scroll");
    $("#section4").css("background-position", "center center");
    $("#title4").css("animation", "slidein 2s 1");
    $("#titlenum4").css("animation", "slidein2 2s 1");
    //Section_5
    $("#section5").css("transition", ".5s ease-in-out");
    $("#section5").css("opacity", 1);
    $("#section5").css("height", "70vh");
    $("#section5").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/selffit/3.png)"
    );
    $("#section5").css("background-size", "100vw 100vh !important");
    $("#section5").css("background-attachment", "scroll");
    $("#section5").css("background-position", "center center");
    $("#title5").css("animation", "slidein 2s 1");
    $("#titlenum5").css("animation", "slidein2 2s 1");

    //	About
    $("#aboutme").css("transition", "1s ease-in");
    $("#aboutme").css("transition", ".5s ease-in-out");
    $("#aboutme").css("opacity", 1);
    $("#aboutme").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/bgimages/bgimage7)"
    );
    $("#aboutme").css("background-size", "100vw 100vh !important");
    $("#aboutme").css("background-position", "center center");
    $("#aboutme").css("background-attachment", "scroll");
  } else if ($(window).width() < 768 && $(window).width() >= 375) {
    //Section_1
    $("#sectionOne").css("transition", "1s ease-in");
    $("#sectionOne").css("transition", ".5s ease-in-out");
    $("#sectionOne").css("opacity", 1);
    $("#sectionOne").css("height", "70vh");
    $("#sectionOne").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/rymeracademy/esports.png)"
    );
    $("#sectionOne").css("background-size", "100vw 100vh !important");
    $("#sectionOne").css("background-attachment", "scroll");
    $("#sectionOne").css("background-position", "center center");
    $("#title1").css("animation", "slidein 2s 1");
    $("#titlenum1").css("animation", "slidein2 2s 1");

    //Section_2
    $("#section2").css("transition", ".5s ease-in-out");
    $("#section2").css("opacity", 1);
    $("#section2").css("height", "70vh");
    $("#section2").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(assets/maniacink/1.png)"
    );
    $("#section2").css("background-size", "100vw 100vh !important");
    $("#section2").css("background-attachment", "scroll");
    $("#section2").css("background-position", "center center");
    $("#title2").css("animation", "slidein 2s 1");
    $("#titlenum2").css("animation", "slidein2 2s 1");

    //Section_3
    $("#section3").css("transition", ".5s ease-in-out");
    $("#section3").css("opacity", 1);
    $("#section3").css("height", "70vh");
    $("#section3").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/lifestyle/2.jpg)"
    );
    $("#section3").css("background-size", "100vw 100vh !important");
    $("#section3").css("background-attachment", "scroll");
    $("#section3").css("background-position", "center center");
    $("#title3").css("animation", "slidein 2s 1");
    $("#titlenum3").css("animation", "slidein2 2s 1");

    //Section_4
    $("#section4").css("transition", ".5s ease-in-out");
    $("#section4").css("opacity", 1);
    $("#section4").css("height", "70vh");
    $("#section4").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/nblackburn/nb7.jpg)"
    );
    $("#section4").css("background-size", "100vw 100vh !important");
    $("#section4").css("background-attachment", "scroll");
    $("#section4").css("background-position", "center center");
    $("#title4").css("animation", "slidein 2s 1");
    $("#titlenum4").css("animation", "slidein2 2s 1");
    //Section_5
    $("#section5").css("transition", ".5s ease-in-out");
    $("#section5").css("opacity", 1);
    $("#section5").css("height", "70vh");
    $("#section5").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/ptax/ptax.png)"
    );
    $("#section5").css("background-size", "100vw 100vh !important");
    $("#section5").css("background-attachment", "scroll");
    $("#section5").css("background-position", "center center");
    $("#title5").css("animation", "slidein 2s 1");
    $("#titlenum5").css("animation", "slidein2 2s 1");

    //	About
    $("#aboutme").css("transition", "1s ease-in");
    $("#aboutme").css("transition", ".5s ease-in-out");
    $("#aboutme").css("opacity", 1);
    $("#aboutme").css(
      "background",
      "linear-gradient(0deg, rgba(0,0,0,0.80),rgba(0,0,0,0.80)),url(css/bgimages/bgimage7)"
    );
    $("#aboutme").css("background-size", "100vw 100vh !important");
    $("#aboutme").css("background-position", "center center");
    $("#aboutme").css("background-attachment", "scroll");
  }

  $("#openbtn").click(function () {
    $("#bgmusic").show();
    $("#bgmusic").css("border-radius", "10px");
    $("#closebtn").show();
    $("#openbtn").hide();
  });

  $("#closebtn").click(function () {
    $("#bgmusic").hide();
    $("#closebtn").hide();
    $("#openbtn").show();
  });
});

$(window).on("load", function () {
  $(window)
    .scroll(function () {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    })
    .scroll(); //invoke scroll-handler on page-load
});
