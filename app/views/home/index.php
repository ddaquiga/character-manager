<!DOCTYPE html>
<html>
<head>
	<script type="text/javascript" src="/mvc/app/controllers/home.js"></script>
</head>
<body onload=loadLogin('<?=$data['username']?>','<?=$data['loggedIn']?>')>

<h1>Dungeon and Dragons Character Manager (3.5 edition)</h1>
<div id="notLogged">
<form action="#" method="POST">
	<label>Username</label>
	<input type="text" name="username"><br>
	<label>Password</label>
	<input type="password" name="password"><br>
	<input type="submit">
</form>
<?=$data['loginMessage']?>
<hr>
<a href="home/signUp"><button>Sign Up</button></a>
</div>
<div id="logged" style="display: none;">
<h3>Welcome <?=$data['username']?></h3>
<form action="/mvc/public/createChar/startChar" method="POST">
	<input type="hidden" name="username" value="<?=$data['username']?>">
	<input type="submit" value="Create New Character">
</form>
<hr>
<h3>Character List</h3>
<?=$data['characterButtons']?>

</div>

</body>
</html>