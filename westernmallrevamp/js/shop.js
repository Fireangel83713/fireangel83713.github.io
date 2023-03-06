$(document).ready(function () {

    $(function(){
        // bind change event to select
        $('#pages').on('change', function () {
            var url = $(this).val(); // get selected value
            if (url) { // require a URL
                window.location = url; // redirect
            }
            return false;
        });
      });


    $('#carousel').waltzer({
        scroll:1,
        vertical:true,
        circular:false,
        speed:500,
        left_nav_btn:'.topNav',
        right_nav_btn:'.botNav'
    });

});