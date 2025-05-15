jQuery( document ).ready(function() {
    jQuery('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        items: 1,
        dots: true,
        nav: true
    });

    jQuery('.menu-icon').click(function() {
        jQuery('body').toggleClass('menu-open')
    })
});


