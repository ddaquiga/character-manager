<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/skills.js"></script>
</head>
<body onload=loadSkills([<?=$data['str']?>,<?=$data['dex']?>,<?=$data['con']?>,<?=$data['int']?>,<?=$data['wis']?>,<?=$data['cha']?>],'<?=$data['class']?>','<?=$data['race']?>',<?=$data['level']?>)>
<h1>Skills Selection</h1>
<h1 id="test"></h1>


<p>Total Skill Points: <span id="skillCount"><?=$data['totalPoints']?></span></p>
<p>Skill Points Left: <span id="pointsLeft"><?=$data['totalPoints']?></span></p>
<p>Class Skill Max Ranks: <span id="maxRanks"></span></p>
<p>Cross-Class Skill Max Ranks: <span id="maxRanksCC"></span></p>
<p>1 skill point buys either 1 class skill rank or 0.5 cross-class skill ranks.</p>
<hr>
<form action="feats" method="POST">
	<input type="hidden" name="id" value=<?=$data['id']?>>
	<input id="hiddenRide" type="hidden" name="rideRank">
	<table id="skillEntries">
		<tr>
			<th>Class Skill</th>
			<th>Ranks</th>
			<th>Skill Name</th>
			<th>Skill Modifier</th>
			<th>Key Ability</th>
			<th>Ability Modifier</th>
			<th>Misc Modifier</th>
		</tr>
	</table>
	<p>1 Armor check penalty applies to checks<br>2 Double the normal armor check penalty applies to checks</p>

	<button id="unfinished" type="button" onclick=unspentPoints()>Continue to Feat Selection</button>
	<input id="finished" type="submit" value="Continue to Feat Selection" style="display:none">
</form>
<hr>
</html>