<!DOCTYPE html>
<html>
<body>

<h1>Character Manager - Sign Up</h1>
<form action="signUpValidation" method="POST">
	<label>Username</label>
	<input type="text" name="username" required=""><br>
	<label>Password</label>
	<input type="password" name="password" required><br>
	<label>Retype Password</label>
	<input type="password" name="retypePassword" required=""><br>
	<input type="submit">
</form>
<?=$data['message']?>

</body>
</html>