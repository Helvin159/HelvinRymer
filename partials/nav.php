<!--Navigation-->
<nav class="navbar navbar-dark position-fixed" style="background-color: rgba(0,0,0,0);" id="primarynav">
	<h5 class="p-3"><mark style="background-color: red;border-radius: 10px; color: #F2F5EA;">Mr. Rymer</mark></h5>
	<form class="form-inline">
		<a href="index.php"><button class=" <?php if($_SERVER['REQUEST_URI'] == '/index.php'){echo 'btn btn-outline-danger mx-1 active';} else { echo 'btn btn-sm btn-outline-secondary mx-1';} ?>" type="button" id="homebtn">Home</button></a>
		<a href="about.php"><button class="<?php if($_SERVER['REQUEST_URI'] == '/about.php'){echo 'btn btn-outline-danger mx-1 active';} else{ echo 'btn btn-sm btn-outline-secondary mx-1';}?>" type="button" id="aboutbtn">About</button></a>
		<button class="btn btn-sm btn-outline-danger mx-1" type="button" id="aboutbtn" data-toggle="modal" data-target="#exampleModalCenter">Contact</button>
	</form>
</nav>

<!--Mobile Nav-->
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgba(0,0,0,0.95);" id="mobilenav">
	<a class="navbar-brand" href="#"><mark>Mr.Rymer</mark></a>
	<button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	</button>
	<div class="collapse navbar-collapse mt-5 float-middle" id="navbarNavAltMarkup">
		<div class="navbar-nav text-center">
			<a class="nav-item nav-link active" href="index.php">Home <span class="sr-only">(current)</span></a>
			<a class="nav-item nav-link" href="about.php">About</a>
			<button class="btn btn-sm btn-outline-danger mx-1" type="button" id="aboutbtn" data-toggle="modal" data-target="#exampleModalCenter">Contact</button>

		</div>
	</div>
</nav>
