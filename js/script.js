	$('.herocontent').css("opacity", "0");
	$('body').css("backgroundColor", "#000404");
	$('.heroitem').hide();
	$('.section').css("opacity", 0);
	$('.navbar').css("opacity",0);

	$(document).ready(function() {
		$('.herocontent').css("transition", "3s ease-in");
		$('.herocontent').css("opacity", "1");
		$('.navbar').css("transition", "4s ease-in");
		$('.navbar').css("opacity", 1);
		$('#firsth3').css("animation", "slidein 4s 1");
		$('#secondh3').css("animation", "slidein 3s 1");
		$('#thirdh3').css("animation", "slidein 2s 1");
		$('#fourthh3').css("animation", "slidein 1s 1");

		$('#herodets').mouseover(function() {
			$('.heroimg').css("transform", "rotateY(180deg) translateX(370px) translateY(-100px)");
			$('.heroimg').css("transition", "1.3s ease-in-out");
			$('.heroitem').show();
			$('.heroitem').css("transition", "3s ease-in")
			$('.heroitem').css("opacity", "1");
		});
		$('#madein').mouseover(function() {
			$('.heroimg').css("transform", "rotateY(180deg) translateX(370px) translateY(-100px)");
			$('.heroimg').css("transition", "1.3s ease-in-out");
			$('.heroitem').show();
			$('.heroitem').css("transition", "3s ease-in")
			$('.heroitem').css("opacity", "1");
		});

		$('.heroitem').mouseover(function() {
			$('.heroimg').css("transform", "translateX(-300px) translateY(-130px)");
		});

		$('.hero').mouseover(function(){
			$('.herocontent').css("opacity",1);
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
			$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.97),rgba(0,0,0,0.95)),url(css/img/themstill1.png)");
			$(this).css("background-size", "cover");
			$(this).css("background-attachment", "fixed");
			$('#title1').css("animation", "slidein 2s 1");
			$('#titlenum1').css("animation", "slidein2 2s 1");
		});

		$('#section2').mouseover(function(){
			$(this).css("transition", ".5s ease-in-out");
			$(this).css("opacity", 1);
			$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.97),rgba(0,0,0,0.95)),url(css/img/melii.png)");
			$(this).css("background-size", "cover");
			$(this).css("background-attachment", "fixed");
			$('#title2').css("animation", "slidein 2s 1");
			$('#titlenum2').css("animation", "slidein2 2s 1");
		});

		$('#section3').mouseover(function(){
			$(this).css("transition", ".5s ease-in-out");
			$(this).css("opacity", 1);
			$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.97),rgba(0,0,0,0.95)),url(css/img/temp2.png)");
			$(this).css("background-size", "cover");
			$(this).css("background-attachment", "fixed");
			$('#title3').css("animation", "slidein 2s 1");
			$('#titlenum3').css("animation", "slidein2 2s 1");
		});

		$('#section4').mouseover(function(){
			$(this).css("transition", ".5s ease-in-out");
			$(this).css("opacity", 1);
			$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.97),rgba(0,0,0,0.95)),url(css/img/UFRPAGE.png)");
			$(this).css("background-size", "cover");
			$(this).css("background-attachment", "fixed");
			$('#title4').css("animation", "slidein 2s 1");
			$('#titlenum4').css("animation", "slidein2 2s 1");
		});

		$('#section5').mouseover(function(){
			$(this).css("transition", ".5s ease-in-out");
			$(this).css("opacity", 1);
			$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.97),rgba(0,0,0,0.95)),url(css/img/ptax.png)");
			$(this).css("background-size", "cover");
			$(this).css("background-attachment", "fixed");
			$('#title5').css("animation", "slidein 2s 1");
			$('#titlenum5').css("animation", "slidein2 2s 1");
		});

		$('#section6').mouseover(function(){
			$(this).css("transition", ".5s ease-in-out");
			$(this).css("opacity", 1);
			$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.97),rgba(0,0,0,0.95)),url(css/img/temp10)");
			$(this).css("background-size", "cover");
			$(this).css("background-attachment", "fixed");
			$('#title6').css("animation", "slidein 2s 1");
			$('#titlenum6').css("animation", "slidein2 2s 1");
		});

		$('#section7').mouseover(function(){
			$(this).css("transition", ".5s ease-in-out");
			$(this).css("opacity", 1);
			$(this).css("background","linear-gradient(0deg, rgba(0,0,0,0.97),rgba(0,0,0,0.95)),url(css/img/temp11)");
			$(this).css("background-size", "cover");
			$(this).css("background-attachment", "fixed");
			$('#title7').css("animation", "slidein 2s 1");
			$('#titlenum7').css("animation", "slidein2 2s 1");
		});

		$('.section').mouseout(function(){
			$(this).css("opacity", 0);
			$(this).css("transition", ".6s ease-out");
		});

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

/*
$('.showcase').mouseover(function(){
$('#showcaseparent').css("transition", "1s ease-in-out");
$('#showcaseparent').css("opacity", 1);
$('#showcaseparent').css("background","linear-gradient(0deg, rgba(0,0,0,0.97),rgba(0,0,0,0.95)),url(css/img/themstill1.png)");
$('#showcaseparent').css("background-size", "cover");
$('#showcaseparent').css("background-attachment", "fixed");
});
*/

		
	});