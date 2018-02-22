<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/equipment.js"></script>
</head>
<body onload=loadEquipment('<?=$data['str']?>','<?=$data['class']?>','<?=$data['chosenFeats']?>') >

<h1>Equipment</h1>
<p><b>Starting Gold:</b> <span id="startingGold"></span> gp</p>
<p><b>Current Gold:</b> <span id="currentGold"></span> gp</p>
<p><b>Light Load Limit:</b> <span id="lightLoad"></span> lbs.</p>
<p><b>Current Weight:</b> <span id="currentWeight"></span> lbs.</p>
<hr>
<ul><b>Current Equipment:</b>
	<li>Starting Outfit: <span id="startingOutfit"></span></li>
	<li>Weapons: <span id="currentWeapons"></span></li>
	<li>Armor: <span id="currentArmor"></span></li>
</ul>

<form action="skills" method="POST">
	<input type="hidden" name="id" value=<?=$data['id']?>>
	<fieldset>
		<h3>Choose a Free Outfit</h3>
		<ul>
			<li><button id="artisan" type="button" onclick="startingOutfit('artisan')">Artisan's Outfit</button></li>
			<li><button id="entertainer" type="button" onclick="startingOutfit('entertainer')">Entertainer's Outfit</button></li>
			<li><button id="explorer" type="button" onclick="startingOutfit('explorer')">Explorer's Outfit</button></li>
			<li><button id="monk" type="button" onclick="startingOutfit('monk')">Monk's Outfit</button></li>
			<li><button id="peasant" type="button" onclick="startingOutfit('peasant')">Peasant's Outfit</button></li>
			<li><button id="scholar" type="button" onclick="startingOutfit('scholar')">Scholar's Outfit</button></li>
			<li><button id="traveler" type="button" onclick="startingOutfit('traveler')">Traveler's Outfit</button></li>
		</ul>
	</fieldset>
	<fieldset>
		<h3>Weapons</h3>
		<table id="weapons">
			<tr>
				<th>Proficient</th>
				<th>Weapon Name</th>
				<th>Weapon Class</th>
				<th>Weapon Type</th>
				<th>Cost</th>
				<th>Damage(S)</th>
				<th>Damage(M)</th>
				<th>Critical</th>
				<th>Range Increment</th>
				<th>Weight</th>
				<th>Damage Type</th>
			</tr>
		</table>
	</fieldset>
	<fieldset>
		<h3>Armor and Shields</h3>
		<table id="armor">
			<tr>
				<th>Proficient</th>
				<th>Name</th>
				<th>Type</th>
				<th>Cost</th>
				<th>Armor/Shield Bonus</th>
				<th>Maximum Dex Bonus</th>
				<th>Armor Check Penalty</th>
				<th>Arcane Spell Failure Chance</th>
				<th>Speed (30')</th>
				<th>Speed (20')</th>
				<th>Weight</th>
			</tr>
		</table>
	</fieldset>
	<input type="hidden" id="outfitInput" name="outfit">
	<input type="hidden" id="weaponInput" name="weapons">
	<input type="hidden" id="armorInput" name="armor">
	<input type="submit" value="Continue to Confirmation Page">
</form>
<hr>
</body>
</html>