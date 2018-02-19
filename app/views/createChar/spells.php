<!DOCTYPE html>
<html>
<head>
<script type="text/javascript" src="/mvc/app/controllers/createCharJs/spells.js"></script></head>
<body onload=loadSpells('<?=$data['class']?>','<?=$data['level']?>',<?=$data['intelligence']?>,<?=$data['wisdom']?>,<?=$data['charisma']?>)>

<h1>Spells</h1>
<h3>Choose Spells</h3>
<div id="wizardSpellbook" style="display: none;">
	<h4>Wizard Spellbook</h4>
	<p><b>Spellbook Slots Left</b>: <span id="wizardSpells"></span></p>
	<hr>
</div>
<div id="0level" style="display: none;">
	<h4>Level 0</h4>
	<p>Difficulty Class: <span id="0diffClass"></span></p>
	<p><span id="0spellsPerDay"></span> per day</p>
	<div id="0known" >
		<p><b>Choose Spells Known</b>: <span id="0knownCount"></span></p>
		<div id="0knownList"></div>
	</div>
	<div id="0prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="0preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<div id="1level" style="display: none;">
	<h4>Level 1</h4>
	<p>Difficulty Class: <span id="1diffClass"></span></p>
	<p><span id="1spellsPerDay"></span> per day</p>
	<div id="1known" >
		<p><b>Choose Spells Known</b>: <span id="1knownCount"></span></p>
		<div id="1knownList"></div>
	</div>
	<div id="1prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="1preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<div id="2level" style="display: none;">
	<h4>Level 2</h4>
	<p>Difficulty Class: <span id="2diffClass"></span></p>
	<p><span id="2spellsPerDay"></span> per day</p>
	<div id="2known" >
		<p><b>Choose Spells Known</b>: <span id="2knownCount"></span></p>
		<div id="2knownList"></div>
	</div>
	<div id="2prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="2preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<div id="3level" style="display: none;">
	<h4>Level 3</h4>
	<p>Difficulty Class: <span id="3diffClass"></span></p>
	<p><span id="3spellsPerDay"></span> per day</p>
	<div id="3known" >
		<p><b>Choose Spells Known</b>: <span id="3knownCount"></span></p>
		<div id="3knownList"></div>
	</div>
	<div id="3prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="3preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<div id="4level" style="display: none;">
	<h4>Level 4</h4>
	<p>Difficulty Class: <span id="4diffClass"></span></p>
	<p><span id="4spellsPerDay"></span> per day</p>
	<div id="4known" >
		<p><b>Choose Spells Known</b>: <span id="4knownCount"></span></p>
		<div id="4knownList"></div>
	</div>
	<div id="4prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="4preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<div id="5level" style="display: none;">
	<h4>Level 5</h4>
	<p>Difficulty Class: <span id="5diffClass"></span></p>
	<p><span id="5spellsPerDay"></span> per day</p>
	<div id="5known" >
		<p><b>Choose Spells Known</b>: <span id="5knownCount"></span></p>
		<div id="5knownList"></div>
	</div>
	<div id="5prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="5preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<div id="6level" style="display: none;">
	<h4>Level 6</h4>
	<p>Difficulty Class: <span id="6diffClass"></span></p>
	<p><span id="6spellsPerDay"></span> per day</p>
	<div id="6known" >
		<p><b>Choose Spells Known</b>: <span id="6knownCount"></span></p>
		<div id="6knownList"></div>
	</div>
	<div id="6prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="6preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<div id="7level" style="display: none;">
	<h4>Level 7</h4>
	<p>Difficulty Class: <span id="7diffClass"></span></p>
	<p><span id="7spellsPerDay"></span> per day</p>
	<div id="7known" >
		<p><b>Choose Spells Known</b>: <span id="7knownCount"></span></p>
		<div id="7knownList"></div>
	</div>
	<div id="7prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="7preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<div id="8level" style="display: none;">
	<h4>Level 8</h4>
	<p>Difficulty Class: <span id="8diffClass"></span></p>
	<p><span id="8spellsPerDay"></span> per day</p>
	<div id="8known" >
		<p><b>Choose Spells Known</b>: <span id="8knownCount"></span></p>
		<div id="8knownList"></div>
	</div>
	<div id="8prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="8preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<div id="9level" style="display: none;">
	<h4>Level 9</h4>
	<p>Difficulty Class: <span id="9diffClass"></span></p>
	<p><span id="9spellsPerDay"></span> per day</p>
	<div id="9known" >
		<p><b>Choose Spells Known</b>: <span id="9knownCount"></span></p>
		<div id="9knownList"></div>
	</div>
	<div id="9prepared">
		<p><b>Choose Spells to Prepare</b></p>
		<table>
			<thead>
				<tr>
					<th></th>
					<th>Number Prepared</th>
					<th>Spell</th>
				</tr>
			</thead>
			<tbody id="9preparedTable"></tbody>
		</table>
	</div>
	<hr>
</div>
<form action="charSheet" method="POST">
	<input type="hidden" name="id" value=<?=$data['id']?>>
	<input type="hidden" id="chosenKnown" name="chosenKnown">
	<input type="hidden" id="chosenPrepared" name="chosenPrepared">
	<input type="submit" id="submitSpells" value="submit" disabled>
</form>

</body>
</html>