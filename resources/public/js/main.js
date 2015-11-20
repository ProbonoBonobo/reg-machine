/* =Main INIT Function
-------------------------------------------------------------- */
function initializeMaven() {
	"use strict";
	
	//STICKY NAV
	(function() {
		function navigationSticky(){
			var st = $(window).scrollTop(),
				logoHeight = $('.header-inner').outerHeight(),
				navButton = $('.menu-button, .menu-button-grid'),
				wh = $('.nav-trigger').outerHeight() - logoHeight,
				navButtonMargin = (logoHeight - 12) / 2;

			if (st > wh) {
				$('.header-inner').addClass('scrolled');
			} else {
				$('.header-inner').removeClass('scrolled');
			};

			navButton.css({
				"top": navButtonMargin + "px"
			});
		}

		$(document).on("ready", navigationSticky);
		$(window).on("scroll", navigationSticky);
		$(window).on("resize", navigationSticky);
	})();

	//CENTER CONTENT
	(function() {
		function contentCenter(){
			var hero = $('.hero'),
				windowHeight = $(window).height(),
				heroHeight = windowHeight,
				navigation = $('.navigation'),
				navigationHeight = navigation.height(),
				parentHeight = $('.push-nav').height(),
				topMargin = (parentHeight - navigationHeight) / 2,
				heroContent = $('.hero-content'),
				contentHeight = heroContent.height(),
				topContentMargin = (heroHeight - contentHeight) / 2,
				fullScreenHeight = $('.full-screen').height(),
				fullScreenContent = $('.full-screen-content'),
				fullScreenContentHeight = fullScreenContent.height(),
				fullScreenContentMargin = ( fullScreenHeight - fullScreenContentHeight ) / 2;

			navigation.css({
				"margin-top" : topMargin+"px"
			});

			hero.css({
				height: heroHeight+"px"
			});

			heroContent.css({
				"margin-top" : topContentMargin+"px"
			});

			fullScreenContent.css({
				"margin-top" : fullScreenContentMargin+"px"
			});
		}

		$(window).on("resize", contentCenter);
	    $(document).on("ready", contentCenter);
	})();
	    
	//VIDEO
	// Exclude the iPad
	Modernizr.addTest('ipad', function () {
	return !!navigator.userAgent.match(/iPad/i);
	});
	// Exclude the iPhone
	Modernizr.addTest('iphone', function () {
	return !!navigator.userAgent.match(/iPhone/i);
	});
	// Exclude the iPod touch
	Modernizr.addTest('ipod', function () {
	return !!navigator.userAgent.match(/iPod/i);
	});
	// Exclude android phones and tablets
	Modernizr.addTest('android', function () {
	return !!navigator.userAgent.match(/android/i);
	});
	// Add a  test to Modernizr combining all platforms
	Modernizr.addTest('excludedplatforms', function () {
	return (Modernizr.ipad || Modernizr.ipod || Modernizr.iphone || Modernizr.android);
	});

	if (!Modernizr.excludedplatforms) {

	 $(function() {
	    var videobackground = new $.backgroundVideo($('#bgVideo'), {
	        "align" : "centerXY",
	        "path" : "video/",
	        "width": 854,
	        "height": 480,
	        "filename" : "video",
	        "types" : ["mp4", "ogg"]
	    });
	});
	} else {
		$('.video-background').addClass('no-video');
	}

    //LOCAL SCROLL
    $('.hero, .navigation, .call-to-action').localScroll({
		offset: - $('header').height(),
		duration:1000
	});

    //TRIGGER ANIMATIONS
	var wow = new WOW(
	  {
	    mobile: false
	  }
	);
	wow.init();

	//SLIDERS
	$(".rsDefault").royalSlider({
    	// general options go gere
    	arrowsNav: false,
	    fadeinLoadedSlide: true,
	    controlNavigationSpacing: 0,
	    controlNavigation: 'bullets',
	    transitionType: 'fade',
	    loop: true,
	    controlsInside: false,
	    sliderDrag: false,
	    navigateByClick: false,
	    addActiveClass: true,
	    autoHeight: true,
	    transitionSpeed: 250,
	    block: {
    		moveEffect: 'none'
    	}
    });

    $(".rsProgress").royalSlider({
    	slidesSpacing: 1,
    	autoHeight: true,
    	fadeinLoadedSlide: false,
    	arrowsNav: false,
    	loop: false,
    	controlNavigation: 'tabs',
    	navigateByClick: false,
    	transitionType:'move'
    });

    $('#gallery1').royalSlider({
	    addActiveClass: true,
	    arrowsNav: false,
	    controlNavigation: 'none',
	    autoScaleSlider: true,
	    autoScaleSliderWidth: 1199,
	    autoScaleSliderHeight: 475,  
	    loop: true,
	    fadeinLoadedSlide: false,
	    globalCaption: true,
	    keyboardNavEnabled: true,
	    globalCaptionInside: false,

	    visibleNearby: {
	      	enabled: true,
	      	centerArea: 0.4,
			center: true,
			breakpoint: 1199,
			breakpointCenterArea: 0.6,
	      	navigateByCenterClick: true
	    }
	  });

    //PROJECTS
    $('.thumbnail').hover(function () {
    	$(this).children('.project-info').toggleClass("visible");
	});

	//CONTACT-FORM
	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#alert").slideUp(750,function() {
			$('#alert').hide();

 		$('#submit')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			message: $('#message').val()
		},
			function(data){
				document.getElementById('alert').innerHTML = data;
				$('#alert').slideDown('slow');
				$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) {
					$('#name').val('Your Name');
					$('#email').val('E-mail Address');
					$('#message').val('If you wish to work with us or just get in touch - do it.');
				}
			}
		);

		});

		return false;

	});

	//MAP
	$('.radio').click(function (){
		$(this).toggleClass('active');

		if ($('.radio').hasClass('active')) {
			$('.map-overlay').animate({
				opacity: 0
			}, 200);
			$('#map').css({
				"z-index" : 1
			});
		} else {
			$('.map-overlay').animate({
				opacity: 1
			}, 200);
			$('#map').css({
				"z-index" : - 100
			});
		}
	});

	//SINGLE PROJECT RESIZINGS
	(function() {
		function devicesResizing(){
			var devicesContainer = $('.devices-container'),
				devicesContainerHeight = $('.devices-container').outerHeight() - 240,
				devices = $('.devices');

			devices.css({
				"top": devicesContainerHeight + "px"
			});

			devicesContainer.css({
				"margin-bottom": devices.outerHeight() - 240 + "px"
			});
		}

		$(window).on("load", devicesResizing);
		$(window).on("resize", devicesResizing);
	})();

/*********************************************************************
					SINCE v1.1
*********************************************************************/

	//TWITTER
	var twit = {
	  "id": '662301745628839936',
	  "domId": 'twit-feed',
	  "maxTweets": 1,
	  "enableLinks": true
	};
	twitterFetcher.fetch(twit);

	//RESPONSIVE VIDEO
	jQuery(".container").fitVids();

};
/* END ------------------------------------------------------- */

/* =Document Ready Trigger
-------------------------------------------------------------- */
$(document).ready(function(){

	initializeMaven();

});
/* END ------------------------------------------------------- */

/* =Window Load Trigger
-------------------------------------------------------------- */
$(window).load(function(){

	//SKROLLR 
    if (Modernizr.touch) {
        skrollr.init().destroy();
    } else {   
        skrollr.init({
        	forceHeight: false
        });  
    }

    //ISOTOPE
    var $container = $('.thumbnails').isotope({
	  	itemSelector: '.thumbnail'
	});
	// filter items on button click
	$('.filters').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});

	// change is-checked class on buttons
	$('.filters').each( function( i, buttonGroup ) {
		var $buttonGroup = $( buttonGroup );
		$buttonGroup.on( 'click', 'li', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$( this ).addClass('is-checked');
		});
	});

});
/* END ------------------------------------------------------- */