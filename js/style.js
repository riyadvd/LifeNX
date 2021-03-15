
window.onscroll = function () { myFunction() };

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

$("#openNav").click(function () {
    $("#myHeader").width(250);
})

$("#closeNav").click(function () {
    $("#myHeader").width(0);
})

$(document).ready(function () {
    var h = $(window).height();
    console.log(h);
    $("#carouselExampleIndicators").height(h - 10);
    $(".carousel-inner").height(h - 10);
    $(".helper").height(h);
    $("#connection").height(h + 100);
})

$(document).scroll(function () {
    var h = $(window).height();

    var y = $(this).scrollTop();
    if ((y > (h - 80)) && (y < (h + h))) {
        $('#myHeader').fadeIn();
        $('.social').fadeIn();
    } else {
        $('#myHeader').fadeOut();
        $('.social').fadeOut();
    }

})

