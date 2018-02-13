<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/startChar.js"></script>
</head>
<head>
</head>
<body onload="loadStartChar()">

<h1>Creating a New Level 1 Character</h1>
<h1 id="test"></h1>

<form action="rollAbilities" method="POST">
	<input type="hidden" name="id" value="<?=$data['id']?>">
	<input type="hidden" name="level" value=1>
	<label>Choose a Class</label><br>
	<input type="radio" name="class" value="Barbarian" checked onclick=loadClassDescription(0)>Barbarian<br>
	<input type="radio" name="class" value="Bard" onclick=loadClassDescription(1)>Bard<br>
	<input type="radio" name="class" value="Cleric" onclick=loadClassDescription(2)>Cleric<br>
	<input type="radio" name="class" value="Druid" onclick=loadClassDescription(3)>Druid<br>
	<input type="radio" name="class" value="Fighter" onclick=loadClassDescription(4)>Fighter<br>
	<input type="radio" name="class" value="Monk" onclick=loadClassDescription(5)>Monk<br>
	<input type="radio" name="class" value="Paladin" onclick=loadClassDescription(6)>Paladin<br>
	<input type="radio" name="class" value="Ranger" onclick=loadClassDescription(7)>Ranger<br>
	<input type="radio" name="class" value="Rogue" onclick=loadClassDescription(8)>Rogue<br>
	<input type="radio" name="class" value="Sorcerer" onclick=loadClassDescription(9)>Sorcerer<br>
	<input type="radio" name="class" value="Wizard" onclick=loadClassDescription(10)>Wizard<br>
	<span id="classDescription"></span>
	<hr>
	<label>Choose a Race</label><br>
	<input type="radio" name="race" value="Human" checked onclick=loadRaceDescription(0)>Human<br>
	<input type="radio" name="race" value="Dwarf" onclick=loadRaceDescription(1)>Dwarf<br>
	<input type="radio" name="race" value="Elf" onclick=loadRaceDescription(2)>Elf<br>
	<input type="radio" name="race" value="Gnome" onclick=loadRaceDescription(3)>Gnome<br>
	<input type="radio" name="race" value="Half-elf" onclick=loadRaceDescription(4)>Half-Elf<br>
	<input type="radio" name="race" value="Half-orc" onclick=loadRaceDescription(5)>Half-Orc<br>
	<input type="radio" name="race" value="Halfling" onclick=loadRaceDescription(6)>Halfling<br>
	<span id="raceDescription"></span>
	<hr>
	<label>Create a Name</label>
	<input type="text" name="name" required><br>
	<hr>
	<input type="submit" value="Submit">
</form>
</body>
</html>