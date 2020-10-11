	<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered" role="document">
	<div class="modal-content">
		<div class="modal-header">
			<h5 class="modal-title" id="exampleModalCenterTitle"><mark style="color:#fff; background-color:red; border-radius: 5px;">Contact Me!</mark></h5>
			<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div class="modal-body">
			<!--Form-->
			<form class="text-center" id="fm" method="GET" action="contact.php">
				<label class="text-left">
					<input class="my-1" type="text" name="fName" placeholder="Full Name" id="fName" required>
				</label>
				<br>
				<label class="text-left">
					<input class="my-1" type="email" name="email" placeholder="Email" id="email" required>
				</label>
				<br>
				<label class="text-left">
					<input class="my-1" type="text" name="userWebsite" placeholder="Website (If any...)" id="userWebsite">
				</label>
				<br>
				<label class="text-left">
					How did you hear about me?
					<br>
					<select name="source">
						<option>- -</option>
						<option>Referral</option>
						<option>Social Media</option>
						<option>Youtube</option>
						<option>Newsletter</option>
					<option>Freelancer.com</option>
						<option>UpWork.com</option>
						<option>Internet Search</option>
					</select>
				</label>
				<br>
				<label class="text-left">
					Questions or Requests?
					<br>
					<textarea name="comment" placeholder="Questions..."></textarea>
				</label>
				<br>
				<label>
					<input class="btn btn-sm btn-dark" type="submit" id="formSubmitBtn" style="font-family: 'Permanent Marker', cursive;">
				</label>
			</form>
		</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		</div>
	</div>
	</div>
</div>