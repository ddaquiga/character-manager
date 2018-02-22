<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/spells.js"></script></head>
<body onload=loadSpells('<?=$data['class']?>','<?=$data['level']?>',<?=$data['intelligence']?>,<?=$data['wisdom']?>,<?=$data['charisma']?>,'<?=$data['lvc']?>','<?=$data['gve']?>','<?=$data['diety']?>','<?=$data['domains']?>','<?=$data['schoolSpec']?>','<?=$data['bannedSchools']?>')>

<h1>Spells</h1>
<h3>Choose Spells</h3>
<hr>
<div id="clericDomains" style="display: none;">
	<h4>Domains</h4>
	<p><?=$data['domains']?></p>
	<hr>
</div>
<div id="wizardSpellbook" style="display: none;">
	<h4>Wizard Spellbook</h4>
	<p><b>Spellbook Slots Left</b>: <span id="wizardSpells"></span></p>
	<div id="schoolSpec">
		<p><b>Specialist School</b>: <?=$data['schoolSpec']?></p>
		<p><b>Banned Schools</b>: <?=$data['bannedSchools']?></p>
	</div>
	<hr>
</div>
<div id="spells"></div>
<form action="charSheet" method="POST">
	<input type="hidden" name="id" value=<?=$data['id']?>>
	<input type="hidden" id="chosenKnown" name="chosenKnown">
	<input type="hidden" id="chosenPrepared" name="chosenPrepared">
	<input type="submit" id="submitSpells" value="submit" disabled>
</form>

</body>
</html>