<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/description.js"></script>
</head>
<body onload=loadDescription('<?=$data['race']?>','<?=$data['class']?>')>


<h1>Description</h1>
<form action="rollAbilities" method="POST">
	<input type="hidden" name="id" value=<?=$data['id']?>>
	<h3>Choose an Alignment</h3>
	<p id="alignmentRule"></p>
	<label>Lawful vs. Chaotic</label><br>
	<input type="radio" id="lawful" name="lvc" value="lawful">Lawful<br>
	<input type="radio" id="lvcNeutral" name="lvc" value="neutral" checked>Neutral<br>
	<input type="radio" id="chaotic" name="lvc" value="chaotic">Chaotic<br><br>
	<label>Good vs. Evil</label><br>
	<input type="radio" id="good" name="gve" value="good">Good<br>
	<input type="radio" id="gveNeutral" name="gve" value="neutral" checked>Neutral<br>
	<input type="radio" id="evil" name="gve" value="evil">Evil<br><br>
	<button type="button" id="alignmentSubmit" onclick=submitAlignment('<?=$data['class']?>')>Apply</button>
	<hr>
	<h3>Choose a Diety</h3>
	<table>
		<thead>
			<tr>
				<th></th>
				<th>Diety</th>
				<th>Alignment</th>
				<th id="domainHead"></th>
			</tr>
		</thead>
		<tbody id="dietyTable"></tbody>
	</table>
	<button type="button" id="dietySubmit" onclick=submitDiety('<?=$data['class']?>')>Apply</button>
	<hr>
	<div id="domainDiv" style="display: none;">
		<h3>Choose Two Domains</h3>
		<div id="domainInputs"></div>
		<input type="hidden" id="domainPost" name="domains">
		<hr>
	</div>
	<div id="schoolSpecDiv" style="display: none;">
		<h3>Choose a School of Magic to Specialize in:</h3>
		<label>None</label>
		<input id="specNone" type="radio" name="schoolSpecialization" value="" checked onclick=loadBannedSchools('')><br>
		<label>Abjuration</label>
		<input id="specAbjuration" type="radio" name="schoolSpecialization" value="Abjuration" onclick=loadBannedSchools('Abjuration')><br>
		<label>Conjuration</label>
		<input id="specConjuration" type="radio" name="schoolSpecialization" value="Conjuration" onclick=loadBannedSchools('Conjuration')><br>
		<label>Divination</label>
		<input id="specDivination" type="radio" name="schoolSpecialization" value="Divination" onclick=loadBannedSchools('Divination')><br>
		<label>Enchantment</label>
		<input id="specEnchantment" type="radio" name="schoolSpecialization" value="Enchantment" onclick=loadBannedSchools('Enchantment')><br>
		<label>Evocation</label>
		<input id="specEvocation" type="radio" name="schoolSpecialization" value="Evocation" onclick=loadBannedSchools('Evocation')><br>
		<label>Illusion</label>
		<input id="specIllusion" type="radio" name="schoolSpecialization" value="Illusion" onclick=loadBannedSchools('Illusion')><br>
		<label>Necromancy</label>
		<input id="specNecromancy" type="radio" name="schoolSpecialization" value="Necromancy" onclick=loadBannedSchools('Necromancy')><br>
		<label>Transmutation</label>
		<input id="specTransmutation" type="radio" name="schoolSpecialization" value="Transmutation" onclick=loadBannedSchools('Transmutation')><br>

		<div id="bannedSchoolDiv" style="display: none;">
			<h3>Choose Two Schools of Magic to ban:</h3>
			<div id="bannedSchoolInputs"></div>
		</div>
		<input type="hidden" id="bannedSchools" name="bannedSchools">
		<hr>
	</div>

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
</body>
</html>