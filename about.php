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
	<div class="container-fluid abouthero" id="hero">
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
							<span><mark>HTML5 &amp; WordPress</mark></span>
						</h4>
						<br>
						<h4 id="fourthh3">
							<span><mark>JavaScript &amp; CSS3</mark></span>
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
				<h3><mark>About Me</mark></h3>
				<ul>
					<a href="#aboutme">
						<li>About Me</li>
					</a>
					<a href="#myskills">
						<li>My Skills</li>
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

	<!--Section 1-->
	<div class="container-fluid section1 aboutme">
		<div class="container-fluid p-5 aboutsection" id="aboutme">
			<div class="container">
				<h2 class="p-3 text-center display-4 my-3"><mark>A Little About Me</mark></h2>

				<div class="row m-auto p-4">

					<div class="col-lg-6 p-5">
						<img class="img-fluid" src="assets/img/Headshot.jpg">
					</div>

					<div class="col-lg-6 p-3">
						<h3 class="my-2"><i class="fas fa-info"></i></h3>
						<p class="p-2">
							Helvin Rymer is a rookie freelance web designer, developing sites as of 2019. Studying Computer Information System, and following up with studies in Web Development with a focus on Bash, HTML5 and CSS. Prior to Web Development, Mr. Rymer has had experience working in real estate as a salesperson and managing his own social media presence successfully. He has earned leadership awards in his previous position and has proven to be someone who shows great pride and professionalism in his work.
						</p>
					</div>

				</div>
			</div>
		</div>

	</div>

	<!--Section 2-->
	<div class="container-fluid section2 p-5" id="myskills">

		<div class="container showcase">
			<h1 class="display-5" id="tsheading">
				<mark>My Skills</mark>
			</h1>
		</div>
		<div class="container p-4 skills">
			<div class="container">
				<h5>PHP</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
			<div class="container">
				<h5>MySQL</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
			<div class="container">
				<h5>JavaScript</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
			<div class="container">
				<h5>Node</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
			<div class="container">
				<h5>ReactJS</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 10%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
			<div class="container">
				<h5>WordPress</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
			<div class="container">
				<h5>JQuery</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
			<div class="container">
				<h5>Bootstrap</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>

			<div class="container">
				<h5>CSS</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
			<div class="container">
				<h5>HTML5</h5>
				<div class="progress my-4">
					<div class="progress-bar bg-danger progress-bar-animated progress-bar-striped" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
				</div>
			</div>
		</div>
	</div>



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
	require_once('partials/footer.php');
	?>

</body>

</html>
