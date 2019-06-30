$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
            $("#header").addClass("active");
            $("#header").removeClass("regular");
            console.log("yeet");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
            $("#header").addClass("regular");
           $("#header").removeClass("active");
           
           console.log("yeeted")
        }
    });
});

// $(window).on("scroll", function() {
//     if($(window).scrollTop() > 50) {
//         $("#header").addClass("active");
//     } else {
//         //remove the background property so it comes transparent again (defined in your css)
//        $("#header").removeClass("active");
//     }
// });