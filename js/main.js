AOS.init({
 	duration: 800,
 	easing: 'ease',
 	once: true,
 	offset: -100
});

jQuery(function($) {
	
	'use strict';
	loader();
	siteMenuClone();
	mobileToggleClick();
	onePageNavigation();
	siteIstotope();
	portfolioItemClick();
	owlCarouselPlugin();
	floatingLabel();
	scrollWindow();
	counter();
	jarallaxPlugin();
	contactForm();
	stickyFillPlugin();
	animateReveal();

});

var siteIstotope = function() {
	var $container = $('#posts').isotope({
    itemSelector : '.item',
    isFitWidth: true
  });

  $(window).resize(function(){
    $container.isotope({
      columnWidth: '.col-sm-3'
    });
  });
  
  $container.isotope({ filter: '*' });

  $('#filters').on( 'click', 'a', function(e) {
  	e.preventDefault();
    var filterValue = $(this).attr('data-filter');
    $container.isotope({ filter: filterValue });
    $('#filters a').removeClass('active');
    $(this).addClass('active');
  });

  $container.imagesLoaded()
  .progress( function() {
    $container.isotope('layout');
  })
  .done(function() {
  	$('.gsap-reveal-img').each(function() {
			var html = $(this).html();
			$(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
		});

  	var controller = new ScrollMagic.Controller();

  	var revealImg = $('.gsap-reveal-img');

  	if ( revealImg.length ) {
  		var i = 0;
			revealImg.each(function() {

				var cover = $(this).find('.cover'),
					revealContent = $(this).find('.reveal-content'),
					img = $(this).find('.reveal-content img');


				var tl2 = new TimelineMax();


				setTimeout(function() {

					tl2
						tl2.set(img, {  scale: '2.0', autoAlpha: 1, })
						.to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
							tl2.set(revealContent, { autoAlpha: 1 });
							tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
							tl2.to(img, 2, { scale: '1.0', ease:Expo.easeOut }, '-=1.5');
						} } )

				}, i * 700);

				

				var scene = new ScrollMagic.Scene({
					triggerElement: this,
					duration: "0%",
					reverse: false,
					offset: "-300%",
				})
				.setTween(tl2)
				.addTo(controller);

				i++;

			});
		}
  })

  $('.js-filter').on('click', function(e) {
  	e.preventDefault();
  	$('#filters').toggleClass('active');
  });

}

var loader = function() {
	// hero title reveal (CSS, see .hero-reveal): start as the loader fades so the red sweep is seen from its first frame
	setTimeout(function() {
		document.documentElement.classList.add('hero-play');
	}, 350);
	setTimeout(function() {
		TweenMax.to('.site-loader-wrap', 1, { marginTop: 50, autoAlpha: 0, ease: Power4.easeInOut });
  }, 10);
  $(".site-loader-wrap").delay(200).fadeOut("slow");
	$("#unslate_co--overlayer").delay(200).fadeOut("slow");	
}

var siteMenuClone = function() {

	setTimeout(function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-inner');
		});
		
		var counter = 0;
    $('.unslate_co--site-mobile-menu .has-children').each(function(){
      var $this = $(this);
      
      $this.prepend('<span class="arrow-collapse collapsed">');

      $this.find('.arrow-collapse').attr({
        'data-toggle' : 'collapse',
        'data-target' : '#collapseItem' + counter,
      });

      $this.find('> ul').attr({
        'class' : 'collapse',
        'id' : 'collapseItem' + counter,
      });

      counter++;

    });

  }, 1000);

	$('body').on('click', '.arrow-collapse', function(e) {
    var $this = $(this);
    if ( $this.closest('li').find('.collapse').hasClass('show') ) {
      $this.removeClass('active');
    } else {
      $this.addClass('active');
    }
    e.preventDefault();  
    
  });

	$('.js-burger-toggle-menu').click(function(e){
		e.preventDefault();
		if ( $('body').hasClass('offcanvas') ) {
  		$('body').removeClass('offcanvas');
  		$('.js-burger-toggle-menu').removeClass('open');
  	} else {
  		$('body').addClass('offcanvas');	
  		$('.js-burger-toggle-menu').addClass('open');
  	}
  });

}; 




// var siteIstotope = function() {


	  
	
// }

var owlCarouselPlugin = function() {

	$('.testimonial-slider').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 20,
  	margin: 10,
    smartSpeed: 2000,
    autoplay: true,
    autoplayHoverPause: true,
    dots: true,
    nav: true,
    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

    responsive:{
        400:{
          stagePadding: 20,
  				margin: 10,
        },
        600:{
          stagePadding: 100,
  				margin: 50,
        }
    }
	});
	owlSingleSlider();

	if ( $('.logo-slider').length ) {

		$('.logo-slider').owlCarousel({
			center: false,
	    loop: true,
	    stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1000,
	    autoplay: true,
	    autoplayHoverPause: true,
	    dots: false,
	    nav: false,
	    responsive:{
		    400:{
		      items: 2
		    },
		    768:{
		    	items: 3
		    },
		    1000:{
		    	items: 5
		    }
	    }
	   });
	}

};

var owlSingleSlider = function () {
	if ( $( '.single-slider' ).length ) {
		$('.single-slider').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
	    stagePadding: 0,
	    margin: 0,
	    smartSpeed: 1500,
	    autoplay: true,
	    autoplayHoverPause: true,
	    dots: true,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

	    responsive:{
	      400:{
	        stagePadding: 0,
					margin: 0,
	      },
	      600:{
	        stagePadding: 0,
					margin: 0,
	      }
	    }
		});
	}
}

var floatingLabel = function () {
	$('.form-control').on('input', function() {
	  var $field = $(this).closest('.form-group');
	  if (this.value) {
	    $field.addClass('field--not-empty');
	  } else {
	    $field.removeClass('field--not-empty');
	  }
	});
};



// scroll
var scrollWindow = function() {
	var lastScrollTop = 0;
	$(window).scroll(function(event){
		var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.unslate_co--site-nav');
				// sd = $('.js-scroll-wrap');

		if (st > 150) {
			if ( !navbar.hasClass('scrolled') ) {
				navbar.addClass('scrolled');	
			}
		} 
		if (st < 150) {
			if ( navbar.hasClass('scrolled') ) {
				navbar.removeClass('scrolled sleep');
			}
		} 
		if ( st > 350 ) {
			if ( !navbar.hasClass('awake') ) {
				navbar.addClass('awake');	
			} 

			// hide / show on scroll
			if (st > lastScrollTop){
	      // downscroll code
	      navbar.removeClass('awake');	
	      navbar.addClass('sleep');	
	   	} else {
	      // upscroll code
	      navbar.addClass('awake');	
	   	}
	   	lastScrollTop = st;
			

		}
		if ( st < 350 ) {
			if ( navbar.hasClass('awake') ) {
				navbar.removeClass('awake');
				navbar.addClass('sleep');
			}
		}

   

	});

};


var counter = function() {
	
	$('.section-counter').waypoint( function( direction ) {

		if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

			var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
			$(this.element).find('.number-counter').each(function(){
				var $this = $(this),
					num = $this.data('number');
				$this.animateNumber(
				  {
				    number: num,
				    numberStep: comma_separator_number_step
				  }, 
				  {
				  	easing: 'swing',
    				duration: 3000
				  }
				);
			});
			
		}

	} , { offset: '95%' } );

};


var mobileToggleClick = function() {
	var $body = $('body');
	var $toggle = $('.menu-aperture');
	var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	// Line-art aperture: six blade edges run from the corners of a hexagonal opening out to the ring.
	// Opening the menu spins it half a turn while the opening tightens; closing plays it back.
	var R = 21, R_OPEN = 10, R_SHUT = 4.5, SPIN = 180, DURATION = 650;
	var state = 0, anim = null;

	$toggle.each(function() {
		document.body.appendChild(this); // escape the page wrapper's stacking context so it can sit above the panel
		var g = this.querySelector('.menu-aperture__blades');
		for (var i = 0; i < 6; i++) g.appendChild(document.createElementNS('http://www.w3.org/2000/svg', 'line'));
	});

	var draw = function(p) {
		var r = R_OPEN - (R_OPEN - R_SHUT) * p, rot = SPIN * p, verts = [], k;
		for (k = 0; k < 6; k++) {
			var a = (rot + k * 60) * Math.PI / 180;
			verts.push([24 + r * Math.cos(a), 24 + r * Math.sin(a)]);
		}
		$toggle.each(function() {
			var lines = this.querySelectorAll('.menu-aperture__blades line');
			for (k = 0; k < 6; k++) {
				var v = verts[k], n = verts[(k + 1) % 6];
				var dx = n[0] - v[0], dy = n[1] - v[1], len = Math.sqrt(dx * dx + dy * dy);
				dx /= len; dy /= len;
				// extend the edge until it meets the ring
				var px = v[0] - 24, py = v[1] - 24, b = px * dx + py * dy;
				var t = -b + Math.sqrt(b * b - (px * px + py * py - R * R));
				lines[k].setAttribute('x1', v[0]);
				lines[k].setAttribute('y1', v[1]);
				lines[k].setAttribute('x2', v[0] + dx * t);
				lines[k].setAttribute('y2', v[1] + dy * t);
			}
		});
	};

	var animateTo = function(target) {
		if (anim) cancelAnimationFrame(anim);
		if (reduceMotion) { state = target; draw(state); return; }
		var from = state, start = null;
		var step = function(ts) {
			if (start === null) start = ts;
			var t = Math.min(1, (ts - start) / DURATION);
			var e = 1 - Math.pow(1 - t, 4); // ease-out quart: fast start, soft landing
			state = from + (target - from) * e;
			draw(state);
			anim = t < 1 ? requestAnimationFrame(step) : null;
		};
		anim = requestAnimationFrame(step);
	};

	var openMenu = function() {
		$('.site-mobile-inner .site-nav-wrap > li').each(function(i) { this.style.setProperty('--i', i); });
		// mark the collection page we're on
		$('.site-mobile-inner .site-nav-wrap a').each(function() {
			$(this).toggleClass('is-current', this.hostname === location.hostname && this.pathname === location.pathname && !this.hash);
		});
		$body.addClass('offcanvas');
		$toggle.attr({ 'aria-expanded': 'true', 'aria-label': 'Close menu' });
		animateTo(1);
	};

	var closeMenu = function() {
		if (!$body.hasClass('offcanvas')) return;
		$body.removeClass('offcanvas');
		$toggle.attr({ 'aria-expanded': 'false', 'aria-label': 'Open menu' });
		animateTo(0);
	};

	draw(0);
	window.siteCloseMenu = closeMenu;

	$body.on('click', '.js-menu-toggle', function(e) {
		e.preventDefault();
		if ($body.hasClass('offcanvas')) closeMenu(); else openMenu();
	});

	// click outside the panel (but not on the toggle, which handles itself)
	$(document).on('mouseup', function(e) {
		if (!$body.hasClass('offcanvas')) return;
		if ($(e.target).closest('.unslate_co--site-mobile-menu, .js-menu-toggle').length) return;
		closeMenu();
	});

	$(document).on('keydown', function(e) {
		if (e.key === 'Escape') closeMenu();
	});

	// leaving desktop -> mobile and back shouldn't leave the panel stuck open
	$(window).on('resize', function() {
		if (window.innerWidth >= 992) closeMenu();
	});
};



// navigation: every link to a section on this page scrolls smoothly, wherever the link lives
var onePageNavigation = function() {
	var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

	var sectionFor = function(hash) {
		return hash && hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
	};

	var scrollToSection = function(el, done) {
		var top = $(el).offset().top;
		if (reduceMotion) { window.scrollTo(0, top); if (done) done(); return; }
		$('html, body').stop().animate({ scrollTop: top }, 1000, 'easeInOutExpo').promise().done(function() {
			if (done) done();
		});
	};

	// "/", "/index.html" and "index.html" are all the same page
	var samePage = function(path) {
		return path.replace(/^\//, '').replace(/(^|\/)index\.html$/, '$1');
	};

	$('body').on('click', 'a[href*="#"]', function(e) {
		if (this.hostname !== location.hostname || $(this).is('[data-toggle], [data-fancybox], [target="_blank"]')) return;
		if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return; // let "open in new tab" through
		var hash = this.hash;

		// Section on another page (e.g. index.html#about-section from a collection page):
		// fade to the loader's black first, then switch pages.
		if (samePage(this.pathname) !== samePage(location.pathname)) {
			if (!hash || hash.length < 2 || reduceMotion) return;
			e.preventDefault();
			if (window.siteCloseMenu) window.siteCloseMenu();
			// Hand the section over via sessionStorage and load the page without the #hash, otherwise
			// the browser jumps to the section on its own before the glide can start.
			var href = this.href.split('#')[0];
			try { sessionStorage.setItem('gb-scroll-to', hash.slice(1)); } catch (err) { href = this.href; }
			var $fade = $('<div class="page-fade" aria-hidden="true"></div>').appendTo('body');
			$fade[0].offsetWidth; // commit the starting opacity so the transition runs
			$fade.addClass('is-active');
			setTimeout(function() { window.location.href = href; }, 380);
			return;
		}

		var el = sectionFor(hash);
		if (!el) return;
		e.preventDefault();
		if (window.siteCloseMenu) window.siteCloseMenu();
		scrollToSection(el, function() {
			if (history.replaceState) history.replaceState(null, '', hash);
		});
	});

	// Coming back with the browser's back button can restore the faded-out page from cache
	window.addEventListener('pageshow', function(e) {
		if (e.persisted) $('.page-fade').remove();
	});

	// Arriving from another page: the page opens at the top under the black loader, and the glide
	// starts while the loader is still fading out, so the fade-in and the scroll blend into one move.
	var pending = null;
	try { pending = sessionStorage.getItem('gb-scroll-to'); sessionStorage.removeItem('gb-scroll-to'); } catch (err) {}
	// a #hash in the address (e.g. a shared link) still works, though the browser may already have jumped
	var arrivalHash = pending ? '#' + pending : location.hash;
	var arrival = sectionFor(arrivalHash);
	if (arrival && history.replaceState) {
		if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
		history.replaceState(null, '', location.pathname + location.search);
		window.scrollTo(0, 0);

		if (reduceMotion) {
			window.scrollTo(0, $(arrival).offset().top);
			history.replaceState(null, '', location.pathname + location.search + arrivalHash);
			return;
		}

		setTimeout(function() {
			var startY = window.pageYOffset, startTime = null, cancelled = false;
			var distance = Math.abs($(arrival).offset().top - startY);
			var duration = Math.min(1800, Math.max(1100, 900 + distance * 0.2));
			var ease = function(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }; // ease-in-out cubic
			var cancel = function() { cancelled = true; };
			window.addEventListener('wheel', cancel, { passive: true, once: true });
			window.addEventListener('touchstart', cancel, { passive: true, once: true });

			var step = function(ts) {
				if (cancelled) return;
				if (startTime === null) startTime = ts;
				var t = Math.min(1, (ts - startTime) / duration);
				// re-read the target every frame: images above it may still be loading and shifting it
				var target = $(arrival).offset().top;
				window.scrollTo(0, startY + (target - startY) * ease(t));
				if (t < 1) requestAnimationFrame(step);
				else history.replaceState(null, '', location.pathname + location.search + arrivalHash);
			};
			requestAnimationFrame(step);
		}, 250);
	}
};


// load ajax page
var portfolioItemClick = function() {
	$('.ajax-load-page').on('click', function(e) {
		
		var id = $(this).data('id'),
			href = $(this).attr('href');

		if ( $('#portfolio-single-holder > div').length ) {
			$('#portfolio-single-holder > div').remove();
		} 

		TweenMax.to('.loader-portfolio-wrap', 1, { top: '-50px', autoAlpha: 1, display: 'block', ease: Power4.easeOut });

		$('html, body').animate({
    	scrollTop: $('#portfolio-section').offset().top - 50
		}, 700, 'easeInOutExpo', function() {
		});
		
		setTimeout(function(){
			loadPortfolioSinglePage(id, href);
		}, 100);

		e.preventDefault();

	});

	// Close
	$('body').on('click', '.js-close-portfolio', function() {

		setTimeout(function(){
			$('html, body').animate({
	    	scrollTop: $('#portfolio-section').offset().top - 50
			}, 700, 'easeInOutExpo');
		}, 200);

		TweenMax.set('.portfolio-wrapper', { visibility: 'visible', height: 'auto' });
		TweenMax.to('.portfolio-single-inner', 1, { marginTop: '50px', opacity: 0,  display: 'none', onComplete() {
			TweenMax.to('.portfolio-wrapper', 1, { marginTop: '0px', autoAlpha: 1, position: 'relative' });

		} });
		
	});
};

$(document).ajaxStop(function(){
	setTimeout(function(){
		TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
	}, 400);
});

var loadPortfolioSinglePage = function(id, href) {
	$.ajax({
		url: href,
		type: 'GET',
		success: function(html) {

			TweenMax.to('.portfolio-wrapper', 1, { marginTop: '50px', autoAlpha: 0, visibility: 'hidden', onComplete() {
				TweenMax.set('.portfolio-wrapper', { height: 0 });
			} })

			var pSingleHolder = $('#portfolio-single-holder');
	    	
			var getHTMLContent = $(html).find('.portfolio-single-wrap').html();

			pSingleHolder.append(
				'<div id="portfolio-single-'+id+
				'" class="portfolio-single-inner"><span class="unslate_co--close-portfolio js-close-portfolio d-flex align-items-center"><span class="close-portfolio-label">Back to Portfolio</span><span class="icon-close2 wrap-icon-close"></span></span>' + getHTMLContent + '</div>'
			);

			setTimeout(function() {
				owlSingleSlider();
			}, 10);

			setTimeout(function() {
				TweenMax.set('.portfolio-single-inner', { marginTop: '100px', autoAlpha: 0, display: 'none' });
				TweenMax.to('.portfolio-single-inner', .5, { marginTop: '0px', autoAlpha: 1, display: 'block', onComplete() {

					TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
				} });
			}, 700 );
		}
	});

	return false;

};

var jarallaxPlugin = function() {
	$('.jarallax').jarallax({
    speed: 0.2
	});
	jarallax(document.querySelectorAll('.jarallax-video'), {
    speed: 0.2,
    videoSrc: 'https://www.youtube.com/watch?v=mwtbEGNABWU',
    videoStartTime: 8,
    videoEndTime: 70,
	});
};

var contactForm = function() {
	if ($('#contactForm').length > 0 ) {
		$( "#contactForm" ).validate( {
			rules: {
				name: "required",
				email: {
					required: true,
					email: true
				},
				message: {
					required: true,
					minlength: 5
				}
			},
			messages: {
				name: "Please enter your name",
				email: "Please enter a valid email address",
				message: "Please enter a message"
			},
			errorElement: 'span',
			errorLabelContainer: '.form-error',
			/* submit via ajax */
			submitHandler: function(form) {		
				var $submit = $('.submitting'),
					waitText = 'Submitting...';

				$.ajax({   	
			      type: "POST",
			      url: "php/send-email.php",
			      data: $(form).serialize(),

			      beforeSend: function() { 
			      	$submit.css('display', 'block').text(waitText);
			      },
			      success: function(msg) {
	               if (msg == 'OK') {
	               	$('#form-message-warning').hide();
			            setTimeout(function(){
	               		$('#contactForm').fadeOut();
	               	}, 1000);
			            setTimeout(function(){
			               $('#form-message-success').fadeIn();

						   // Reset Form values.
						   $('#contactForm')[0].reset();  
	               	}, 1400);
		               
		            } else {
		               $('#form-message-warning').html(msg);
			            $('#form-message-warning').fadeIn();
			            $submit.css('display', 'none');
		            }
			      },
			      error: function() {
			      	$('#form-message-warning').html("Something went wrong. Please try again.");
			         $('#form-message-warning').fadeIn();
			         $submit.css('display', 'none');
			      }
		      });    		
	  		}
			
		} );
	}
};

var stickyFillPlugin = function() {
	var elements = document.querySelectorAll('.unslate_co--sticky');
	Stickyfill.add(elements);
};

var animateReveal = function() {


	var controller = new ScrollMagic.Controller();
	
	var greveal = $('.gsap-reveal');

	// gsap reveal
	$('.gsap-reveal').each(function() {
		$(this).append('<span class="cover"></span>');
	});
	if ( greveal.length ) {
		var revealNum = 0;
		greveal.each(function() {
			var cover = $(this).find('.cover');

			var tl = new TimelineMax();

			setTimeout(function() {
				tl
					.fromTo(cover, 2, { skewX: 0 }, { xPercent: 101, transformOrigin: "0% 100%", ease:Expo.easeInOut })
			}, revealNum * 0);
			
			var scene = new ScrollMagic.Scene({
				triggerElement: this,
				duration: "0%",
				reverse: false,
				offset: "-300%",
			})
			.setTween(tl)
			.addTo(controller);

			revealNum++;

		});
	}

}
// Block right-click saving and dragging on images and gallery links (incl. ones added later by the lightbox)
;(function() {
	var isImage = function(el) {
		if (!el || el.nodeType !== 1) el = el && el.parentElement;
		return !!el && (el.tagName === 'IMG' || !!el.closest('a[data-fancybox], .fancybox-container'));
	};
	document.addEventListener('contextmenu', function(e) {
		if (isImage(e.target)) e.preventDefault();
	});
	document.addEventListener('dragstart', function(e) {
		if (isImage(e.target)) e.preventDefault();
	});
})();

// Aperture back-to-top button: the iris closes as the page scrolls, flips to an arrow on hover
;(function() {
	var SVG_NS = 'http://www.w3.org/2000/svg';
	var BLADES = 6;
	var R_OPEN = 40, R_CLOSED = 3;   // radius of the opening at the top / bottom of the page
	var MAX_TWIST = 40;              // degrees the blades rotate while closing

	var btn = document.createElement('button');
	btn.type = 'button';
	btn.className = 'aperture-top';
	btn.setAttribute('aria-label', 'Back to top');
	btn.innerHTML =
		'<span class="aperture-top__inner">' +
			'<span class="aperture-top__face aperture-top__face--front">' +
				'<svg viewBox="-50 -50 100 100" aria-hidden="true">' +
					'<defs>' +
						'<clipPath id="aperture-top-clip"><circle r="44"/></clipPath>' +
						'<radialGradient id="aperture-top-glass" cx="35%" cy="30%" r="75%">' +
							'<stop offset="0" stop-color="#5a6b7d"/>' +
							'<stop offset="1" stop-color="#0b0f14"/>' +
						'</radialGradient>' +
					'</defs>' +
					'<circle r="44" fill="url(#aperture-top-glass)"/>' +
					'<g class="aperture-top__blades" clip-path="url(#aperture-top-clip)"></g>' +
					'<circle r="46" fill="none" stroke="#D63447" stroke-width="4"/>' +
				'</svg>' +
			'</span>' +
			'<span class="aperture-top__face aperture-top__face--back">' +
				'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">' +
					'<path d="M12 19V5M5 12l7-7 7 7"/>' +
				'</svg>' +
			'</span>' +
		'</span>';
	document.body.appendChild(btn);

	var bladeGroup = btn.querySelector('.aperture-top__blades');
	var polys = [];
	for (var i = 0; i < BLADES; i++) {
		var p = document.createElementNS(SVG_NS, 'polygon');
		bladeGroup.appendChild(p);
		polys.push(p);
	}

	// Each blade is a wedge anchored at one corner of the hexagonal opening,
	// bounded by that corner's two edge lines, so together they cover everything outside the opening.
	var drawIris = function(r, twistDeg) {
		var L = 200, verts = [], k;
		for (k = 0; k < BLADES; k++) {
			var a = (twistDeg + k * 360 / BLADES) * Math.PI / 180;
			verts.push([r * Math.cos(a), r * Math.sin(a)]);
		}
		var dir = function(from, to) {
			var dx = to[0] - from[0], dy = to[1] - from[1], len = Math.sqrt(dx * dx + dy * dy) || 1;
			return [dx / len, dy / len];
		};
		for (k = 0; k < BLADES; k++) {
			var v = verts[k];
			var dNext = dir(v, verts[(k + 1) % BLADES]);
			var dPrev = dir(verts[(k + BLADES - 1) % BLADES], v);
			polys[k].setAttribute('points', [
				v[0] + ',' + v[1],
				(v[0] + dNext[0] * L) + ',' + (v[1] + dNext[1] * L),
				(v[0] + dPrev[0] * L) + ',' + (v[1] + dPrev[1] * L)
			].join(' '));
		}
	};

	// The button appears once the Services Portfolio section (or, on other pages, the content
	// below the hero) starts rising into view; the iris is fully open at that point.
	var REVEAL_AT = 0.60            // fraction of the viewport height the section's top must rise above
	var revealY = function() {
		var section = document.getElementById('portfolio-section');
		var hero = document.querySelector('.cover-v1');
		var edge = section ? section.getBoundingClientRect().top
			: hero ? hero.getBoundingClientRect().bottom
			: window.innerHeight;
		return Math.max(0, edge + getScrollTop() - window.innerHeight * REVEAL_AT);
	};

	var getScrollTop = function() {
		return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
	};

	var ticking = false;
	var update = function() {
		ticking = false;
		var max = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight) - window.innerHeight;
		var y = getScrollTop(), start = Math.min(revealY(), max);
		btn.classList.toggle('is-visible', max > 0 && y > start);
		var progress = max > start ? Math.min(1, Math.max(0, (y - start) / (max - start))) : 0;
		drawIris(R_OPEN - (R_OPEN - R_CLOSED) * progress, MAX_TWIST * progress);
	};
	var requestUpdate = function() {
		if (!ticking) {
			ticking = true;
			window.requestAnimationFrame(update);
		}
	};

	window.addEventListener('scroll', requestUpdate, { passive: true });
	document.body.addEventListener('scroll', requestUpdate, { passive: true });
	window.addEventListener('resize', requestUpdate);
	window.addEventListener('load', requestUpdate);
	update();

	btn.addEventListener('click', function() {
		var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		var opts = { top: 0, behavior: reduce ? 'auto' : 'smooth' };
		window.scrollTo(opts);
		if (document.body.scrollTop > 0) document.body.scrollTo(opts);
	});
})();

// The footer is revealed from behind the page on desktop: leave exactly its height free at the bottom
;(function() {
	var inner = document.querySelector('.unslate_co--site-inner');
	var footer = document.querySelector('.unslate_co--footer');
	if (!inner || !footer) return;
	var sync = function() {
		inner.style.marginBottom = window.innerWidth >= 992 ? footer.offsetHeight + 'px' : '';
	};
	sync();
	window.addEventListener('load', sync);
	window.addEventListener('resize', sync);
})();

// Cookie banner: fades in on the first visit only (until a choice is saved); "Cookie Settings" in the footer reopens it.
// The consent defaults and the Analytics loader live in each page's <head>.
;(function() {
	var KEY = 'gb-cookie-consent';
	var read = function() { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
	var save = function(v) { try { localStorage.setItem(KEY, v); } catch (e) {} };

	var banner = document.createElement('div');
	banner.className = 'cookie-banner';
	banner.setAttribute('role', 'dialog');
	banner.setAttribute('aria-live', 'polite');
	banner.setAttribute('aria-labelledby', 'cookie-banner-title');
	banner.innerHTML =
		'<p class="cookie-banner__title" id="cookie-banner-title">Cookies</p>' +
		'<p class="cookie-banner__text">We use Google Analytics to see how visitors use this site, and cookies to personalise ads. ' +
		'Neither runs unless you allow it.</p>' +
		'<p class="cookie-banner__status"></p>' +
		'<div class="cookie-banner__actions">' +
			'<button type="button" class="cookie-banner__btn cookie-banner__btn--accept">Accept</button>' +
			'<button type="button" class="cookie-banner__btn cookie-banner__btn--decline">Decline</button>' +
		'</div>';
	document.body.appendChild(banner);
	var status = banner.querySelector('.cookie-banner__status');

	var show = function() {
		var choice = read();
		status.textContent = choice === 'granted' ? 'Currently: allowed.' : choice === 'denied' ? 'Currently: declined.' : '';
		banner.offsetWidth; // commit the hidden state so the fade runs
		banner.classList.add('is-visible');
	};
	var hide = function() { banner.classList.remove('is-visible'); };

	var clearAnalyticsCookies = function() {
		var host = location.hostname, domains = ['', host, '.' + host, '.' + host.replace(/^www\./, '')];
		document.cookie.split(';').forEach(function(c) {
			var name = c.split('=')[0].trim();
			if (name === '_ga' || name.indexOf('_ga_') === 0 || name === '_gid' || name === '_gat') {
				domains.forEach(function(d) {
					document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
				});
			}
		});
	};

	banner.querySelector('.cookie-banner__btn--accept').addEventListener('click', function() {
		save('granted');
		if (window.gtag) gtag('consent', 'update', { analytics_storage: 'granted', ad_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
		if (window.gbLoadAnalytics) window.gbLoadAnalytics();
		hide();
	});

	banner.querySelector('.cookie-banner__btn--decline').addEventListener('click', function() {
		save('denied');
		if (window.gtag) gtag('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied' });
		clearAnalyticsCookies();
		hide();
	});

	$(document).on('click', '.js-cookie-settings', function(e) {
		e.preventDefault();
		show();
	});

	// first visit: wait for the loader to clear before fading in
	if (read() === null) setTimeout(show, 1400);
})();
