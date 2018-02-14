<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/feats.js"></script>
</head>
<body onload=loadFeats('<?=$data['class']?>','<?=$data['race']?>',[<?=$data['str']?>,<?=$data['dex']?>,<?=$data['con']?>,<?=$data['int']?>,<?=$data['wis']?>,<?=$data['cha']?>],<?=$data['level']?><?=$data['hiddenRide']?>)>
<h1>Feat Selection</h1>
<h3>Bonus Feats</h3>
<ul id="bonusFeats"></ul>
<hr>

	<div id="monkBonus" style="display: none;">
		<h3>Choose a Bonus Monk Feat</h3>
		<input type="radio" id="impGrappleMonkBonus" name="monkBonusInput" value="impGrapple" checked>Improved Grapple<br>
		<input type="radio" id="stunningFistMonkBonus" name="monkBonusInput" value="stunningFist">Stunning Fist<br>
		<button type="button" id="monkFeatSubmit" onclick=submitMonkBonus()>Apply</button>
		<hr>
	</div>
	<div id="fighterBonus" style="display: none;">
		<h3>Choose a Bonus Fighter Feat</h3>
		<div id="fighterFeats"></div>
		<button type="button" id="fighterFeatSubmit" onclick=submitFighterBonus('<?=$data['class']?>','<?=$data['race']?>',[<?=$data['str']?>,<?=$data['dex']?>,<?=$data['con']?>,<?=$data['int']?>,<?=$data['wis']?>,<?=$data['cha']?>],<?=$data['level']?><?=$data['hiddenRide']?>)>Apply</button>
		<hr>
	</div>
	<div id="humanBonus" style="display: none;">
		human<button type="button" id="humanFeatSubmit" onclick=submitHumanBonus('<?=$data['class']?>','<?=$data['race']?>',[<?=$data['str']?>,<?=$data['dex']?>,<?=$data['con']?>,<?=$data['int']?>,<?=$data['wis']?>,<?=$data['cha']?>],<?=$data['level']?><?=$data['hiddenRide']?>)>Submit</button>
		<hr>
	</div>
	<div id="normalFeats">
		<form action="description" method="POST">
			<input type="hidden" name="id" value=<?=$data['id']?>>
			<input type="hidden" name="chosenFeats" id="chosenFeats">
			<input type="hidden" name="prereqsMet" id="prereqsMet">
			<h3>Choose a Feat</h3>
				<div id="featList"></div>

				<input type="submit" value="Submit">
		</form>
		<hr>
	</div>
</body>
</html>