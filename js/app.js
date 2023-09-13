$(document).ready(function(){
	
	$(window).on('load',function(){
		$('.preloader').addClass('.complete');

	});


	$(window).on('scroll',function(){
		var scroll = $(window).scrollTop();
		if(scroll>=50){
			$(".sticky").addClass("stickyadd");

		} else{
			$(".sticky").removeClass("stickyadd");

		}	
	})


	var type = new Typed(".element",{
		strings: ["ROR ","ROR Technology"],
		smartBackspace:true,
		typeSpeed:100,
		backSpeed:100,
		loop:true,
		loopCount:Infinity,
		startDelay:1000
	});



	// progress bar

	var waypoint = new Waypoint({
		element: document.getElementById('exp-id'),
		handler: function() {
			var p = document.querySelectorAll('.progress-bar');
			p[0].setAttribute("style","width:36%;transition:1s all");
			p[1].setAttribute("style","width:56%;transition:1.6s all");
			p[2].setAttribute("style","width:75%;transition:2s all");
		},
		offset: '90%'
	});



var	filterizd = $('.filter-container').filterizr({
	animationDuration :.5,

});

	// Owl Coursel

	$(".owl-carousel").owlCarousel({
		loop:true,
		autoplay:true,
		autoplayTimeout:4000,
		items:1


	});



});	