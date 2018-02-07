<!DOCTYPE html>
<html>
<body onload=loadFeats('<?=$data['class']?>','<?=$data['race']?>',[<?=$data['str']?>,<?=$data['dex']?>,<?=$data['con']?>,<?=$data['int']?>,<?=$data['wis']?>,<?=$data['cha']?>],<?=$data['level']?><?=$data['hiddenRide']?>)>
<h1>Feat Selection</h1>
<h3>Bonus Feats</h3>
<ul id="bonusFeats"></ul>
<hr>
<h3>Choose a Feat</h3>
<form action="description" method="POST">
	<input type="hidden" name="id" value=<?=$data['id']?>>
	<input type="hidden" name="chosenFeats" id="chosenFeats">
	<div id="featList"></div>

	<input type="submit" value="Submit">
</form>
<hr>
<h3>Progress</h3>
<?php echo json_encode($data);?>;
</body>
</html>