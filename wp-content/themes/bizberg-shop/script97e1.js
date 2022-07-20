jQuery(document).ready(function(){

    "use strict";
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 3000,
        grabCursor: true,
        SlidesPerView: 3,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        autoplay: {
            delay: 3000,
        },
        fadeEffect: {
            crossFade: true
        },
        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
                } 
            },
            touchStart: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },
            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition = speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-main", swiperOptions);

    jQuery('.listing-slider.banner_sale_slider').slick({
         infinite: true,
         slidesToShow: bizberg_object.banner_sales_slidesToShowDesktop,
         slidesToScroll: 1,
         swipeToSlide: true,
         arrows: true,
         dots: false,
         autoplay: false,
         speed: 500,
         loop:true,
         rows:0,
         responsive: [{
             breakpoint: 900,
             settings: {
                 slidesToShow: bizberg_object.banner_sales_slidesToShowTablet
             }
         },
         {
             breakpoint: 500,
             settings: {
                 slidesToShow: bizberg_object.banner_sales_slidesToShowMobile
            }
         }]
     });

    jQuery('.attract-slider').slick({
         infinite: true,
         slidesToShow: 7,
         slidesToScroll: 1,
         swipeToSlide: true,
         arrows: true,
         rows:0,
         dots: false,
         speed: 500,
         rows:0,
         autoplay: true,
         draggable:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 3
             }
         }, 
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2
            }
         }, 
         {
             breakpoint: 500,
             settings: {
                 slidesToShow: 2
             }
         }]
     });

    jQuery('.bs_clients_logo').slick({
         infinite: true,
         slidesToShow: 6,
         slidesToScroll: 1,
         swipeToSlide: true,
         arrows: false,
         rows:0,
         dots: false,
         speed: 500,
         rows:0,
         autoplay: true,
         draggable:true,
         responsive: [{
             breakpoint: 1000,
             settings: {
                 slidesToShow: 3
             }
         }, 
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2
            }
         }, 
         {
             breakpoint: 500,
             settings: {
                 slidesToShow: 2
             }
         }]
     });

});

jQuery( document ).on( 'click', '.bs_woo_listings_frontpage', function(){

    if( jQuery(window).width() > 567 ){

        var selected = jQuery(this).closest('.tabproduct-inner').find('.woocommerce > .products');

        if( bizberg_object.tab_product_masnory_status != true ){
            selected.masonry({
                transitionDuration: 0
            });
            selected.masonry('destroy');    
            selected.removeData('masonry');
        } else {
            setTimeout(function() {
                selected.masonry('destroy');    
                selected.removeData('masonry');
                selected.masonry({
                    transitionDuration: 0
                });
            },1);
        }

    }
    
});

jQuery(document).on( 'click','.bs_tablet_mobile .dropdown-menu li a', function(){
    var $this = jQuery(this);
    setTimeout(function() {
        $this.closest('ul').find('li').removeClass('active');
        $this.closest('li').addClass('active');
    },500);
})