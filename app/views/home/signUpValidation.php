<!DOCTYPE html>
<html>
<body>

<h1>Character Manager - Sign Up Validation</h1>
Signed In as <?=$data['username']?>
<form action="index" method="POST">
	<input type="hidden" name="username" value="<?=$data['username']?>">
	<input type="hidden" name="loggedIn" value="<?=$data['loggedIn']?>">
	<input type="submit" value="Continue to Index">
</form>
</body>
</html>