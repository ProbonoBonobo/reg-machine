/* -- Main Navigation JS -- */
$(function() {
	var pushNav = $('.push-nav'),
		navLinks = $('.scroll-to'),
		body = $('body'),
		container = $('#wrap'),
		push = $('.push'),
		siteOverlay = $('.navigation-overlay'),
		pushNavClass = "push-right push-open",
		pushNavActiveClass = "push-active",
		containerClass = "wrap-push",
		pushClass = "push-push",
		menuButton = $('.menu-button'),
		menuSpeed = 500,
		menuWidth = pushNav.width() + "px";

	function togglePushNav(){
		body.toggleClass(pushNavActiveClass);
		pushNav.toggleClass(pushNavClass);
		container.toggleClass(containerClass);
		push.toggleClass(pushClass);
	}

	function openPushNavFallback(){
		body.addClass(pushNavActiveClass);
		pushNav.animate({right: "0px"}, menuSpeed);
	}

	function closePushyFallback(){
		body.removeClass(pushNavActiveClass);
		pushNav.animate({right: "-" + menuWidth}, menuSpeed);
	}

	//checks if 3d transforms are supported removing the modernizr dependency
	cssTransforms3d = (function csstransforms3d(){
		var el = document.createElement('p'),
		supported = false,
		transforms = {
		    'webkitTransform':'-webkit-transform',
		    'OTransform':'-o-transform',
		    'msTransform':'-ms-transform',
		    'MozTransform':'-moz-transform',
		    'transform':'transform'
		};

		// Add it to the body to get the computed style
		document.body.insertBefore(el, null);

		for(var t in transforms){
		    if( el.style[t] !== undefined ){
		        el.style[t] = 'translate3d(1px,1px,1px)';
		        supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
		    }
		}

		document.body.removeChild(el);

		return (supported !== undefined && supported.length > 0 && supported !== "none");
	})();

	if(cssTransforms3d){
		//links click
		navLinks.click(function() {
			togglePushNav();
		});
		//toggle menu
		menuButton.click(function() {
			togglePushNav();
		});
		//close menu when clicking site overlay
		siteOverlay.click(function(){ 
			togglePushNav();
		});
	}else{
		//jQuery fallback
		pushNav.css({right: "-" + "50%"}); //hide menu by default
		container.css({"overflow-x": "hidden"}); //fixes IE scrollbar issue

		//keep track of menu state (open/close)
		var state = true;

		//toggle menu
		menuButton.click(function() {
			if (state) {
				openPushNavFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		});

		//close menu when clicking site overlay
		siteOverlay.click(function(){ 
			if (state) {
				openPushNavFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		});

		//close menu when clicking site overlay
		navLinks.click(function(){ 
			if (state) {
				openPushNavFallback();
				state = false;
			} else {
				closePushyFallback();
				state = true;
			}
		});
	}
});