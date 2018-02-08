<!DOCTYPE html>
<html>
<head>
</head>
<body>

<h1>Creating a New Level 1 Character</h1>
<h1 id="test"></h1>

<form action="rollAbilities" method="POST">
	<input type="hidden" name="id" value="<?=$data['id']?>">
	<label>Choose a Class</label><br>
	<input type="radio" name="class" value="Barbarian">Barbarian<br>
	<input type="radio" name="class" value="Bard">Bard<br>
	<input type="radio" name="class" value="Cleric">Cleric<br>
	<input type="radio" name="class" value="Druid">Druid<br>
	<input type="radio" name="class" value="Fighter">Fighter<br>
	<input type="radio" name="class" value="Monk">Monk<br>
	<input type="radio" name="class" value="Paladin">Paladin<br>
	<input type="radio" name="class" value="Ranger">Ranger<br>
	<input type="radio" name="class" value="Rogue">Rogue<br>
	<input type="radio" name="class" value="Sorceror">Sorceror<br>
	<input type="radio" name="class" value="Wizard">Wizard<br>
	<hr>
	<label>Choose a Race</label><br>
	<input type="radio" name="race" value="Human">Human<br>
	<input type="radio" name="race" value="Dwarf">Dwarf<br>
	<input type="radio" name="race" value="Elf">Elf<br>
	<input type="radio" name="race" value="Gnome">Gnome<br>
	<input type="radio" name="race" value="Half-elf">Half-Elf<br>
	<input type="radio" name="race" value="Half-orc">Half-Orc<br>
	<input type="radio" name="race" value="Halfling">Halfling<br>
	<hr>
	<label>Create a Name</label>
	<input type="text" name="name"><br>
	<hr>
	<input type="submit" value="Submit">
</form>
</body>
</html>