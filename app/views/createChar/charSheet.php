<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/charSheet.js"></script>
</head>
<body onload=loadCharSheet('<?=$data['class']?>','<?=$data['race']?>',<?=$data['level']?>,<?=$data['strength']?>,<?=$data['dexterity']?>,<?=$data['constitution']?>,<?=$data['intelligence']?>,<?=$data['wisdom']?>,<?=$data['charisma']?>,'<?=$data['skillModArray']?>','<?=$data['ranksArray']?>','<?=$data['keyAbilModArray']?>','<?=$data['bonusArray']?>','<?=$data['chosenFeats']?>')>
<h1>Character Sheet</h1>
<hr>
<ul>
	<h3>Description</h3>
	<li><b>Character Name:</b> <?=$data['name']?></li>
	<li><b>Character Level:</b> <?=$data['level']?></li>
	<li><b>Class:</b> <?=$data['class']?></li>
	<li><b>Race:</b> <?=$data['race']?></li>
	<li><b>Alignment:</b> <?=$data['lvc']?>-<?=$data['gve']?></li>
	<li><b>Diety:</b> <?=$data['diety']?></li>
	<li><b>Size:</b> <span id="size"></span></li>
	<li><b>Age:</b> <?=$data['age']?></li>
	<li><b>Gender:</b> <?=$data['gender']?></li>
	<li><b>Height:</b> <?=$data['height']?></li>
	<li><b>Weight:</b> <?=$data['weight']?></li>
	<li><b>Eyes:</b> <?=$data['eyes']?></li>
	<li><b>Hair:</b> <?=$data['hair']?></li>
	<li><b>Skin:</b> <?=$data['skin']?></li>
</ul>
<hr>
<ul>
	<h3>Abilities</h3>
	<li><b>Strength:</b> <?=$data['strength']?> (<span id='strMod'></span>)</li>
	<li><b>Dexterity:</b> <?=$data['dexterity']?> (<span id='dexMod'></span>)</li>
	<li><b>Constitution:</b> <?=$data['constitution']?> (<span id='conMod'></span>)</li>
	<li><b>Intelligence:</b> <?=$data['intelligence']?> (<span id='intMod'></span>)</li>
	<li><b>Wisdom:</b> <?=$data['wisdom']?> (<span id='wisMod'></span>)</li>
	<li><b>Charisma:</b> <?=$data['charisma']?> (<span id='chaMod'></span>)</li>
</ul>
<hr>
<ul>
	<h3>Saving Throws</h3>
	<li><b>Fortitude:</b> <span id="fortitude"></span></li>
	<li><b>Reflex:</b> <span id="reflex"></span></li>
	<li><b>Will:</b> <span id="will"></span></li>
</ul>
<hr>
<ul>
	<h3>Combat Statistics</h3>
	<li><b>Hit Points:</b> <?=$data['hitPoints']?></li>
	<li><b>Armor Class:</b> <span id="armorClass"></span></li>
	<li><b>Touch:</b> <span id="touch"></span></li>
	<li><b>Flat-Footed:</b> <span id="flatFooted"></span></li>
	<li><b>Initiative:</b> <span id="initiative"></span></li>
	<li><b>Base Speed:</b> <span id="speed"></span></li>
	<li><b>Damage Reduction:</b> <span id="damageReduction">-</span></li> 
	<li><b>Base Attack Bonus:</b> <span id="baseAttack"></span></li>
	<li><b>Spell Resistace:</b> <span id="spellResistance">-</span></li>
	<li><b>Grapple:</b> <span id="grapple"></span></li>
</ul>
<hr>
<h3>Skills</h3>
<p><b>Max Ranks:</b> <span id="maxRanks"></span> Class/ <span id="maxRanksCC"></span> Cross-Class</p>
<p><b>Armor Check Penalty:</b> <span id="armorCheck"></span></p>
<table>
	<thead>
		<tr>
			<th>Class Skill</th>
			<th>Skill Name</th>
			<th>Skill Modifier</th>
			<th>Ranks</th>
		</tr>
	</thead>
	<tbody id="skills"></tbody>
</table>
<p>1 Armor check penalty applies to checks<br>2 Double the normal armor check penalty applies to checks</p>
<hr>
<ul>
	<h3>Equipment</h3>
	<span id="weapons" style="display: none;"><?=$data['weapons']?></span>
	<span id="armor" style="display: none;"><?=$data['armor']?></span>

	<li><b>Outfit:</b> <?=$data['outfit']?></li>
	<li><b>Weapons:</b>
		<table>
			<thead>
				<tr>
					<th>Weapon</th>
					<th>Attack Bonus</th>
					<th>Damage</th>
					<th>Critical</th>
					<th>Range</th>
				</tr>
			</thead>
			<tbody id="weaponTable"></tbody>
		</table>
	</li>
	<li><b>Armor:</b>
		<table>
			<thead>
				<tr>
					<th>Armor</th>
					<th>Armor Bonus</th>
					<th>Max Dex</th>
					<th>Armor Check Penalty</th>
				</tr>
			</thead>
			<tbody id="armorTable"></tbody>
		</table>
	</li>
</ul>
<hr>

<ul id="feats"><h3>Feats</h3></ul>
<hr>
<ul>
	<h3>Special Abilities</h3>
	<span id="specialAbilities"><?=$data['racialSpecials']?><?=$data['classSpecials']?></span>
</ul>
</body>
</html>