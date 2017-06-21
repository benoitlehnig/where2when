
<?php

	$email = $_POST['email'];
	$groupName = $_POST['groupName'];

	mail("$email","Why's group subscription","YES ! You are now in group $groupName");

	echo "Mail sent to $email: You are now part of $groupName !";
?>
