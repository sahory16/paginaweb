<?
$mensaje="";
$mensaje.="Contact from:". "\n\n";
$mensaje.="Name: ".$_POST['fname']."\n";
$mensaje.="E-mail: ".$_POST['femail']."\n";
$mensaje.="Phone: ".$_POST['fphone']."\n";
$mensaje.="Comments: ".$_POST['fcomment']."\n";

$email_destiny="mio@mail.com";
$subject="Message from us";

if (mail($email_destiny,$subject,$mensaje,"From: Contact<".$_POST['femail'].">")) {
	echo '<p align="center"><b>Thanks for your comments</b></p>';
} else {
	echo '<p align="center">Error '.$_POST['fname'].'</p>';
}
?>