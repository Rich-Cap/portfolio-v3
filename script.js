$(document).ready(function () {
	// $("button").click(function () {
	// 	$("#cards-container").slideUp(2000);
	// });

	// Change class and css on navbar
	// Fade Text
	$(window).scroll(function () {
		var height = $(document).scrollTop();

		if (height < 1) {
			$(".navbar").css("background-color", "#fff");
			$(".navbar").removeClass("navbar-dark");
			$(".navbar").addClass("navbar-light");
		} else {
			$(".navbar").css("background-color", "#004250");
			$(".navbar").removeClass("navbar-light");
			$(".navbar").addClass("navbar-dark");
		}

		var scrollTop = $(this).scrollTop();
		
		// console.log($('.display-5').height());

		$(".jumbo-intro").css({
			opacity: function() {
				var documentHeight = $(document).height();
				return 1 - (scrollTop * 5 / documentHeight);
			}
		});
	});

	// Slide to cards on click
	$("#arrowdown").click(function () {
		$('html, body').animate({
			scrollTop: $("#cards-container-header").offset().top
		}, 2000);
	});

	// Reload mail Icon on hover
	$("button").on("mouseenter", function(){
		var d = new Date();
		$("#contact-logo-mail").attr("src", "./Content/send-yellow-hover.gif?" + d.getTime());
	});
	$("button").on("mouseleave", function(){
		$("#contact-logo-mail").attr("src", "./Content/send-yellow.gif");
	});

});
