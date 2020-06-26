<?php
session_start();


?>

<!doctype html>
<html lang="en">

<?php
	require_once('partials/head.php');
	?>

<body>
	<?php
	require_once('partials/nav.php');
	?>

	<!--Hero-->
	<div class="container-fluid hero" id="hero">
		<div class="container herocontent">
			<div class="row" id="herorow1">
				<div class="col-sm my-5">
					<div class="container" id="herodets">
						<h4 id="firsth3">
							<span><mark>hi, I'm Helvin Rymer</mark></span>
						</h4>
						<br>
						<h4 id="secondh3">
							<span><mark>Web Developer</mark></span>
						</h4>
						<br>
						<h4 id="thirdh3">
							<span><mark>HTML5 &amp; CSS3</mark></span>
						</h4>
						<br>
						<h4 id="fourthh3">
							<span><mark>JavaScript &amp; AngularJS</mark></span>
						</h4>
						<br>
						<h4 id="fourthh3">
							<span><mark>Php, MySQL &amp; JQuery</mark></span>
						</h4>
						<br>
					</div>

					<!--Mobile Only-->
					<div class="container" id="herodetsmobile">
						<h5 id="firsth3">
							<span><mark>hi, I'm Helvin Rymer</mark></span>
						</h5>
						<br>
						<h5 id="secondh3">
							<span><mark>Web Developer</mark></span>
						</h5>
						<br>
						<h5 id="thirdh3">
							<span><mark>HTML5 &amp; CSS3</mark></span>
						</h5>
						<br>
						<h5 id="fourthh3">
							<span><mark>JavaScript &amp; AngularJS</mark></span>
						</h5>
						<br>
						<h5 id="fourthh3">
							<span><mark>Php, MySQL &amp; JQuery</mark></span>
						</h5>
						<br>
					</div>
				</div>

				<div class="col-sm">
					<img alt="Responsive image" class="img-fluid heroimg" id="heroimg" src="css/Octocats/octocat11-1.png">
				</div>
			</div>

			<div class="heroitem">
				<h3><mark>Featured</mark></h3>
				<ul>
					<a href="#section1">
						<li>Esports Webapp</li>
					</a>
					<a href="#section2">
						<li>Maniac Ink</li>
					</a>
					<a href="#section3">
						<li>BX Lifestyle</li>
					</a>
					<a href="#section4">
						<li>N. Blackburn</li>
					</a>
					<a href="#section5">
						<li>Perfect Tax</li>
					</a>
					<li>
						<a href="https://github.com/Helvin159" target="_blank">
							<i class="fab fa-github p-2"></i>
						</a>
						<a href="https://www.instagram.com/mrrymernyc/" target="_blank">
							<i class="fab fa-instagram p-2"></i>
						</a>
						<a href="https://www.linkedin.com/in/helvinrymer/" target="_blank">
							<i class="fab fa-linkedin p-2"></i>
						</a>
						<a href="https://www.facebook.com/Helvin159" target="_blank">
							<i class="fab fa-facebook p-2"></i>
						</a>
						<a href="assets/pdf/Resume.pdf" target="_blank">
							<i class="fas fa-file-pdf p-2"></i>
						</a>
					</li>

				</ul>
			</div>
		</div>

		<h5 id="madein">
			<mark style="background-color: red;border-radius: 10px;">
				Made In The Bronx, NY
			</mark>
		</h5>

		<i class="fas fa-chevron-down downarrow"></i>
	</div>

	<?php
	require_once('partials/section1.php');
	?>
	<?php
	require_once('partials/section2.php');
	?>
	<?php
	require_once('partials/section3.php');
	?>
	<?php
	require_once('partials/section4.php');
	?>
	<?php
	require_once('partials/section5.php');
	?>





	<!--Back to Top-->
	<div class="backToTop" id="backtotop">
		<a href="#hero">
			<i class="far fa-arrow-alt-circle-up">
			</i>
			<h3 class="p-3"><mark>Back to Top</mark></h3>
		</a>
	</div>

	<!--Music Player-->
	<div class="container">
		<button class="btn btn-lg btn-outline-danger" id="openbtn">Music Controls</button>
		<button class="btn btn-lg btn-outline-danger" id="closebtn">Close</button>
		<br>
		<iframe id="bgmusic" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/934412314&color=%23ff0000&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

	</div>


	<?php
	require_once('partials/modal.php');
	?>

	<?php
	require_once('partials/footer.php');
	?>



</body>

</html>
