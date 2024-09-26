$(document).ready(function(){
    $(".banner-slider").owlCarousel({
        items:1,
    });
    $(".slider-section").owlCarousel({
        margin: 50,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            480:{
                items:2,
                nav:true
            },
            767:{
                items:3,
                nav:false
            },
            991:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
    $(".special-offer-slider").owlCarousel({
        items:5,
        margin: 50,
    });
    $(".testimonials").owlCarousel({
        items:3,
        margin: 50,
    });
    $(".articles-section").owlCarousel({
        items:4,
        margin: 50,
    });
  });