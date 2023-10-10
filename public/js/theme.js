/* global Pace, ScrollMagic, bootstrap */

(function($){
    "use strict";
    
    var $document = $(document),
        $window = $(window),
        $htmlBody = $('html, body'),
        $body = $('body'),
        $header = $('header'),
        $navbar = $('.navbar'),
        $navbarCollapse = $('.navbar-collapse'),
        $galleryGrid = $('.gallery-grid'),
        $scrollToTop = $('.scroll-to-top'),
        navHeight = 80,
        navHeightShrink = 60;
      
    /** Detect mobile device */
    var isMobile = {
        Android: function(){
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function(){
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function(){
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function(){
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function(){
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function(){
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    
    /*
    * Preloader
    */
   
    Pace.on('start', function(){
        var $paceProgress = $('.pace-progress');
        $paceProgress.addClass($body.data('preloader-color'));
    });
    
    Pace.start();
    
    
    /*
    * Window load
    */
   
    $window.on('load', function(){
        //console.log($header.height());
        /** Bootstrap scrollspy */
        $body.scrollspy({
            target: '#navigation',
            offset: 0
        });
    });
    
    
    
    /*
    * Document ready
    */
   
    $document.ready(function(){

        /*
        * Window scroll
        */
       
       
        $window.on('scroll', function(){
            
            if ($document.scrollTop() > navHeight){
                
                /** Shrink navigation */
                $('header').addClass('shrink');
                $('header').addClass('shrink');
                
                /** Scroll to top */
                $scrollToTop.fadeIn();
            }
            else{
                
                /** Shrink navigation */
                $('header').removeClass('shrink');
                $('header').removeClass('shrink');
                
                /** Scroll to top */
                $scrollToTop.fadeOut();
            }
        });
        
        $('#hero-bg-slider .carousel-custom').flickity({
            cellSelector: '.carousel-cell',
            cellAlign: 'left',
            contain: true,
            prevNextButtons: $('.carousel-custom ').data('prev-next-buttons'),
            pageDots: $('.carousel-custom').data('page-dots'),
            draggable: $('.carousel-custom').data('draggable'),
            autoPlay: $('.carousel-custom').data('autoplay'),
            imagesLoaded: true,
            initialIndex: 1,
            pauseAutoPlayOnHover: false
        })
        
       
        /*
        * Window resize
        */
       
        $window.on('resize', function(){
            
            /** Gallery grid */
            if ($.fn.isotope){
                $galleryGrid.isotope('layout');
            }
        });
        
        
        /** Counter Number */
        if ($.fn.countTo){
            var $timer = $('.timer');
            $timer.one('inview', function(isInView){
                if (isInView){
                    $(this).countTo();
                }
            });
        }
        
        
        /** Gallery - Grid */
        if ($.fn.imagesLoaded && $.fn.isotope){
            $galleryGrid.imagesLoaded(function(){
                $galleryGrid.isotope({
                    itemSelector: '.item',
                    layoutMode: 'masonry'
                });
            });
        }
        
        
        /** Gallery - Magnific popup */
        if ($.fn.magnificPopup){
           
            $('.img-fluid').magnificPopup({
                delegate: 'a',
                type: 'image',
                mainClass: 'mfp-fade',
                gallery:{
                    enabled: true,
                    navigateByImgClick: true,
                    preload: [0,2],
                    tPrev: 'Previous',
                    tNext: 'Next',
                    tCounter: '<span className="mfp-counter-curr">%curr%</span> of <span class="mfp-counter-total">%total%</span>'
                }
            });
        }
        
        
        /** BG Parallax */
        if (typeof ScrollMagic !== 'undefined'){
            var selector = '#hero-bg-parallax';
            
            // Init controller
            var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: 'onEnter', duration: '200%'}});
        
            // Build scenes
            new ScrollMagic.Scene({triggerElement: selector})
                    .setTween(selector + ' > .bg-img-parallax', {y: '80%', ease: Linear.easeNone})
                    .addTo(controller);
        }
        
        
        
     
        
       
        
        
        /** Countdown */
        if ($.fn.countdown){
            var $clock = $('#clock'),
                untilDate = $clock.data('until-date');

            $clock.countdown(untilDate, function(e){
                $(this).html(e.strftime(''
                    + '<div className="clock-item p-3 text-center"><span className="d-block font-alt font-w-600 letter-spacing-1 text-uppercase text-white text-small title-md-small">%D</span><span className="d-block font-alt font-w-600 letter-spacing-1 mt-1 text-uppercase text-white text-extra-small">Days</span></div>'
                    + '<div className="clock-item ms-1 ms-sm-2 p-3 text-center"><span className="d-block font-alt font-w-600 letter-spacing-1 text-uppercase text-white text-small title-md-small">%H</span><span className="d-block font-alt font-w-600 letter-spacing-1 mt-1 text-uppercase text-white text-extra-small">Hr</span></div>'
                    + '<div className="clock-item ms-1 ms-sm-2 p-3 text-center"><span className="d-block font-alt font-w-600 letter-spacing-1 text-uppercase text-white text-small title-md-small">%M</span><span className="d-block font-alt font-w-600 letter-spacing-1 mt-1 text-uppercase text-white text-extra-small">Min</span></div>'
                    + '<div className="clock-item ms-1 ms-sm-2 p-3 text-center"><span className="d-block font-alt font-w-600 letter-spacing-1 text-uppercase text-white text-small title-md-small">%S</span><span className="d-block font-alt font-w-600 letter-spacing-1 mt-1 text-uppercase text-white text-extra-small">Sec</span></div>'));
            });
        }
        
        
        

    });
})(jQuery);