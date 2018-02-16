<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/description.js"></script>
</head>
<body onload=loadDescription('<?=$data['race']?>','<?=$data['class']?>')>


<h1>Description</h1>
<form action="equipment" method="POST">
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