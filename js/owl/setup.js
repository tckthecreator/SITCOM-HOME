$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center: true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    smartSpeed: 15,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})