$(document).ready(function () {

    $(function() {
        $('#pages').on('change', function () {
            var url = $(this).val(); // get selected value
            if (url) { // require a URL
                window.location = url; // redirect
            } 
            return false;
        });
    });

    // Accordion widget
    $( function() {
        $( "#accordion" ).accordion();
        } );
        
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

    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    
    // Reservation form
	$("#register").click(function() {
		let isValid = true;

		// Check email
		const email = $("#email").val().trim();
		if (email == "") {
			$("#email").next().text("Required");
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$("#email").next().text("Invalid");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		$("#email").val(email);

		// Check phone number
		const phone = $("#phone").val().trim();
		if (phone == "") {
			$("#phone").next().text("Required");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}
		$("#phone").val(phone);

        const country = $("#country").val();

        if (country.value == "") {
			$("#country").next().text("Required");
			isValid = false;
        } else {
            $("#country").next().text("");
        }
        $("#country").val(country);

        if ($('#terms').is(':checked')) {
            // the checkbox is checked
            $("#terms").next().text("");
          } else {
            // the checkbox is not checked
            $("#terms").next().text("Required");
          }
        
        var textboxValue = $('#comments').val();
        if (textboxValue.length === 0) {
          // the textbox is empty
          $("#comments").next().text("Required");
        } else if (textboxValue.length < 3) {
          // the textbox value is too short
          $("#comments").next().text("Too Short");
        } else if (textboxValue.length > 20) {
          // the textbox value is too long
          $("#comments").next().text("Too long");
        } else if (/^[a-zA-Z]+$/.test(textboxValue) === false) {
          // the textbox value contains invalid characters
          $("#comments").next().text("Invalid");
        } else {
          // the textbox value is valid
          $("#comments").next().text("");
        }
        $("#comments").val(textboxValue);


		// prevent the submission of the form if any entries are invalid
		if (!isValid) {
			evt.preventDefault();
		} else {
            $("#popup").addClass('hidden');
            $("#confirmed").show();
        }
	}); // end submit

    $("#reset_form").click(function() {
        $("#email").val("");
        $("#email").next().text("*");
        $("#phone").val("");
        $("#phone").next().text("*");
        $("#country").val("");
        $("#country").next().text("*");
        $("#terms").prop('checked', false);
        $("#terms").next().text("*");
        $("#comments").val("");
        $("#comments").next().text("*");
    });
});
