$('.herocontent').css("opacity", "0");
$('body').css("backgroundColor", "#000404");
$('.heroitem').hide();
$('.sectionOne').css("opacity", 1);
$('.navbar').css("opacity",0);

$(document).ready(function() {
	$('.herocontent').css("transition", "3s ease-in");

	$('.herocontent').css("opacity", "1");

	$('.navbar').css("transition", "4s ease-in");

	$('.navbar').css("opacity", 1);

	$('#viewsection6').click(function(){
	$('.section6').show();
});

	$('#viewsection7').click(function(){
	$('.section7').show();
});

	$('#viewsec6').click(function(){
	$('.section6').show();
});

	$('#viewsec7').click(function(){
	$('.section7').show();
});

	$('#firsth3').css("animation", "slidein 4s 1");

	$('#secondh3').css("animation", "slidein 3s 1");

	$('#thirdh3').css("animation", "slidein 2s 1");

	$('#fourthh3').css("animation", "slidein 1s 1");

	$('#herorow1').mouseover(function() {
		$('.heroimg').css("transform", "rotateY(180deg) translateX(370px) translateY(-100px)");
		$('.heroimg').css("transition", "1.3s ease-in-out");
		$('.heroitem').show();
		$('.heroitem').css("transition", "3s ease-in")
		$('.heroitem').css("opacity", "1");
	});

	$('.heroitem').mouseover(function() {
		$('.heroimg').css("transform", "translateX(-300px) translateY(-130px)");
	});

	$('.heroitem').mouseout(function() {
		$('.heroimg').css("transform", "rotateY(180deg) translateX(370px) translateY(-100px)");
	});

	$('#madein').mouseover(function(){
		$('.downarrow').css("transition", "2s ease-in-out")
		$('.downarrow').css("transform","rotateY(1600deg)")
	});

	$('.downarrow').mouseleave(function(){
		$(this).css("transition", "2s ease-in-out")
		$(this).css("transform","rotateY(-1600deg)")
	});

	$('#section1').mouseover(function(){
		$(this).css("transition", ".5s ease-in-out");
		$(this).css("opacity", 1);
		$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.92),rgba(0,0,0,0.90)),url(css/img/themstill1.png)");
		$(this).css("background-size", "cover");
		$(this).css("background-attachment", "fixed");
		$('#title1').css("animation", "slidein 2s 1");
		$('#titlenum1').css("animation", "slidein2 2s 1");
	});

	$('#section2').mouseover(function(){
		$(this).css("transition", ".5s ease-in-out");
		$(this).css("opacity", 1);
		$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.92),rgba(0,0,0,0.90)),url(css/img/melii.png)");
		$(this).css("background-size", "cover");
		$(this).css("background-attachment", "fixed");
		$('#title2').css("animation", "slidein 2s 1");
		$('#titlenum2').css("animation", "slidein2 2s 1");
	});

	$('#section3').mouseover(function(){
		$(this).css("transition", ".5s ease-in-out");
		$(this).css("opacity", 1);
		$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.92),rgba(0,0,0,0.90)),url(css/img/temp2.png)");
		$(this).css("background-size", "cover");
		$(this).css("background-attachment", "fixed");
		$('#title3').css("animation", "slidein 2s 1");
		$('#titlenum3').css("animation", "slidein2 2s 1");
	});

	$('#section4').mouseover(function(){
		$(this).css("transition", ".5s ease-in-out");
		$(this).css("opacity", 1);
		$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.92),rgba(0,0,0,0.90)),url(css/img/UFRPAGE.png)");
		$(this).css("background-size", "cover");
		$(this).css("background-attachment", "fixed");
		$('#title4').css("animation", "slidein 2s 1");
		$('#titlenum4').css("animation", "slidein2 2s 1");
	});

	$('#section5').mouseover(function(){
		$(this).css("transition", ".5s ease-in-out");
		$(this).css("opacity", 1);
		$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.92),rgba(0,0,0,0.90)),url(css/img/ptax.png)");
		$(this).css("background-size", "cover");
		$(this).css("background-attachment", "fixed");
		$('#title5').css("animation", "slidein 2s 1");
		$('#titlenum5').css("animation", "slidein2 2s 1");
	});

	$('#section6').mouseover(function(){
		$(this).css("transition", ".5s ease-in-out");
		$(this).css("opacity", 1);
		$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.92),rgba(0,0,0,0.90)),url(css/img/temp10)");
		$(this).css("background-size", "cover");
		$(this).css("background-attachment", "fixed");
		$('#title6').css("animation", "slidein 2s 1");
		$('#titlenum6').css("animation", "slidein2 2s 1");
	});

	$('#section7').mouseover(function(){
		$(this).css("transition", ".5s ease-in-out");
		$(this).css("opacity", 1);
		$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.92),rgba(0,0,0,0.90)),url(css/img/temp11)");
		$(this).css("background-size", "cover");
		$(this).css("background-attachment", "fixed");
		$('#title7').css("animation", "slidein 2s 1");
		$('#titlenum7').css("animation", "slidein2 2s 1");
	});

//	$('.section').mouseout(function(){
//		$(this).css("opacity", 0);
//		$(this).css("transition", ".6s ease-out");
//	});

	$('#openbtn').click(function(){
		$('#bgmusic').show();
		$('#bgmusic').css("border-radius", "10px");
		$('#closebtn').show();
		$('#openbtn').hide();
	});

	$('#closebtn').click(function(){
		$('#bgmusic').hide();
		$('#closebtn').hide();
		$('#openbtn').show();
	});

});

$(window).on("load", function () {
	$(window).scroll(function () {
		var windowBottom = $(this).scrollTop() + $(this).innerHeight();
		$(".fade").each(function () {
/* Check the location of each desired element */
			var objectBottom = $(this).offset().top + $(this).outerHeight();

/* If the element is completely within bounds of the window, fade it in */
			if (objectBottom < windowBottom) { //object comes into view (scrolling down)
				if ($(this).css("opacity") == 0) {
					$(this).fadeTo(500, 1);
				}
			} else { //object goes out of view (scrolling up)
				if ($(this).css("opacity") == 1) {
					$(this).fadeTo(500, 0);
				}
			}
		});
	}).scroll(); //invoke scroll-handler on page-load
});