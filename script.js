$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 500) {
            $("#header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("#nheader").removeClass("active");
        }
    });
});