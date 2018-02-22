<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/rollAbilities.js"></script>
</head>
<body onload=loadRollAbilities('<?=$data['race']?>','<?=$data['class']?>')>


<h1>Assigning Abilities</h1>

<form action="feats" method="POST">
	<h3>Roll Abilities</h3>
	<p><b>Standard Method</b> (Roll 6 x 4d6 and ignore the lowest dice)</p>
	<button type="button" id="rollButton" onclick=roll()>Roll</button>
	<p id="rolls"></p>
	<br>
	<p><b>Elite Array</b><br>15,14,13,12,10,8</p>
	<br>
	<p><b>Standard Point Buy</b>:<p>
	<button type="button" id="pointBuy" onclick=togglePointBuy()>Activate</button>
	<hr>

	<h3>Class Ability Recommendation</h3>
	<p id="classAbil"></p>
	<hr>
	
	<input type="hidden" name="id" value="<?=$data['id']?>">

	<div id="standardHeader"><h3>Enter Manually</h3></div>
	<div id="pointBuyHeader" style="display: none;"><h3>Spend Points</h3>(Without Racial Adjustments)<br><b>Points Left</b>: <span id="pointsLeft">25</span></div>
	<br>
	<table>
		<thead>
			<tr>
				<th>Ability</th>
				<th>Score</th>
				<th>Racial Adjustment</th>
				<th id="pointCost" style="display: none;">Point Cost</th>
				<th id="pointButtons" style="display: none;"></th>
			</tr>
		</thead>
		<tbody id="abilities"></tbody>
	</table>

	<input id="submit" type="submit" value="Submit">

</form>
<hr>
</body>
</html>


