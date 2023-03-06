$(document).ready(function () {

    $(function() {
        $('#faqs').dialog({
            autoOpen: false,
            modal: true,
            width: 600,
            height: 'auto',
        });

        $('#register').dialog({
            autoOpen: false,
            modal: true,
            width: 600,
            height: 'auto',
        });

        $('#pages').on('change', function () {
            var url = $(this).val(); // get selected value
            var msg = url + 'onchange event triggered'
            console.log(msg);
            if (url === "faqs"){
                $( "#faqs" ).load("faqs.html");
            } else if (url === "register"){
                $("#register").load("register.html");
            } else if (url) { // require a URL
                window.location = url; // redirect
            } 
            return false;
        });
    });
       
      // Tiny-Slider plugin for vertical functionality
      var slider = tns({
        container: '.my-slider',
        items: 2,
        axis: "vertical",
        slideBy: 1,
        nav: false,
        controls: false,
        autoplayButton: false,
        autoplayButtonOutput: false,
        speed: 3000,
        autoplay: true,
        loop: true,
        center: true,
        responsive: {
          640: {
            edgePadding: 20,
            gutter: 20,
            items: 2
          },
          700: {
            gutter: 30
          },
          900: {
            items: 2
          }
        }
      });

      slider.play();
      window.player = document.querySelector('vm-player');

      // jCarousel plugin
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    $("#slide-arrow-next").click(function(){
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    });
    $("#slide-arrow-prev").click(function(){
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    });
});
