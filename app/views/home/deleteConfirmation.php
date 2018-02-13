<!DOCTYPE html>
<html>
<body>

<h1>Deleting Character</h1>
<h3>Confirm Deletion of <?=$data['characterName']?></h3>
<form action="/mvc/public/home/index" method="POST">
	<input type='hidden' name ="username" value="<?=$data['username']?>">
	<input type='hidden' name ="loggedIn" value=1>
	<input type='submit' value="Cancel">
</form>
<form action="deleteCharacter" method="POST">
	<input type='hidden' name ="username" value="<?=$data['username']?>">
	<input type='hidden' name='id' value="<?=$data['id']?>">
	<input type='hidden' name='characterName' value="<?=$data['characterName']?>">
	<input type='submit' value='Delete'>
</form>
</body>
</html>
