<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/rollAbilities.js"></script>
</head>
<body onload=setRacialMod()>


<h1>Assigning Abilities</h1>

<form action="skills" method="POST">
	<h3>Roll Abilities (6 x (4d6 - lowest))</h3>
	<button type="button" id="rollButton" onclick=roll()>Roll</button>
	<p id="rolls"></p>
	<hr>

	<h3>Class Statistics</h3>
	<p><?=$data['classAbil']?></p>
	<hr>
	
	<input type="hidden" name="id" value="<?=$data['id']?>">

	<h3>Enter Manually (Without Racial Adjustments)</h3>
	<label id="str">Strength</label>
	<input type="text" name="str" required><span id="strMod"> <?=$data['strMod']?></span><br>

	<label id="dex">Dexterity</label>
	<input type="text" name="dex" required><span id="dexMod"> <?=$data['dexMod']?></span><br>

	<label id="con">Constitution</label>
	<input type="text" name="con" required><span id="conMod"> <?=$data['conMod']?></span><br>

	<label id="int">Intelligence</label>
	<input type="text" name="int" required><span id="intMod"> <?=$data['intMod']?></span><br>

	<label id="wis">Wisdom</label>
	<input type="text" name="wis" required><span id="wisMod"> <?=$data['wisMod']?></span><br>

	<label id="cha">Charisma</label>
	<input type="text" name="cha" required><span id="chaMod"> <?=$data['chaMod']?></span><br>

	<input type="submit" value="Submit">

</form>
<hr>
</body>
</html>


