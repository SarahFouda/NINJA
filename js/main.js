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
            items: 3
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
 

    var sync1 = jQuery("#sync1");
    var sync2 = jQuery("#sync2");
    var slidesPerPage = 1; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1
      .owlCarousel({
        items: 1,
        margin:5,
        loop: true,
        nav: true,
        dots:false,
        autoplay: true,
        autoplayTimeout: 8000,
        animateOut: "slideOutUp",
        animateIn: "slideInUp",
      navText: []
    })
      .on("changed.owl.carousel", syncPosition);

    sync2
      .on("initialized.owl.carousel", function() {
      sync2
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
      .owlCarousel({
      items: slidesPerPage,
      dots: false,
      nav: false,
      margin:10,
      autoplayTimeout: 8000,
      center: true,
      animateOut: "slideOutRight",
       animateIn: "slideInLeft",
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100
    })
      .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
      //if you set loop to false, you have to restore this next line
      //var current = el.item.index;

      //if you disable loop you have to comment this block
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

      if (current < 0) {
        current = count;
      }
      if (current > count) {
        current = 0;
      }

      //end block

      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find(".owl-item.active").length - 1;
      var start = sync2
      .find(".owl-item.active")
      .first()
      .index();
      var end = sync2
      .find(".owl-item.active")
      .last()
      .index();

      if (current > end) {
        sync2.data("owl.carousel").to(current, 100, true);
      }
      if (current < start) {
        sync2.data("owl.carousel").to(current - onscreen, 100, true);
      }
    }

    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data("owl.carousel").to(number, 100, true);
      }
    }

    sync2.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = jQuery(this).index();
      sync1.data("owl.carousel").to(number, 300, true);
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
  
});
