$(document).ready(function () {
  "use strict";

  /* ---------------------------------------------
   Loader Screen
  --------------------------------------------- */

  $(window).on('load',function () {
      $("body").css('overflow-y', 'auto');
      $('.loader0').fadeOut(1000);
  });

});
$('.toggle-menu').click (function(){
    $(this).toggleClass('active');
    $('#menu').toggleClass('open');
    $('#header').toggleClass('open');
    $('.nav .social').toggleClass('hide');
  });
  
function navbarFixed() {
    if ($('#header').length) {
      $(".navbar_pages").addClass("navbar_fixed");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll) {
                $("#header").addClass("navbar_fixed");
                $(".navbar_pages").addClass("navbar_fixed");
                $(".navbar_pages").addClass("navbar_bg");

            } else {
                $("#header").removeClass("navbar_fixed");
                $(".navbar_pages").addClass("navbar_fixed");
                $(".navbar_pages").removeClass("navbar_bg");

            }
        });
    };
};
navbarFixed();


  $(document).ready(function() {

$('.owl-client').owlCarousel({
    loop: true,
    margin: 5,
    nav: false,
    dots: true,
    autoplayTimeout: 2500,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        }
    },

});
$('.img-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplayTimeout: 2500,
    autoplay: true,
    center:true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    },

});
$('.img-slider2').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplayTimeout: 3500,
    autoplay: true,
    center:true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    },

});
$('.img-slider3').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplayTimeout: 4500,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    },

});

$('.pro-img').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    autoplay: false,
    items:1,
    autoplayTimeout: 1200,
    // smartSpeed: 1000,
    animateOut: "slideOutUp",
    animateIn: "slideInUp",
    // touchDrag: false,
    // mouseDrag: false,
    // pullDrag: false,
});

var $owl = $('.owl-studio');
$owl.children().each( function( index ) {
  $(this).attr( 'data-position', index );
});

$owl.owlCarousel({
    loop: true,
    margin: 50,
    center:true,
    nav: false,
    dots: false,
    autoplayTimeout: 2500,
    autoplay: false,
    responsiveClass:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    },
    onTranslate: function() {
      $('.owl-item').find('video').each(function() {
        this.pause();
      });
    }

});

$('.owl-item>.item').on('click', function() {
  $owl.trigger('to.owl.carousel', $(this).data( 'position' ));
  $('.video-img').removeClass('open');
    $(this).find('.video-img').addClass('open');
    $('.owl-item.active.center').find('video').each(function() {
      this.play();
    });
  });
  var sync1 = $('#sync1');
  var sync2 = $('#sync2');
  
  var sync1FirstSlideIndex; // to determine clone
  var prevIndex = 0; // to determine the direction
  
  
  // sync1
  sync1.owlCarousel({
    loop: true,
    nav: false,
    smartSpeed: 1000,
    dots: false,
    items: 1,
    animateOut: "slideOutUp",
    animateIn: "slideInUp",
    autoplay:true,
    onInitialized: function(event) {
      sync1FirstSlideIndex = event.item.index; // to determine clone
    },
    onTranslate: function(event) {
      sliderSync(event);
    }
  });
  
  function sliderSync(event) {
    var index = event.item.index;
    var loop = event.relatedTarget.options.loop;
    var sync2CloneCount = sync2.find('.owl-item.cloned').length / 2;
    
    if(loop) {
      if(index < sync1FirstSlideIndex) { // if active slide is clone
        sync2.trigger('prev.owl.carousel');
      } else {
        if(event.item.count === 2 && event.item.index === 2 && prevIndex === 3) { // if two slides and trigger = next
          sync2.trigger('next.owl.carousel');
        } else {
          sync2.trigger('to.owl.carousel', index - sync2CloneCount);
        }
      }
  
      prevIndex = event.item.index; // to determine the direction
      
    } else {
      sync2.trigger('to.owl.carousel', index);
    }
  }
  
  
  // sync2
  sync2.owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 5,
    smartSpeed: 800,
    touchDrag: false,
    mouseDrag: false,
    pullDrag: false,
    items: 1,
    animateOut: "slideOutRight",
    animateIn: "slideInLeft",
  });
  
    
        /*-------------------------------------------------------------------------------
	  WOW js
	-------------------------------------------------------------------------------*/
    function wowAnimation() {
        new WOW({
            // offset: 100,
            // mobile: true
        }).init()
    }
    wowAnimation()
});

$(document).ready(function () {
   gsap.from(".info1-text h3", {
    duration: 1.5,
    text: "",
    scrollTrigger: {
      trigger: ".about-info-1",
    }
  });
    gsap.from(".effect .info2-text h3", {
    duration: 1.5,
    text: "",
    ease: "none",
    scrollTrigger: {
      trigger: ".effect",
    }
  });
  
   gsap.from(".effect-2 .info22-text h3", {
    duration: 2, 
    delay: 1, 
    ease: "none",
        text: "",
    scrollTrigger: {
      trigger: ".effect-2",

    }

  });
   gsap.from(".serv1 h3", {
    duration: 1.5, 
    text: "",
    scrollTrigger: {
      trigger: ".serv1",
    }

  });
  gsap.from(".serv2 h3", {
    duration: 1.5, 
    delay : .5,
    ease: "none",
        text: "",
    scrollTrigger: {
      trigger: ".serv2",
    }

  });
  gsap.from(".serv3 h3", {
    duration: 2, 
    delay : 1,
    ease: "none",
        text: "",
    scrollTrigger: {
      trigger: ".serv3",
    }

  });
  $('.img-gallery1').lightGallery({
    selector: '.item a',
    thumbnail: false,
    share: false,
    fullScreen: true,
    autoplay: false,
    autoplayControls: false,
    actualSize: true,
    download:false
});

 $('.img-gallery2').lightGallery({
    selector: '.item a',
    thumbnail: false,
    share: false,
    fullScreen: true,
    autoplay: false,
    autoplayControls: false,
    actualSize: true,
    download:false
});

 $('.img-gallery3').lightGallery({
    selector: '.item a',
    thumbnail: false,
    share: false,
    fullScreen: true,
    autoplay: false,
    autoplayControls: false,
    actualSize: true,
    download:false
});


});
