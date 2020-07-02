<?php
session_start();
$name = $_GET['fName'];
$email = $_GET['email'];
$url = $_GET['userWebsite'];
$source = $_GET['source'];
$comment = $_GET['comment'];


if ($email == null && $name == null){

	header('location:index.html');
} else if($email == "tetakhiling2015@mail.ru" || $email == "riyaadkins.sc.1045423808@supersendme.org" || $email == "noreply@papawp6211.xyz" || $email == "annamaster1992211@gmail.com" || $email == "aliciashort.gm.1326626298@gcheck.xyz" || $email == "noreply@get-more-leads-now.com" || $email == "no-reply@hilkom-digital.de" || $email == "helvinrymernewyork.com@domstat.su" || $email == "maiilerinvestorsx@gmx.com" || $email == "helvinrymer.com@domstat.su" || $email == "helvinrymer.com@domstat.su"){ 
header('location:index.html');
} else {
$connection = mysqli_connect('localhost','helvin','dora0411','mrrymer');
// $connection = mysqli_connect('localhost','root','root','MrRymer');
$query = "insert into contact(name, email, website, source, comment) values('$name', '$email', '$url', '$source', '$comment');";

mysqli_query($connection,$query);



mysqli_close($connection);


$to = "Helvin@HelvinRymer.com"; // this is your Email address
$from = $email; // this is the sender's Email address
$subject = "Form submission";
$subject2 = "Thank you for your email!";
$message = "$name sent the following details:
Email: $email
Website: $url
Source: $source
Comments: $comment";

$message2 = "Thank you for your email. I'll be in touch as soon as possible."
."\n"."
Helvin Rymer
(929)523-6682
HelvinRymer.com
Helvin@helvinrymer.com";

$headers = "From:" . $from;
$headers2 = "From:" . $to;

mail($to,$subject,$message,$headers);
mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender

header('location:index.html');
}

?>
