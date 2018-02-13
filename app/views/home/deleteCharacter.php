<!DOCTYPE html>
<html>
<body>

<h1>Character Deleted</h1>
<h3><?=$data['characterName']?> successfully deleted</h3>	
<form action="/mvc/public/home/index" method="POST">
	<input type='hidden' name ="username" value="<?=$data['username']?>">
	<input type='hidden' name ="loggedIn" value=1>
	<input type='submit' value="Back to Index">
</form>