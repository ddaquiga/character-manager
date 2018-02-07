<!DOCTYPE html>
<html>
<body onload=loadDescription('<?=$data['race']?>')>


<h1>Description</h1>

<form action="equipment" method="POST">
	<input type="hidden" name="id" value=<?=$data['id']?>>
	<h3>Choose an Alignment</h3>
	<label>Lawful vs. Chaotic</label><br>
	<input type="radio" name="lvc" value="lawful">Lawful<br>
	<input type="radio" name="lvc" value="neutral">Neutral<br>
	<input type="radio" name="lvc" value="chaotic">Chaotic<br><br>
	<label>Good vs. Evil</label><br>
	<input type="radio" name="gve" value="good">Good<br>
	<input type="radio" name="gve" value="neutral">Neutral<br>
	<input type="radio" name="gve" value="evil">Evil<br><br>
	<hr>
	<h3>Choose a Diety</h3>
	<input type="radio" name="diety" value="none" checked>None<br>
	<input type="radio" name="diety" value="boccob">Boccob - god of magic<br>
	<input type="radio" name="diety" value="corellon">Corellon Larethian - god of elves<br>
	<input type="radio" name="diety" value="ehlonna">Ehlonna - goddess of the woodlands<br>
	<input type="radio" name="diety" value="erythnul">Erythnul - god of slaughter<br>
	<input type="radio" name="diety" value="fharlanghn">Farlanghn - god of roads<br>
	<input type="radio" name="diety" value="garl">Garl Glittergold - god of gnomes<br>
	<input type="radio" name="diety" value="gruumsh">Gruumsh - god of the orcs<br>
	<input type="radio" name="diety" value="heironeous">Heironeous - god of valor<br>
	<input type="radio" name="diety" value="hextor">Hextor - god of tyranny<br>
	<input type="radio" name="diety" value="kord">Kord - god of strength<br>
	<input type="radio" name="diety" value="moradin">Moradin - god of dwarves<br>
	<input type="radio" name="diety" value="nerull">Nerull - god of death<br>
	<input type="radio" name="diety" value="obad">Obad-Hai - god of nature<br>
	<input type="radio" name="diety" value="olidammara">Olidammara - god of rogues<br>
	<input type="radio" name="diety" value="pelor">Pelor - god of the sun<br>
	<input type="radio" name="diety" value="cuthbert">St. Cuthbert - god of retribution<br>
	<input type="radio" name="diety" value="vecna">Vecna - god of secrets<br>
	<input type="radio" name="diety" value="wee">Wee Jas - goddess of death and magic<br>
	<input type="radio" name="diety" value="yondalla">Yondalla - goddess of halflings<br>
	<hr>
	<h3>Vitals</h3>
	<label>Gender</label>
	<fieldset>
		<input type="radio" id="male" name="gender" value="male" checked>Male<br>
		<input type="radio" id="female" name="gender" value="female">Female<br>
	</fieldset>
	
	<label>Height</label>
	<input type="text" id="height" name="height"><br>
	<label>Weight</label>
	<input type="text" id="weight" name="weight">
	<button type="button" onclick=randSize('<?=$data['race']?>')>Random Height and Weight</button><br>
	<label>Age</label>
	<input type="text" id="age" name="age"><button type="button" onclick=randomAge('<?=$data['race']?>','<?=$data['class']?>')>Random Age</button><br>
	<label>Skin</label>
	<input type="text" id="skin" name="skin"><br>
	<label>Hair</label>
	<input type="text" id="hair" name="hair"><br>
	<label>Eyes</label>
	<input type="text" id="eyes" name="eyes"><br>
	<hr>

	<input type="submit" value="Submit">
</form>
<hr>
<h3>Progress</h3>
<?php echo json_encode($data);?>
</body>
</html>