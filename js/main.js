$('.hero .owl-carousel').owlCarousel({
    center: false,
    stagePadding: 0,
    items: 1,
    loop:true,
    margin:0,
    nav: true,
    navSpeed: 800,
    dots: false,

    //Basic Speeds
    slideSpeed: 900,
    paginationSpeed: 900,
    slideBy: 1,

    //Autoplay
    autoplay: true,
    autoplayHoverPause: false,

    autoplaySpeed: 800,
    autoplayTimeout: 3000,

    responsive : {
        // breakpoint from 0 up
        0 : {
            nav: false,
            dots: true,

        },
        // breakpoint from 1200 up
        1200 : {
            nav: true,
            dots: false,
        }
    }
});

// open menu

$('.toggle-menu').on('click', function() {
    $('body').toggleClass('menu-open');
    return false;
}); 


// switch plan

$('.switch__switcher').on('click', function() {
    $('.pricing').toggleClass('pricing--show-monthly');
    return false;
});  


// modal video

$('.description__watch').modaal({
    type: 'video'
}); 