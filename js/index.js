// JavaScript Document
jQuery(document).ready(function($) {

    var scrollig = false;
    var owl;
    $(document).ready(function() {
    
        $('#layerslider').layerSlider({
            responsive: true,
            firstLayer: 1,
            skin: 'borderlesslight',
            skinsPath: '',
            navButtons: false,
            navPrevNext: false,
            navStartStop: false,
            cbAnimStart: function(){
                scrollig = true;
            },
            cbAnimStop: function(){
                scrollig = false;
            }
        });
    
        $('.apps .owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:4
                },
                1000:{
                    items:5
                },
                1300:{
                    items:7
                }
            }
        });
    
        $('.awards.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 5000,
            responsive:{
                0:{
                    items:1
                }
            }
        });
    
        $('.expertises.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 5100,
            responsive:{
                0:{
                    items:1
                }
            }
        });
    
        $('.skills .owl-carousel').owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            autoplay: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:4
                },
                1000:{
                    items:6
                },
                1600:{
                    items:9
                }
            }
        });
        
    
        owl = $('.cases.owl-carousel');
    
        owl.owlCarousel({
            loop:false,
            margin:0,
            nav:false,
            autoplay: false,
            dots:false,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                },
                1800:{
                    items:5
                }
            }
        });
        
        $('section.portifolio .navigation .prev').click(function() {
            owl.trigger('prev.owl.carousel', [300]);
        });
    
        $('section.portifolio .navigation .next').click(function() {
            owl.trigger('next.owl.carousel', [300]);
        });

        $('section.portifolio .next-btn').click(function() {
            owl.trigger('next.owl.carousel', [300]);
        });
    
        $("header .menu a").click(function(e){
            var div = $(this).data('id');
            $('html, body').animate({scrollTop: $("#"+div).offset().top}, 1000);
        });

        $("footer .menu a").click(function(e){
            var div = $(this).data('id');
            $('html, body').animate({scrollTop: $("#"+div).offset().top}, 1000);
        });

        $(".linknav").click(function(e){
            var div = $(this).data('id');
            $('html, body').animate({scrollTop: $("#"+div).offset().top}, 1000);
        });
    
    });

});