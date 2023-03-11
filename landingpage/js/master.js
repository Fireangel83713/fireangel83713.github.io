"use strict";

$(document).ready(function () {

    $('#gallery').lbtLightBox({
        qtd_pagination: 6,
        pagination_width: "160px",
        pagination_height: "160px",
        custom_children: ".box img",
        captions: true,
        captions_selector: ".caption p",
    });

    var $st = $('.pagination');
    var $slickEl = $('.center');

    $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $st.text(i + ' of ' + slick.slideCount);
    });

    $slickEl.slick({
        centerMode: true,
        centerPadding: '150px',
        autoplay: true,
        slidesToShow: 1,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
    

      
      $("#galleryButton").click( function () {
        $(".container").removeClass(`hidden`);
      });

      $("#closeButton").click( function () {
        $(".container").addClass(`hidden`);
      });

      $("#enter").click(function() {
        window.location.href = "index.html";
      });

      $("html").jstars({
        image_path: 'images',
        image: 'jstar-map.png',
        style: 'rand',
        width: 27,
        height: 27,
        style_map: {
            white: 0,
            blue: -27,
            green: -54,
            red: -81,
            yellow: -108
        },
        delay: 300
    });
});