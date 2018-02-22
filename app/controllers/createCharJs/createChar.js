function rollDie(num,size){
	var total = 0;
		for (die=0;die<num;die++){
			total += Math.floor(Math.random()*size) + 1;
		}
		return total;
}

function getMod(abil){
	return Math.floor((abil - 10)/2);
}

function getBaseAttack(charClass,level){
	good = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	average = [0,1,2,3,3,4,5,6,6,7,8,9,9,10,11,12,12,13,14,15];
	poor = [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10];

	if (charClass == "Barbarian" || charClass == "Fighter" || charClass == "Paladin" || charClass == "Ranger")
		return good[level-1];
	else if (charClass == "Sorcerer" || charClass == "Wizard")
		return poor[level-1];
	else return average[level-1];
}

function getKeyAbilityMod(modifier){
	array = [0];

	for (i=0;i<9;i++){
		score = Math.ceil((modifier-i)/4);
		if (score < 0)
			score = 0;
		array[array.length] = score;
	} 
	return array;
}

function getRacialSpecials(race,charisma){
	switch (race){
		case "Human":
			return ["Medium Size","30 foot base land speed","1 extra feat at 1st level","4 extra skill points at first level and 1 extra skill point at each additional level"];
		case "Dwarf":
			return ["+2 Constitution, -2 Charisma","Medium Size","20 foot base land speed","Darkvision","Stonecutting","Weapon Familiarity: Dwarven Waraxe and Dwarven Urgosh","Stability","+2 bonus on saving throws against poison","+2 bonus on saving throws against spells and spell-like effects","+1 bonus to attack rolls against orcs and goblinoids","+4 dodge bonus to Armor Class against monsters of the giant type","+2 bonus on Appraise checks that are related to stone or metal items","+2 bonus on Craft checks related to stone or metal"];
		case "Elf":
			return ["+2 Dexterity, -2 Constitution","Medium Size","30 foot base land speed","Immunity to magic sleep effects","+2 saving throw against enchantment spells or effects","Low-Light Vision","Weapon Proficiency: Longsword, Rapier, Longbow (including Composite Longbow), and Shortbow (including Composite Shortbow)","+2 bonus on Listen Search and Spot checks","Free Search check when passing within 5ft. of a secret door"];
		case "Gnome":
			racials = ["+2 Constitution, -2 Strength","Small Size: +1 bonus to Armor Class and Attack rolls, and +4 bonus to Hide Checks","20 foot base land speed","Low-light Vision","Weapon Familiarity: Gnome Hooked Hammer","+2 bonus against illusions","+1 to the Difficulty Class for all saving throws against illusion spells cast by gnomes","+1 bonus on attack rolls against kobolds and goblinoids","+4 dodge bonus to Armor Class against monsters of the giant type","+2 bonus on Listen checks","+2 bonus on Craft(alchemy) checks"];
			if (charisma >= 10)
				racials[racials.length] = "Spell-Like Abilities: 1/day - speak with burrowing mammal (1 minute), dancing lights, ghost sound, prestidigitation";
			else
				racials[racials.length] = "Spell-Like Abilities: 1/day - speak with burrowing mammal (1 minute)";
			return racials;
		case "Half-elf":
			return ["Immunity to magic sleep effects","+2 saving throw against enchantment spells or effects","Low-Light Vision","+1 bonus on Listen, Search, and Spot checks","+2 bonus on Diplomacy and Gather Information checks","Elven Blood"];
		case "Half-orc":
			return ["+2 Strength, -2 Intelligence, -2 Charisma","Darkvision","Darkvision","Orc Blood"];
		case "Halfling":
			return ["+2 Dexterity, -2 Strength","Small Size: +1 bonus to Armor Class and Attack rolls, and +4 bonus to Hide Checks","+2 bonus on Climb, Jump, and Move Silently checks","+1 bonus on all saving throws"," +2 morale bonus on saving throws aginst fear","+1 bonus on attack rolls with thrown weapons and slings","+2 bonus on Listen checks"];
	}
}

function getClassSpecials(charClass, level){
	switch (charClass){
		case "Barbarian":
			array = [
				["Fast Movement","Illiteracy","Rage 1/day"]
			];
			break;
		case "Bard":
			array = [
				["Arcane Spells","Bardic Music","Bardic Knowledge","Countersong","Fascinate","Inspire Courage +1"]
			];
			break;
		case "Cleric":
			array = [
				["Divine Spells","Spontaneous Casting","Aura","Turn or Rebuke Undead"]
			];
			break;
		case "Druid":
			array = [
				["Divine Spells","Spontaneous Casting","Animal Companion","Nature Sense","Wild Empathy"]
			];
			break;
		case "Fighter":
			array = [
				[]
			];
			break;
		case "Monk":
			array = [
				["Flurry of Blows -2/-2","Unarmed Damage 1d6"]
			];
			break;
		case "Paladin":
			array = [
				["Code of Conduct","Aura of Good","Detect Evil","Smite Evil 1/day"]
			];
			break;
		case "Ranger":
			array = [
				["Favored Enemy","Track","Wild Empathy"]
			];
			break;
		case "Rogue":
			array = [
				["Sneak Attack +1d6","Trapfinding"]
			];
			break;
		case "Sorcerer":
			array = [
				["Arcane Spells","Summon Familiar"]
			];
			break;
		case "Wizard":
			array = [
				["Arcane Spells","Summon Familiar"]
			];
			break;
	}
	return array[level - 1];
}

//skills------------------------------------------------------------------



function getSkillId(){
	return ["appraise","balance","bluff","climb","concentration","craft","decipherScript","diplomacy","disableDevice","disguise","escapeArtist","forgery","gatherInformation","handleAnimal","heal","hide","intimidate","jump","arcana","architecture","dungeoneering","geography","history","local","nature","nobility","religion","planes","listen","moveSilently","openLock","perform","profession","ride","search","senseMotive","sleightOfHand","speakLanguage","spellcraft","spot","survival","swim","tumble","useMagicDevice","useRope"];
}

function getSkillName(){
	return ["Appraise","Balance","Bluff","Climb","Concentration","Craft","Decipher Script","Diplomacy","Disable Device","Disguise","Escape Artist","Forgery","Gather Information","Handle Animal","Heal","Hide","Intimidate","Jump","Knowledge(arcana)","Knowledge(architecture and engineering)","Knowledge(dungeoneering)","Knowledge(geography)","Knowledge(history)","Knowledge(local)","Knowledge(nature)","Knowledge(nobility and royalty)","Knowledge(religion)","Knowledge(the planes)","Listen","Move Silently","Open Lock","Perform","Profession","Ride","Search","Sense Motive","Sleight of Hand","Speak Language","Spellcraft","Spot","Survival","Swim","Tumble","Use Magic Device","Use Rope"];
}

function getSkillKeyAbil(){
	return ["Int","Dex","Cha","Str","Con","Int","Int","Cha","Int","Cha","Dex","Int","Cha","Cha","Wis","Dex","Cha","Str","Int","Int","Int","Int","Int","Int","Int","Int","Int","Int","Wis","Dex","Dex","Cha","Wis","Dex","Int","Wis","Dex","None","Int","Wis","Wis","Str","Dex","Cha","Dex"];
}

function isClassSkill(skill, charClass){
	switch (charClass){
		case "Barbarian":
			return (skill == "climb" ||
			skill == "craft" ||
			skill == "handleAnimal" ||
			skill == "intimidate" ||
			skill == "jump" ||
			skill == "listen" ||
			skill == "ride" ||
			skill == "survival" ||
			skill == "swim")
			break;
		case "Bard":
			return (skill == "appraise" ||
			skill == "balance" ||
			skill == "bluff" ||
			skill == "climb" ||
			skill == "concentration" ||
			skill == "craft" ||
			skill == "decipherScript" ||
			skill == "diplomacy" ||
			skill == "disguise" ||
			skill == "escapeArtist" ||
			skill == "gatherInformation" ||
			skill == "hide" ||
			skill == "jump" ||
			skill == "arcana" ||
			skill == "architecture" ||
			skill == "dungeoneering" ||
			skill == "geography" ||
			skill == "history" ||
			skill == "local" ||
			skill == "nature" ||
			skill == "nobility" ||
			skill == "religion" ||
			skill == "planes" ||
			skill == "listen" ||
			skill == "moveSilently" ||
			skill == "perform" ||
			skill == "profession" ||
			skill == "senseMotive" ||
			skill == "sleightOfHand" ||
			skill == "speakLanguage" ||
			skill == "spellcraft" ||
			skill == "swim" ||
			skill == "tumble" ||
			skill == "useMagicDevice")
			break;
		case "Cleric":
			return (skill == "concentration" ||
			skill == "craft" ||
			skill == "diplomacy" ||
			skill == "heal" ||
			skill == "arcana" ||
			skill == "religion" ||
			skill == "planes" ||
			skill == "profession" ||
			skill == "spellcraft")
			break;
		case "Druid":
			return (skill == "concentration" ||
			skill == "craft" ||
			skill == "diplomacy" ||
			skill == "handleAnimal" ||
			skill == "heal" ||
			skill == "nature" ||
			skill == "listen" ||
			skill == "profession" ||
			skill == "ride" ||
			skill == "spellcraft" ||
			skill == "spot" ||
			skill == "survival" ||
			skill == "swim")
			break;
		case "Fighter":
			return (skill == "climb" ||
			skill == "craft" ||
			skill == "handleAnimal" ||
			skill == "intimidate" ||
			skill == "jump" ||
			skill == "ride" ||
			skill == "swim")
			break;
		case "Monk":
			return (skill == "balance" ||
			skill == "climb" ||
			skill == "concentration" ||
			skill == "craft" ||
			skill == "diplomacy" ||
			skill == "escapeArtist" ||
			skill == "hide" ||
			skill == "jump" ||
			skill == "arcana" ||
			skill == "religion" ||
			skill == "listen" ||
			skill == "moveSilently" ||
			skill == "perform" ||
			skill == "profession" ||
			skill == "senseMotive" ||
			skill == "spot" ||
			skill == "swim" ||
			skill == "tumble")
			break;
		case "Paladin":
			return (skill == "concentration" ||
			skill == "craft" ||
			skill == "diplomacy" ||
			skill == "handleAnimal" ||
			skill == "heal" ||
			skill == "nobility" ||
			skill == "religion" ||
			skill == "profession" ||
			skill == "ride" ||
			skill == "senseMotive")
			break;
		case "Ranger":
			return (skill == "climb" ||
			skill == "concentration" ||
			skill == "craft" ||
			skill == "handleAnimal" ||
			skill == "heal" ||
			skill == "hide" ||
			skill == "jump" ||
			skill == "dungeoneering" ||
			skill == "geography" ||
			skill == "nature" ||
			skill == "listen" ||
			skill == "moveSilently" ||
			skill == "profession" ||
			skill == "ride" ||
			skill == "search" ||
			skill == "spot" ||
			skill == "survival" ||
			skill == "swim" ||
			skill == "useRope")
			break;
		case "Rogue":
			return (skill == "appraise" ||
			skill == "balance" ||
			skill == "bluff" ||
			skill == "climb" ||
			skill == "craft" ||
			skill == "decipherScript" ||
			skill == "diplomacy" ||
			skill == "disableDevice" ||
			skill == "disguise" ||
			skill == "escapeArtist" ||
			skill == "forgery" ||
			skill == "gatherInformation" ||
			skill == "hide" ||
			skill == "intimidate" ||
			skill == "jump" ||
			skill == "local" ||
			skill == "listen" ||
			skill == "moveSilently" ||
			skill == "openLock" ||
			skill == "perform" ||
			skill == "profession" ||
			skill == "search" ||
			skill == "senseMotive" ||
			skill == "sleightOfHand" ||
			skill == "spot" ||
			skill == "swim" ||
			skill == "tumble" ||
			skill == "useMagicDevice" ||
			skill == "useRope")
			break;
		case "Sorcerer":
			return (skill == "bluff" ||
			skill == "concentration" ||
			skill == "craft" ||
			skill == "arcana" ||
			skill == "profession" ||
			skill == "spellcraft")
			break;
		case "Wizard":
			return (skill == "concentration" ||
			skill == "craft" ||
			skill == "decipherScript" ||
			skill == "arcana" ||
			skill == "architecture" ||
			skill == "dungeoneering" ||
			skill == "geography" ||
			skill == "history" ||
			skill == "local" ||
			skill == "nature" ||
			skill == "nobility" ||
			skill == "religion" ||
			skill == "planes" ||
			skill == "profession" ||
			skill == "spellcraft")
			break;
	}
}

//feats-----------------------------------------------------------------

function getFeatId(){
	return ["acrobatic","agile","alertness","animalAffinity","lightArmor","mediumArmor","heavyArmor","athletic","augmentSummoning","blindFight","combatCasting","combatExpertise","impDisarm","impFeint","impTrip","whirlwindAttack","combatReflexes","deceitful","deftHands","diligent","dodge","mobility","springAttack","endurance","diehard","eschewMaterials","extraTurning","greatFortitude","impCounterspell","impCritical","impInitiative","impTurning","impUnarmedStrike","impGrapple","deflectArrows","snatchArrows","stunningFist","investigator","ironWill","leadership","lightningReflexes","magicalAptitude","martialWeapon","mountedCombat","mountedArchery","rideByAttack","spiritedCharge","trample","naturalSpell","negotiator","nimbleFingers","persuasive","pointBlankShot","farShot","preciseShot","rapidShot","manyshot","shotOnTheRun","impPreciseShot","powerAttack","cleave","greatCleave","impBullRush","impOverrun","impSunder","quickDraw","rapidReload","run","selfSufficient","shield","impShieldBash","towerShield","simpleWeapon","skillFocus","spellFocus","greaterSpellFocus","spellMastery","spellPenetration","greaterSpellPenetration","stealthy","toughness","track","twoWeaponFighting","twoWeaponDefense","impTwoWeaponFighting","greaterTwoWeaponFighting","weaponFinesse","weaponFocus","weaponSpecialization","greaterWeaponFocus","greaterWeaponSpecialization","brewPotion","craftMagicArmsandArmor","craftRod","craftStaff","craftWand","craftWondrousItem","forgeRing","scribeScroll","empowerSpell","enlargeSpell","extendSpell","heightenSpell","maximizeSpell","quickenSpell","silentSpell","stillSpell","widenSpell","gauntlet","dagger","punchingDagger","spikedGauntlet","lightMace","sickle","club","heavyMace","morningstar","shortspear","longspear","quarterstaff","spear","heavyCrossbow","lightCrossbow","dart","javelin","sling","throwingAxe","lightHammer","handAxe","kukri","lightPick","sap","lightShield","spikedArmor","lightSpikedShield","shortSword","battleaxe","flail","longsword","heavyPick","rapier","scimitar","heavyShield","heavySpikedShield","trident","warhammer","falchion","glaive","greataxe","greatclub","heavyFlail","greatsword","guisarme","halberd","lance","ranseur","scythe","longbow","compositeLongbow","shortbow","compositeShortbow","kama","nunchaku","sai","siangham","bastardSword","dwarvenWaraxe","whip","orcDoubleAxe","spikedChain","direFlail","gnomeHookedHammer","twoBladedSword","dwarvenUrgosh","bolas","handCrossbow","repeatingHeavyCrossbow","repeatingLightCrossbow","net","shuriken"];
}

function getFeatName(){
	return ["Acrobatic","Agile","Alertness","Animal Affinity","Armor Proficiency (light)","Armor Proficiency (medium)","Armor Proficiency (heavy)","Athletic","Augment Summoning","Blind-Fight","Combat Casting","Combat Expertise","Improved Disarm","Improved Feint","Improved Trip","Whirlwind Attack","Combat Reflexes","Deceitful","Deft Hands","Diligent","Dodge","Mobility","Spring Attack","Endurance","Diehard","Eschew Materials","Extra Turning","Great Fortitude","Improved Counterspell","Improved Critical","Improved Initiative","Improved Turning","Improved Unarmed Strike","Improved Grapple","Deflect Arrows","Snatch Arrows","Stunning Fist","Investigator","Iron Will","Leadership","Lightning Reflexes","Magical Aptitude","Martial Weapon Proficiency","Mounted Combat","Mounted Archery","Ride-By Attack","Spirited Charge","Trample","Natural Spell","Negotiator","Nimble Fingers","Persuasive","Point Blank Shot","Far Shot","Precise Shot","Rapid Shot","Manyshot","Shot on the Run","Improved Precise Shot","Power Attack","Cleave","Great Cleave","Improved Bull Rush","Improved Overrun","Improved Sunder","Quick Draw","Rapid Reload","Run","Self-Sufficient","Shield Proficiency","Improved Shield Bash","Tower Shield Proficiency","Simple Weapon Proficiency","Skill Focus","Spell Focus","Greater Spell Focus","Spell Mastery","Spell Penetration","Greater Spell Penetration","Stealthy","Toughness","Track","Two-Weapon Fighting","Two-Weapon Defense","Improved Two-Weapon Fighting","Greater Two-Weapon Fighting","Weapon Finesse","Weapon Focus","Weapon Specialization","Greater Weapon Focus","Greater Weapon Specialization","Brew Potion","Craft Magic Arms and Armor","Craft Rod","Craft Staff","Craft Wand","Craft Wondrous Item","Forge Ring","Scribe Scroll","Empower Spell","Enlarge Spell","Extend Spell","Heighten Spell","Maximize Spell","Quicken Spell","Silent Spell","Still Spell","Widen Spell","Gauntlet Proficiency","Dagger Proficiency","Punching Dagger Proficiency","Spiked Gauntlet Proficiency","Light Mace Proficiency","Sickle Proficiency","Club Proficiency","Heavy Mace Proficiency","Morningstar Proficiency","Shortspear Proficiency","Longspear Proficiency","Quarterstaff Proficiency","Spear Proficiency","Heavy Crossbow Proficiency","Light Crossbow Proficiency","Dart Proficiency","Javelin Proficiency","Sling Proficiency","Throwing Axe Proficiency","Light Hammer Proficiency","Handaxe Proficiency","Kukri Proficiency","Light Pick Proficiency","Sap Proficiency","Light Shield Proficiency","Spiked Armor Proficiency","Light Spiked Shield Proficiency","Short Sword Proficiency","Battleaxe Proficiency","Flail Proficiency","Longsword Proficiency","Heavy Pick Proficiency","Rapier Proficiency","Scimitar Proficiency","Heavy Shield Proficiency","Heavy Spiked Shield Proficiency","Trident Proficiency","Warhammer Proficiency","Falchion Proficiency","Glaive Proficiency","Greataxe Proficiency","Greatclub Proficiency","Heavy Flail Proficiency","Greatsword Proficiency","Guisarme Proficiency","Halberd Proficiency","Lance Proficiency","Ranseur Proficiency","Scythe Proficiency","Longbow Proficiency","Composite Longbow Proficiency","Shortbow Proficiency","Composite Shortbow Proficiency","Kama Proficiency","Nunchaku Proficiency","Sai Proficiency","Siangham Proficiency","Bastard Sword Proficiency","Dwarven Waraxe Proficiency","Whip Proficiency","Orc Double Axe Proficiency","Spiked Chain Proficiency","Dire Flail Proficiency","Gnome Hooked Hammer Proficiency","Two-bladed Sword Proficiency","Dwarven Urgosh Proficiency","Bolas Proficiency","Hand Crossbow Proficiency","Repeating Heavy Crossbow Proficiency","Light Repeating Crossbow Proficiency","Net Proficiency","Shuriken Proficiency"];
}

//description----------------------------------------------------------

function getDietyId(){
	return ["none","heironeous","moradin","yondalla","ehlonna","garl","pelor","corellon","kord","wee","cuthbert","boccob","fharlanghn","obad","olidammara","hextor","nerull","vecna","erythnul","gruumsh"];
}
function getDietyName(){
	return ["None","Heironeous, god of valor","Moradin, god of the dwarves","Yondalla, goddess of the halflings","Ehlonna, goddess of the woodlands","Garl Glittergold, god of the gnomes","Pelor, god of the sun","Corellon Larethian, god of the elves","Kord, god of strength","Wee Jas, goddess of death and magic","St. Cuthbert, god of Retribution","Boccob, god of magic","Fharlanghn, god of roads","Obad-Hai, god of nature","Olidammara, god of thieves","Hextor, god of tyranny","Nerull, god of death","Vecna, god of secrets","Erythnul, god of slaughter","Gruumsh, god of the orcs"];
}
function getDietyLVC(){
	return ["","lawful","lawful","lawful","neutral","neutral","neutral","chaotic","chaotic","lawful","lawful","neutral","neutral","neutral","chaotic","lawful","neutral","neutral","chaotic","chaotic"];
}
function getDietyGVE(){
	return ["","good","good","good","good","good","good","good","good","neutral","neutral","neutral","neutral","neutral","neutral","evil","evil","evil","evil","evil"];
}
function getDietyDomains(){
	return [[],["Good","Law","War"],["Earth","Good","Law","Protection"],["Good","Law","Protection"],["Animal","Good","Plant","Sun"],["Good","Protection","Trickery"],["Good","Healing","Strength","Sun"],["Chaos","Good","Protection","War"],["Chaos","Good","Luck","Strength"],["Death","Law","Magic"],["Destruction","Law","Protection","Strength"],["Knowledge","Magic","Trickery"],["Luck","Protection","Travel"],["Air","Animal","Earth","Fire","Plant","Water"],["Chaos","Luck","Trickery"],["Destruction","Evil","Law","War"],["Death","Evil","Trickery"],["Evil","Knowledge","Magic"],["Chaos","Evil","Trickery","War"],["Chaos","Evil","Strength","War"]];
}
//equipment------------------------------------------------------------

function getWeaponId(){
	return ["gauntlet","dagger","punchingDagger","spikedGauntlet","lightMace","sickle","club","heavyMace","morningstar","shortspear","longspear","quarterstaff","spear","heavyCrossbow","lightCrossbow","dart","javelin","sling","throwingAxe","lightHammer","handAxe","kukri","lightPick","sap","lightShield","spikedArmor","lightSpikedShield","shortSword","battleaxe","flail","longsword","heavyPick","rapier","scimitar","heavyShield","heavySpikedShield","trident","warhammer","falchion","glaive","greataxe","greatclub","heavyFlail","greatsword","guisarme","halberd","lance","ranseur","scythe","longbow","compositeLongbow","shortbow","compositeShortbow","kama","nunchaku","sai","siangham","bastardSword","dwarvenWaraxe","whip","orcDoubleAxe","spikedChain","direFlail","gnomeHookedHammer","twoBladedSword","dwarvenUrgosh","bolas","handCrossbow","repeatingHeavyCrossbow","repeatingLightCrossbow","net","shuriken"];
}

function getWeaponName(){
	return ["Gauntlet","Dagger","Punching Dagger","Spiked Gauntlet","Light Mace","Sickle","Club","Heavy Mace","Morningstar","Shortspear","Longspear","Quarterstaff","Spear","Heavy Crossbow","Light Crossbow","Dart","Javelin","Sling","Throwing Axe","Light Hammer","Handaxe","Kukri","Light Pick","Sap","Light Shield","Spiked Armor","Light Spiked Shield","Short Sword","Battleaxe","Flail","Longsword","Heavy Pick","Rapier","Scimitar","Heavy Shield","Heavy Spiked Shield","Trident","Warhammer","Falchion","Glaive","Greataxe","Greatclub","Heavy Flail","Greatsword","Guisarme","Halberd","Lance","Ranseur","Scythe","Longbow","Composite Longbow","Shortbow","Composite Shortbow","Kama","Nunchaku","Sai","Siangham","Bastard Sword","Dwarven Waraxe","Whip","Orc Double Axe","Spiked Chain","Dire Flail","Gnome Hooked Hammer","Two-bladed Sword","Dwarven Urgosh","Bolas","Hand Crossbow","Repeating Heavy Crossbow","Light Repeating Crossbow","Net","Shuriken"];
}

function getWeaponClass(){
	return ["simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","simple","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","martial","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic","exotic"];
}

function getWeaponType(){
	return ["unarmed","light","light","light","light","light","oneHanded","oneHanded","oneHanded","oneHanded","twoHanded","twoHanded","twoHanded","ranged","ranged","ranged","ranged","ranged","light","light","light","light","light","light","light","light","light","light","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","oneHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","ranged","ranged","ranged","ranged","light","light","light","light","oneHanded","oneHanded","oneHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","twoHanded","ranged","ranged","ranged","ranged","ranged","ranged"];
}
function getWeaponCost(){
	return [2,2,2,5,5,6,0,12,8,1,5,0,2,50,35,0.5,1,0,8,1,6,8,4,1,0,0,0,10,10,8,15,8,20,15,0,0,15,12,75,8,20,5,15,50,9,10,10,10,18,75,10,30,75,2,2,1,3,35,30,1,60,25,90,20,100,50,5,100,400,250,20,1];
}

function getWeaponSmallDamage(){
	return ["1d2","1d3","1d3","1d3","1d4","1d4","1d4","1d6","1d6","1d4","1d6","1d4","1d6","1d8","1d6","1d3","1d4","1d3","1d4","1d3","1d4","1d3","1d3","1d4","1d2","1d4","1d3","1d4","1d6","1d6","1d6","1d4","1d4","1d4","1d3","1d4","1d6","1d6","1d6","1d8","1d10","1d8","1d8","1d10","1d6","1d8","1d6","1d","1d6","1d6","1d6","1d4","1d4","1d4","1d4","1d3","1d4","1d8","1d8","1d2","1d6","1d6","1d6","1d6","1d6","1d6","1d3","1d3","1d8","1d6","0","1"];
}

function getWeaponMediumDamage(){
	return ["1d3","1d4","1d4","1d4","1d6","1d6","1d6","1d8","1d8","1d6","1d8","1d6","1d8","1d10","1d8","1d4","1d6","1d4","1d6","1d4","1d6","1d4","1d4","1d6","1d3","1d6","1d4","1d6","1d8","1d8","1d8","1d6","1d6","1d6","1d4","1d6","1d8","1d8","2d4","1d10","1d12","1d10","1d10","2d6","2d4","1d10","1d8","2d4","2d4","1d8","1d8","1d6","1d6","1d6","1d6","1d4","1d6","1d10","1d10","1d3","1d8","2d4","1d8","1d8","1d8","1d8","1d4","1d4","1d10","1d8","0","1d2"];
}

function getWeaponCritical(){
	return ["x2","19-20/x2","x2","x2","x2","x2","x2","x2","x2","x2","x3","x2","x3","19-20/x2","19-20/x2","x2","x2","x2","x2","x2","x3","18-20/x2","x4","x2","x2","x2","x2","19-20/x2","x3","x2","19-20/x2","x4","18-20/x2","18-20/x2","x2","x2","x2","x3","18-20/x2","x3","x3","x2","19-20/x2","19-20/x2","x3","x3","x3","x3","x4","x3","x3","x3","x3","x2","x2","x2","x2","19-20/x2","x3","x2","x3","x2","x2","x3/x4","19-20/x2","x3","x2","19-20/x2","19-20/x2","19-20/x2","-","x2"];
}

function getWeaponRange(){
	return [null,10,null,null,null,null,10,null,null,20,null,null,20,120,80,20,30,50,10,20,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,10,null,null,null,null,null,null,null,null,null,null,null,null,100,110,60,70,null,null,10,null,null,null,null,null,null,null,null,null,null,10,30,120,80,10,10];
}

function getWeaponWeight(){
	return [1,1,1,1,4,2,3,8,6,3,9,4,6,8,4,0.5,2,0,2,2,3,2,3,2,0,0,0,2,6,5,4,6,2,4,0,0,4,5,8,10,12,8,10,8,12,12,10,12,10,3,3,2,2,2,2,1,1,6,8,2,15,10,10,6,10,12,2,2,12,6,6,0.5];
}
function getWeaponDamageType(){
	return ["Bludgeoning","Piercing or Slashing","Piercing","Piercing","Bludgeoning","Slashing","Bludgeoning","Bludgeoning","Bludgeoning and Piercing","Piercing","Piercing","Bludgeoning","Piercing","Piercing","Piercing","Piercing","Piercing","Bludgeoning","Slashing","Bludgeoning","Slashing","Slashing","Piercing","Bludgeoning","Bludgeoning","Piercing","Piercing","Piercing","Slashing","Bludgeoning","Slashing","Piercing","Piercing","Slashing","Bludgeoning","Piercing","Piercing","Bludgeoning","Slashing","Slashing","Slashing","Bludgeoning","Bludgeoning","Slashing","Slashing","Piercing or Slashing","Piercing","Piercing","Piercing or Slashing","Piercing","Piercing","Piercing","Piercing","Slashing","Bludgeoning","Bludgeoning","Piercing","Slashing","Slashing","Slashing","Slashing","Piercing","Bludgeoning","Bludgeoning and Piercing","Slashing","Slashing or Piercing","Bludgeoning","Piercing","Piercing","Piercing","-","Piercing"];
}

function getArmorId(){
	return ["padded","leather","studdedLeather","chainShirt","hide","scaleMail","chainmail","breastplate","splintMail","bandedMail","halfPlate","fullPlate","buckler","lightWoodenShield","lightSteelShield","heavyWoodenShield","heavySteelShield","towerShield","armorSpikes","lockedGauntlet","shieldSpikes"];
}

function getArmorName(){
	return ["Padded Armor","Leather Armor","Studded Leather Armor","Chain Shirt Armor","Hide Armor","Scale Mail Armor","Chainmail Armor","Breastplate Armor","Splint Mail Armor","Banded Mail Armor","Half-plate Armor","Full-plate Armor","Buckler","Light Wooden Shield","Light Steel Shield","Heavy Wooden Shield","Heavy Steel Shield","Tower Shield","Armor Spikes","Locked Gauntlet","Shield Spikes"];
}

function getArmorType(){
	return ["light","light","light","light","medium","medium","medium","medium","heavy","heavy","heavy","heavy","shield","shield","shield","shield","shield","shield","extra","extra","extra"];
}
function getArmorCost(){
	return [5,10,25,100,15,50,150,200,200,250,600,1500,15,3,9,7,20,30,50,8,10];
}

function getArmorBonus(){
	return [1,2,3,4,3,4,5,5,6,6,7,8,1,1,1,2,2,4,null,null,null];
}

function getArmorMaxDex(){
	return [8,6,5,4,4,3,2,3,0,1,0,1,null,null,null,null,null,2,null,null,null];
}

function getArmorCheckPenalty(){
	return [0,0,-1,-2,-3,-4,-5,-4,-7,-6,-7,-6,-1,-1,-1,-2,-2,-10,null,null,null];
}

function getArmorArcaneFail(){
	return [5,10,15,20,20,25,30,25,40,35,40,35,5,5,5,15,15,50,null,null,null];
}

function getArmorWeight(){
	return [10,15,20,25,15,30,40,30,45,35,50,50,5,5,6,10,15,45,10,5,5];
}

//spells-------------------------------------------------------------------

function getSpellId(){
	return ["acidFog","acidSplash","aid","airWalk","alarm","alignWeapon","alterSelf","analyzeDweomer","animalGrowth","animalMessenger","animalShapes","animalTrance","animateDead","animateObjects","animatePlants","animateRope","antilifeShell","antimagicField","antipathy","antiplantShell","arcaneEye","arcaneLock","arcaneMark","arcaneSight","greaterArcaneSight","astralProjection","atonement","augury","awaken","balefulPolymorph","bane","banishment","barkskin","bearsEndurance","massBearsEndurance","bestowCurse","bigbysClenchedFist","bigbysCrushingHand","bigbysForcefulHand","bigbysGraspingHand","bigbysInterposingHand","binding","bladeBarrier","blasphemy","bless","blessWater","blessWeapon","blight","blindnessDeafness","blink","blur","breakEnchantment","bullsStrength","massBullsStrength","burningHands","callLightning","callLightningStorm","calmAnimals","calmEmotions","catsGrace","massCatsGrace","causeFear","chainLightning","changestaff","chaosHammer","charmAnimal","charmMonster","massCharmMonster","charmPerson","chillMetal","chillTouch","circleOfDeath","clairaudienceClairvoyance","cloakOfChaos","clone","cloudkill","colorSpray","command","greaterCommand","commandPlants","commandUndead","commune","communeWithNature","comprehendLanguages","coneOfCold","confusion","lesserConfusion","consecrate","contactOtherPlane","contagion","contingency","continualFlame","controlPlants","controlUndead","controlWater","controlWeather","controlWinds","createFoodAndWater","createGreaterUndead","createUndead","createWater","creepingDoom","crushingDespair","cureCriticalWounds","massCureCriticalWounds","cureLightWounds","massCureLightWounds","cureMinorWounds","cureModerateWounds","massCureModerateWounds","cureSeriousWounds","massCureSeriousWounds","curseWater","dancingLights","darkness","darkvision","daylight","daze","dazeMonster","deathKnell","deathWard","deathWatch","deepSlumber","deeperDarkness","delayPoison","delayedBlastFireball","demand","desecrate","destruction","detectAnimalsOrPlants","detectChaos","detectEvil","detectGood","detectLaw","detectMagic","detectPoison","detectScrying","detectSecretDoors","detectSnaresAndPits","detectThoughts","detectUndead","dictum","dimensionDoor","dimensionalAnchor","dimensionalLock","diminishPlants","discernLies","discernLocation","disguiseSelf","disintegrate","dismissal","dispelChaos","dispelEvil","dispelGood","dispelLaw","dispelMagic","greaterDispelMagic","displacement","disruptUndead","disruptingWeapon","divination","divineFavor","divinePower","dominateAnimal","dominateMonster","dominatePerson","doom","drawmijsInstantSummons","dream","eaglesSplendor","massEaglesSplendor","earthquake","elementalSwarm","endureElements","energyDrain","enervation","enlargePerson","massEnlargePerson","entangle","enthrall","entropicShield","erase","etherealJaunt","etherealness","evardsBlackTentacles","expeditiousRetreat","explosiveRunes","eyebite","fabricate","faerieFire","falseLife","falseVision","fear","featherFall","feeblemind","findThePath","findTraps","fingerofDeath","fireSeeds","fireShield","fireStorm","fireTrap","fireball","flameArrow","flameBlade","flameStrike","flamingSphere","flare","fleshToStone","fly","fogCloud","forbiddance","forcecage","foresight","foxsCunning","massFoxsCunning","freedom","freedomOfMovement","gaseousForm","gate","geasQuest","lesserGeas","gentleRepose","ghostSound","ghoulTouch","giantVermin","glibness","glitterdust","globeOfInvulnerability","lesserGlobeOfInvulnerability","glyphOfWarding","greaterGlyphOfWarding","goodberry","goodHope","grease","guardsAndWards","guidance","gustOfWind","hallow","hallucinatoryTerrain","haltUndead","harm","haste","heal","massHeal","healMount","heatMetal","helpingHand","heroesFeast","heroism","greaterHeroism","hidefromAnimals","hidefromUndead","holdAnimal","holdMonster","massHoldMonster","holdPerson","massHoldPerson","holdPortal","holyAura","holySmite","holySword","holyWord","horridWilting","hypnoticPattern","hypnotism","iceStorm","identify","illusoryScript","illusoryWall","imbueWithSpellAbility","implosion","imprisonment","incendiaryCloud","inflictCriticalWounds","massInflictCriticalWounds","inflictLightWounds","massInflictLightWounds","inflictMinorWounds","inflictModerateWounds","massInflictModerateWounds","inflictSeriousWounds","massInflictSeriousWounds","insanity","insectPlague","invisibility","greaterInvsibility","massInvisibility","invisibilityPurge","invisibilitySphere","ironBody","ironwood","jump","keenEdge","knock","knowDirection","legendLore","leomundsSecretChest","leomundsSecureShelter","leomundsTinyHut","leomundsTrap","levitate","light","lightningBolt","limitedWish","liveoak","locateCreature","locateObject","longstrider","lullaby","mageArmor","mageHand","magicCircleAgainstChaos","magicCircleAgainstEvil","magicCircleAgainstGood","magicCircleAgainstLaw","magicFang","greaterMagicFang","magicJar","magicMissile","magicMouth","magicStone","magicVestment","magicWeapon","greaterMagicWeapon","majorCreation","majorImage","makeWhole","markOfJustice","maze","meldIntoStone","melfsAcidArrow","mending","message","meteorSwarm","mindBlank","mindFog","minorCreation","minorImage","miracle","mirageArcana","mirrorImage","misdirection","mislead","modifyMemory","momentOfPrescience","mordenkainensDisjunction","mordenkainensFaithfulHound","mordenkainensLucubration","mordenkainensMagnificentMansion","mordenkainensPrivateSanctum","mordenkainensSword","mount","moveEarth","neutralizePoison","nightmare","nondetection","nystulsMagicAura","obscureObject","obscuringMist","openClose","ordersWrath","otilukesFreezingSphere","otilukesResilientSphere","otilukesTelekineticSphere","ottosIrresistableDance","overlandFlight","owlsWisdom","MassOwlsWisdom","passwall","passWithoutTrace","permanency","permanentImage","persistentImage","phantasmalKiller","phantomSteed","phaseDoor","planarAlly","greaterPlanarAlly","lesserPlanarAlly","planarBinding","greaterPlanarBinding","lesserPlanarBinding","planeShift","plantGrowth","poison","polarRay","polymorph","polymorphAnyObject","powerWordBlind","powerWordKill","powerWordStun","prayer","prestidigitation","prismaticSphere","prismaticSpray","prismaticWall","produceFlame","programmedImage","projectImage","protectionFromArrows","protectionFromChaos","protectionFromEnergy","protectionFromEvil","protectionFromGood","protectionFromLaw","protectionFromSpells","pryingEyes","greaterPryingEyes","purifyFoodandDrink","pyrotechnics","quench","rage","rainbowPattern","raiseDead","rarysMnemonicEnhancer","rarysTelepathicBond","rayofEnfeeblement","rayofExhaustion","rayofFrost","readMagic","reduceAnimal","reducePerson","massReducePerson","refuge","regenerate","reincarnate","removeBlindnessDeafness","removeCurse","removeDisease","removeFear","removeParalysis","repelMetalOrStone","repelVermin","repelWood","repulsion","resistance","resistEnergy","restoration","greaterRestoration","lesserRestoration","resurrection","reverseGravity","righteousMight","ropeTrick","rustingGrasp","sanctuary","scare","scintillatingPattern","scorchingRay","screen","scrying","greaterScrying","sculptSound","searingLight","secretPage","seeInvisibility","seeming","sending","sepiaSnakeSigil","sequester","shades","shadowConjuration","greaterShadowConjuration","shadowEvocation","greaterShadowEvocation","shadowWalk","shambler","shapechange","shatter","shield","shieldOfFaith","shieldOfLaw","shieldOther","shillelagh","shockingGrasp","shout","greaterShout","shrinkItem","silence","silentImage","simulacrum","slayLiving","sleep","sleetStorm","slow","snare","softenEarthAndStone","solidFog","songOfDiscord","soulBind","soundBurst","speakWithAnimals","speakWithDead","speakWithPlants","spectralHand","spellImmunity","greaterSpellImmunity","spellResistance","spellstaff","spellTurning","spiderClimb","spikeGrowth","spikeStones","spiritualWeapon","statue","status","stinkingCloud","stoneShape","stoneskin","stoneTell","stonetoFlesh","stormOfVengeance","suggestion","massSuggestion","summonInstrument","summonMonsterI","summonMonsterII","summonMonsterIII","summonMonsterIV","summonMonsterV","summonMonsterVI","summonMonsterVII","summonMonsterVIII","summonMonsterIX","summonNaturesAllyI","summonNaturesAllyII","summonNaturesAllyIII","summonNaturesAllyIV","summonNaturesAllyV","summonNaturesAllyVI","summonNaturesAllyVII","summonNaturesAllyVIII","summonNaturesAllyIX","summonSwarm","sunbeam","sunburst","symbolOfDeath","symbolOfFear","symbolOfInsanity","symbolOfPain","symbolOfPersuasion","symbolOfSleep","symbolOfStunning","symbolOfWeakness","sympatheticVibration","sympathy","tashasHideousLaughter","telekinesis","teleport","teleportObject","greaterTeleport","teleportationCircle","temporalStasis","tensersFloatingDisk","tesnsersTransformation","timeStop","tongues","touchOfFatigue","touchOfIdiocy","transmuteMetalToWood","transmuteMudToRock","transmuteRockToMud","transportViaPlants","trapTheSoul","treeShape","treeStride","trueResurrection","trueSeeing","trueStrike","undeathToDeath","undetectableAlignment","unhallow","unholyAura","unholyBlight","unseenServant","vampiricTouch","veil","ventriloquism","virtue","vision","wailOfTheBanshee","wallOfFire","wallOfForce","wallOfIce","wallOfIron","wallOfStone","wallOfThorns","warpWood","waterBreathing","waterWalk","wavesOfExhaustion","wavesOfFatigue","web","weird","whirlwind","whisperingWind","windWalk","windWall","wish","woodShape","wordOfChaos","wordOfRecall","zoneOfSilence","zoneOfTruth"];
}

function getSpellName(){
	return ["Acid Fog","Acid Splash","Aid","Air Walk","Alarm","Align Weapon","Alter Self","Analyze Dweomer","Animal Growth","Animal Messenger","Animal Shapes","Animal Trance","Animate Dead","Animate Objects","Animate Plants","Animate Rope","Antilife Shell","Antimagic Field","Antipathy","AntiplantShell","Arcane Eye","Arcane Lock","Arcane Mark","Arcane Sight","Greater Arcane Sight","Astral Projection","Atonement","Augury","Awaken","Baleful Polymorph","Bane","Banishment","Barkskin","Bear's Endurance","Mass Bear's Endurance","Bestow Curse","Bigby's Clenched Fist","Bigby's Crushing Hand","Bigby's Forceful Hand","Bigby's Grasping Hand","Bigby's Interposing Hand","Binding","Blade Barrier","Blasphemy","Bless","Bless Water","Bless Weapon","Blight","Blindness/Deafness","Blink","Blur","Break Enchantment","Bull's Strength","Mass Bull's Strength","Burning Hands","Call Lightning","Call Lightning Storm","Calm Animals","Calm Emotions","Cat's Grace","Mass Cat's Grace","Cause Fear","Chain Lightning","Changestaff","Chaos Hammer","Charm Animal","Charm Monster","Mass Charm Monster","Charm Person","Chill Metal","Chill Touch","Circle of Death","Clairaudience/Clairvoyance","Cloak of Chaos","Clone","Cloudkill","Color Spray","Command","Greater Command","Command Plants","Command Undead","Commune","Commune with Nature","Comprehend Languages","Cone of Cold","Confusion","Lesser Confusion","Consecrate","Contact Other Plane","Contagion","Contingency","Continual Flame","Control Plants","Control Undead","Control Water","Control Weather","Control Winds","Create Food and Water","Create Greater Undead","Create Undead","Create Water","Creeping Doom","Crushing Despair","Cure Critical Wounds","Mass Cure Critical Wounds","Cure Light Wounds","Mass Cure Light Wounds","Cure Minor Wounds","Cure Moderate Wounds","Mass Cure Moderate Wounds","Cure Serious Wounds","Mass Cure Serious Wounds","Curse Water","Dancing Lights","Darkness","Darkvision","Daylight","Daze","Daze Monster","Death Knell","Death Ward","Deathwatch","Deep Slumber","Deeper Darkness","Delay Poison","Delayed Blast Fireball","Demand","Desecrate","Destruction","Detect Animals or Plants","Detect Chaos","Detect Evil","Detect Good","Detect Law","Detect Magic","Detect Poison","Detect Scrying","Detect Secret Doors","Detect Snares and Pits","Detect Thoughts","Detect Undead","Dictum","Dimension Door","Dimensional Anchor","Dimensional Lock","Diminish Plants","Discern Lies","Discern Location","Disguise Self","Disintegrate","Dismissal","Dispel Chaos","Dispel Evil","Dispel Good","Dispel Law","Dispel Magic","Greater Dispel Magic","Displacement","Disrupt Undead","Disrupting Weapon","Divination","Divine Favor","Divine Power","Dominate Animal","Dominate Monster","Dominate Person","Doom","Drawmij's Instant Summons","Dream","Eagle's Splendor","Mass Eagle's Splendor","Earthquake","Elemental Swarm","Endure Elements","Energy Drain","Enervation","Enlarge Person","Mass Enlarge Person","Entangle","Enthrall","Entropic Shield","Erase","Ethereal Jaunt","Etherealness","Evard's Black Tentacles","Expeditious Retreat","Explosive Runes","Eyebite","Fabricate","Faerie Fire","False Life","False Vision","Fear","Feather Fall","Feeblemind","Find the Path","Find Traps","Finger of Death","Fire Seeds","Fire Shield","Fire Storm","Fire Trap","Fireball","Flame Arrow","Flame Blade","Flame Strike","Flaming Sphere","Flare","Flesh to Stone","Fly","Fog Cloud","Forbiddance","Forcecage","Foresight","Fox's Cunning","Mass Fox's Cunning","Freedom","Freedom of Movement","Gaseous Form","Gate","Geas/Quest","Lesser Geas","Gentle Repose","Ghost Sound","Ghoul Touch","Giant Vermin","Glibness","Glitterdust","Globe of Invulnerability","Lesser Globe of Invulnerability","Glyph of Warding","Greater Glyph of Warding","Goodberry","Good Hope","Grease","Guards and Wards","Guidance","Gust of Wind","Hallow","Hallucinatory Terrain","Halt Undead","Harm","Haste","Heal","Mass Heal","Heal Mount","Heat Metal","Helping Hand","Heroes' Feast","Heroism","Greater Heroism","Hide from Animals","Hide from Undead","Hold Animal","Hold Monster","Mass Hold Monster","Hold Person","Mass Hold Person","Hold Portal","Holy Aura","Holy Smite","Holy Sword","Holy Word","Horrid Wilting","Hypnotic Pattern","Hypnotism","Ice Storm","Identify","Illusory Script","Illusory Wall","Imbue with Spell Ability","Implosion","Imprisonment","Incendiary Cloud","Inflict Critical Wounds","Mass Inflict Critical Wounds","Inflict Light Wounds","Mass Inflict Light Wounds","Inflict Minor Wounds","Inflict Moderate Wounds","Mass Inflict Moderate Wounds","Inflict Serious Wounds","Mass Inflict Serious Wounds","Insanity","Insect Plague","Invisibility","Greater Invsibility","Mass Invisibility","Invisibility Purge","Invisibility Sphere","Iron Body","Ironwood","Jump","Keen Edge","Knock","Know Direction","Legend Lore","Leomund's Secret Chest","Leomund's Secure Shelter","Leomund's Tiny Hut","Leomund's Trap","Levitate","Light","Lightning Bolt","Limited Wish","Liveoak","Locate Creature","Locate Object","Longstrider","Lullaby","Mage Armor","Mage Hand","Magic Circle against Chaos","Magic Circle against Evil","Magic Circle against Good","Magic Circle against Law","Magic Fang","Greater Magic Fang","Magic Jar","Magic Missile","Magic Mouth","Magic Stone","Magic Vestment","Magic Weapon","Greater Magic Weapon","Major Creation","Major Image","Make Whole","Mark of Justice","Maze","Meld into Stone","Melf's Acid Arrow","Mending","Message","Meteor Swarm","Mind Blank","Mind Fog","Minor Creation","Minor Image","Miracle","Mirage Arcana","Mirror Image","Misdirection","Mislead","Modify Memory","Moment of Prescience","Mordenkainen's Disjunction","Mordenkainen's Faithful Hound","Mordenkainen's Lucubration","Mordenkainen's Magnificent Mansion","Mordenkainen's Private Sanctum","Mordenkainen's Sword","Mount","Move Earth","Neutralize Poison","Nightmare","Nondetection","Nystul's Magic Aura","Obscure Object","Obscuring Mist","Open/Close","Order's Wrath","Otiluke's Freezing Sphere","Otiluke's Resilient Sphere","Otiluke's Telekinetic Sphere","Otto's Irresistable Dance","Overland Flight","Owl's Wisdom","Mass Owl's Wisdom","Passwall","Pass without Trace","Permanency","Permanent Image","Persistent Image","Phantasmal Killer","Phantom Steed","Phase Door","Planar Ally","Greater Planar Ally","Lesser Planar Ally","Planar Binding","Greater Planar Binding","Lesser Planar Binding","Plane Shift","Plant Growth","Poison","Polar Ray","Polymorph","Polymorph Any Object","Power Word Blind","Power Word Kill","Power Word Stun","Prayer","Prestidigitation","Prismatic Sphere","Prismatic Spray","Prismatic Wall","Produce Flame","Programmed Image","Project Image","Protection from Arrows","Protection from Chaos","Protection from Energy","Protection from Evil","Protection from Good","Protection from Law","Protection from Spells","Prying Eyes","Greater Prying Eyes","Purify Food and Drink","Pyrotechnics","Quench","Rage","Rainbow Pattern","Raise Dead","Rary's Mnemonic Enhancer","Rary's Telepathic Bond","Ray of Enfeeblement","Ray of Exhaustion","Ray of Frost","Read Magic","Reduce Animal","Reduce Person","Mass Reduce Person","Refuge","Regenerate","Reincarnate","Remove Blindness/Deafness","Remove Curse","Remove Disease","Remove Fear","Remove Paralysis","Repel Metal or Stone","Repel Vermin","Repel Wood","Repulsion","Resistance","Resist Energy","Restoration","Greater Restoration","Lesser Restoration","Resurrection","Reverse Gravity","Righteous Might","Rope Trick","Rusting Grasp","Sanctuary","Scare","Scintillating Pattern","Scorching Ray","Screen","Scrying","Greater Scrying","Sculpt Sound","Searing Light","Secret Page","See Invisibility","Seeming","Sending","Sepia Snake Sigil","Sequester","Shades","Shadow Conjuration","Greater Shadow Conjuration","Shadow Evocation","Greater Shadow Evocation","Shadow Walk","Shambler","Shapechange","Shatter","Shield","Shield of Faith","Shield of Law","Shield Other","Shillelagh","Shocking Grasp","Shout","Greater Shout","Shrink Item","Silence","Silent Image","Simulacrum","Slay Living","Sleep","Sleet Storm","Slow","Snare","Soften Earth and Stone","Solid Fog","Song of Discord","Soul Bind","Sound Burst","Speak with Animals","Speak with Dead","Speak with Plants","Spectral Hand","Spell Immunity","Greater Spell Immunity","Spell Resistance","Spellstaff","Spell Turning","Spider Climb","Spike Growth","Spike Stones","Spiritual Weapon","Statue","Status","Stinking Cloud","Stone Shape","Stoneskin","Stone Tell","Stone to Flesh","Storm of Vengeance","Suggestion","Mass Suggestion","Summon Instrument","Summon Monster I","Summon Monster II","Summon Monster III","Summon Monster IV","Summon Monster V","Summon Monster VI","Summon Monster VII","Summon Monster VIII","Summon Monster IX","Summon Nature's Ally I","Summon Nature's Ally II","Summon Nature's Ally III","Summon Nature's Ally IV","Summon Nature's Ally V","Summon Nature's Ally VI","Summon Nature's Ally VII","Summon Nature's Ally VIII","Summon Nature's Ally IX","Summon Swarm","Sunbeam","Sunburst","Symbol of Death","Symbol of Fear","Symbol of Insanity","Symbol of Pain","Symbol of Persuasion","Symbol of Sleep","Symbol of Stunning","Symbol of Weakness","Sympathetic Vibration","Sympathy","Tasha's Hideous Laughter","Telekinesis","Teleport","Teleport Object","Greater Teleport","Teleportation Circle","Temporal Stasis","Tenser's Floating Disk","Tesnser's Transformation","Time Stop","Tongues","Touch of Fatigue","Touch of Idiocy","Transmute Metal to Wood","Transmute Mud to Rock","Transmute Rock to Mud","Transport via Plants","Trap the Soul","Tree Shape","Tree Stride","True Resurrection","True Seeing","True Strike","Undeath to Death","Undetectable Alignment","Unhallow","Unholy Aura","Unholy Blight","Unseen Servant","Vampiric Touch","Veil","Ventriloquism","Virtue","Vision","Wail of the Banshee","Wall of Fire","Wall of Force","Wall of Ice","Wall of Iron","Wall of Stone","Wall of Thorns","Warp Wood","Water Breathing","Water Walk","Waves of Exhaustion","Waves of Fatigue","Web","Weird","Whirlwind","Whispering Wind","Wind Walk","Wind Wall","Wish","Wood Shape","Word of Chaos","Word of Recall","Zone of Silence","Zone of Truth"];
}

function getSpellLevel(charClass){
	switch (charClass){
		case "Bard":
			return [
				//A
				-1,-1,-1,-1,1,-1,2,6,-1,2,-1,2,-1,6,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//B 29
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,2,4,-1,-1,-1,
				//C 55
				-1,-1,-1,2,2,6,1,-1,-1,-1,-1,3,6,1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,3,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,-1,1,5,-1,2,6,3,-1,-1,
				//D 113
				0,2,-1,3,0,2,-1,-1,-1,3,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,4,1,-1,2,-1,-1,4,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,3,5,3,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,5,
				//E 169
				2,6,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,1,-1,-1,-1,1,-1,6,
				//F 188
				-1,-1,-1,5,3,1,-1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,2,6,-1,4,
				//G 218
				3,-1,6,3,-1,0,-1,-1,3,2,-1,-1,-1,-1,-1,3,1,-1,-1,-1,
				//H 238
				-1,4,-1,-1,3,-1,-1,-1,-1,-1,6,2,5,-1,-1,-1,4,-1,2,-1,-1,-1,-1,-1,-1,-1,2,1,
				//I-K 266
				-1,1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,4,-1,-1,3,-1,-1,-1,-1,-1,0,
				//L 296
				4,-1,4,3,-1,-1,0,-1,-1,-1,4,2,-1,0,
				//M 310
				-1,0,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,0,0,-1,-1,5,-1,2,-1,5,2,2,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//N-O 354
				4,5,-1,1,1,-1,0,-1,-1,-1,-1,6,-1,-1,-1,
				//P-Q 369
				-1,-1,-1,6,5,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,6,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,
				//R 412
				2,4,-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,3,-1,1,-1,-1,4,-1,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//S 446
				-1,2,-1,-1,-1,3,6,3,-1,3,3,5,-1,3,-1,-1,4,-1,5,-1,5,-1,-1,2,-1,-1,-1,-1,-1,-1,4,6,-1,2,1,-1,-1,1,-1,3,-1,-1,-1,5,-1,2,3,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,0,1,2,3,4,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,-1,
				//T-V 547
				1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,1,-1,6,1,-1,-1,
				//W-Z 581
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,4,-1
				// 605
				];
			break;

		case "Cleric":
			return [
				//A-C
				-1,-1,2,4,-1,2,-1,-1,-1,-1,-1,-1,3,6,-1,-1,6,8,-1,-1,-1,-1,-1,-1,-1,9,5,2,-1,
				//B 29
				-1,1,6,-1,2,6,3,-1,-1,-1,-1,-1,-1,6,7,1,1,-1,-1,3,-1,-1,5,2,6,-1,
				//C 55
				-1,-1,-1,2,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,-1,-1,-1,1,5,-1,-1,5,-1,1,-1,-1,-1,2,-1,3,-1,3,-1,-1,4,7,-1,3,8,6,0,-1,-1,4,8,1,5,0,2,6,3,7,1,
				//D 113
				-1,2,-1,3,-1,-1,2,4,1,-1,3,2,-1,-1,2,7,-1,1,1,1,1,0,0,-1,-1,-1,-1,1,7,-1,4,8,-1,4,8,-1,-1,4,5,5,5,5,3,6,-1,-1,5,4,1,4,-1,-1,-1,1,-1,-1,
				//E 169
				2,6,8,-1,1,9,-1,-1,-1,-1,2,1,-1,7,9,-1,-1,-1,-1,
				//F 188
				-1,-1,-1,-1,-1,-1,-1,6,2,-1,-1,-1,8,-1,-1,-1,-1,5,-1,-1,-1,-1,-1,6,-1,-1,-1,-1,-1,4,
				//G 218
				-1,9,6,-1,2,-1,-1,4,-1,-1,-1,-1,3,6,-1,-1,-1,-1,0,-1,
				//H 238
				5,-1,-1,6,-1,6,9,-1,-1,3,6,-1,-1,-1,1,-1,-1,-1,2,-1,-1,8,-1,-1,7,-1,-1,-1,
				//I-K 266
				-1,-1,-1,-1,4,9,-1,-1,4,8,1,5,0,2,6,3,7,-1,5,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,
				//L 296
				-1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,3,-1,-1,
				//M 310
				-1,-1,3,3,3,3,-1,-1,-1,-1,-1,1,3,1,4,-1,-1,2,5,-1,3,-1,0,-1,-1,-1,-1,-1,-1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//N-O 354
				4,-1,-1,-1,3,1,-1,-1,-1,-1,-1,-1,-1,2,6,
				//P-Q 369
				-1,-1,-1,-1,-1,-1,-1,-1,6,8,4,-1,-1,-1,5,-1,4,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,1,3,1,1,1,-1,-1,-1,0,-1,-1,
				//R 412
				-1,-1,5,-1,-1,-1,-1,-1,0,-1,-1,-1,7,7,-1,3,3,3,1,2,-1,4,-1,7,0,2,4,7,2,7,-1,5,-1,-1,
				//S 446
				1,-1,-1,-1,-1,5,7,-1,3,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,1,8,2,-1,-1,-1,-1,-1,2,-1,-1,5,-1,-1,-1,-1,-1,-1,-1,9,2,-1,3,-1,-1,4,8,5,-1,-1,-1,-1,-1,2,-1,2,-1,3,-1,-1,-1,9,-1,-1,-1,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,6,8,5,6,5,7,7,-1,-1,
				//T-V 547
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,-1,6,2,5,8,-1,-1,-1,-1,-1,0,-1,
				//W-Z 581
				-1,-1,-1,-1,-1,5,-1,-1,3,3,-1,-1,-1,-1,-1,-1,6,3,-1,-1,7,6,-1,2
				// 605
				];
			break;
		case "Druid":
			return [
				//A-C
				-1,-1,-1,4,-1,-1,-1,-1,5,2,8,2,-1,-1,7,-1,6,-1,9,4,-1,-1,-1,-1,-1,-1,5,-1,5,5,-1,-1,2,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,2,6,-1,3,5,1,-1,2,6,-1,-1,7,-1,1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,5,-1,-1,-1,-1,-1,-1,3,-1,-1,8,-1,4,7,5,-1,-1,-1,0,7,-1,5,9,1,6,0,3,7,4,8,-1,
				//D 113
				-1,-1,-1,3,-1,-1,-1,5,-1,-1,-1,2,-1,-1,-1,-1,1,-1,-1,-1,-1,0,0,-1,-1,1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,6,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,
				//E 169
				-1,-1,8,9,1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//F 188
				-1,1,-1,-1,-1,-1,-1,6,-1,8,6,-1,7,2,-1,-1,2,4,2,0,-1,-1,2,-1,-1,9,-1,-1,-1,4,
				//G 218
				-1,-1,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,0,2,
				//H 238
				5,-1,-1,-1,-1,7,-1,-1,2,-1,-1,-1,-1,1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//I-K 266
				4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,-1,-1,-1,-1,-1,-1,6,1,-1,-1,0,
				//L 296
				-1,-1,-1,-1,-1,-1,0,-1,-1,6,-1,-1,1,-1,
				//M 310
				-1,-1,-1,-1,-1,-1,1,3,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6,
				//N-O 354
				3,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,2,6,
				//P-Q 369
				-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,0,-1,3,
				//R 412
				-1,-1,-1,-1,-1,-1,-1,-1,0,2,-1,-1,-1,9,4,-1,-1,3,-1,-1,8,4,6,-1,0,2,-1,-1,2,-1,8,-1,-1,4,
				//S 446
				-1,-1,-1,-1,-1,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,9,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,3,2,-1,-1,-1,-1,1,-1,3,-1,-1,-1,-1,6,-1,2,3,4,-1,-1,-1,-1,3,5,6,-1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,3,4,5,6,7,8,9,2,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,
				//T-V 547
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,5,5,6,-1,2,5,-1,7,-1,-1,-1,5,-1,-1,-1,-1,-1,-1,0,-1,
				//W-Z 581
				-1,5,-1,-1,-1,6,5,2,3,-1,-1,-1,-1,-1,8,-1,7,3,-1,2,-1,8,-1,-1
				// 605
				];
			break;
		case "Paladin":
			return [
				//A-C
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,1,1,-1,-1,-1,-1,4,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,3,-1,4,-1,-1,
				//D 113
				-1,-1,-1,3,-1,-1,-1,4,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,4,4,-1,-1,3,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,
				//E 169
				2,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//F 188
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//G 218
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//H 238
				-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,-1,-1,-1,-1,
				//I-K 266
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//L 296
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//M 310
				-1,-1,3,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//N-O 354
				4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,
				//P-Q 369
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,
				//R 412
				-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,3,3,-1,-1,2,-1,-1,-1,-1,1,2,4,-1,1,-1,-1,-1,-1,-1,
				//S 446
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//T-V 547
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,1,-1,
				//W-Z 581
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2
				// 605
				];
			break;
		case "Ranger":
			return [
				//A-C
				-1,-1,-1,-1,1,-1,-1,-1,4,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,2,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,3,-1,4,-1,-1,
				//D 113
				-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,1,-1,-1,1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//E 169
				-1,-1,-1,-1,1,-1,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//F 18
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,
				//G 218
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//H 238
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//I-K 266
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,
				//L 296
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,
				//M 310
				-1,-1,-1,-1,-1,-1,1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//N-O 354
				3,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,
				//P-Q 369
				-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//R 412
				-1,-1,-1,-1,-1,-1,-1,-1,1,3,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,3,-1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,
				//S 446
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,1,-1,2,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//T-V 547
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//W-Z 581
				-1,-1,-1,-1,-1,-1,-1,-1,-1,3,-1,-1,-1,-1,-1,-1,-1,2,-1,-1,-1,-1,-1,-1
				// 605
				];
			break;
		case "Sorcerer":
			return [
				//A-C
				6,0,-1,-1,1,-1,2,6,5,-1,-1,-1,4,-1,-1,1,-1,6,8,-1,4,2,0,3,7,9,-1,-1,-1,5,-1,7,-1,2,6,4,8,9,6,7,5,8,-1,-1,-1,-1,-1,5,2,3,2,5,2,6,1,-1,-1,-1,-1,2,6,1,6,-1,-1,-1,4,8,1,-1,1,6,3,-1,8,5,1,-1,-1,-1,2,-1,-1,1,5,4,-1,-1,5,4,6,2,-1,7,6,7,-1,-1,8,6,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//D 113
				0,2,2,3,0,2,-1,-1,-1,3,-1,-1,7,8,-1,-1,-1,-1,-1,-1,-1,0,0,4,1,-1,2,1,-1,4,4,8,-1,-1,8,1,6,5,-1,-1,-1,-1,3,6,3,0,-1,-1,-1,-1,-1,9,5,-1,7,5,
				//E 169
				2,6,-1,-1,1,9,4,1,4,-1,-1,-1,1,7,9,4,1,3,6,
				//F 188
				5,-1,2,5,4,1,5,-1,-1,7,-1,4,-1,4,3,3,-1,-1,2,0,6,3,2,-1,7,9,2,6,9,-1,
				//G 218
				3,9,6,4,3,0,2,-1,-1,2,6,4,-1,-1,-1,-1,1,6,-1,2,
				//H 238
				-1,4,3,-1,3,-1,-1,-1,-1,-1,-1,3,6,-1,-1,-1,5,9,3,7,1,-1,-1,-1,-1,8,2,1,
				//I-K 266
				4,1,3,4,-1,-1,9,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,-1,2,4,7,-1,3,8,-1,1,3,2,-1,
				//L 296
				6,5,4,3,2,2,0,3,7,-1,4,2,-1,-1,
				//M 310
				1,0,3,3,3,3,-1,-1,5,1,2,-1,-1,1,3,5,3,-1,-1,8,-1,2,0,0,9,8,5,4,2,-1,5,2,2,6,-1,8,9,5,-1,7,5,7,1,6,
				//N-O 354
				-1,5,3,1,2,1,0,-1,6,4,8,8,5,2,6,
				//P-Q 369
				5,-1,5,6,5,4,3,7,-1,-1,-1,6,8,5,7,-1,-1,8,4,8,7,9,8,-1,0,9,7,8,-1,6,7,2,1,3,1,1,1,8,5,8,-1,2,-1,
				//R 412
				3,4,-1,-1,5,1,3,0,0,-1,1,4,9,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,6,0,2,-1,-1,-1,-1,7,-1,2,-1,
				//S 446
				-1,2,8,2,8,4,7,-1,-1,3,2,5,5,3,7,9,4,7,5,8,6,-1,9,2,1,-1,-1,-1,-1,1,4,8,3,-1,1,7,-1,1,3,3,-1,-1,4,-1,9,-1,-1,-1,-1,2,-1,-1,-1,-1,7,2,-1,-1,-1,7,-1,3,4,4,-1,6,-1,3,6,-1,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,8,8,6,8,5,6,5,7,7,-1,8,
				//T-V 547
				2,5,5,7,7,9,8,1,6,9,3,0,2,-1,5,5,-1,8,-1,-1,-1,6,1,6,-1,-1,-1,-1,1,3,6,1,-1,7,
				//W-Z 581
				9,4,5,4,6,5,-1,-1,3,-1,7,5,2,9,-1,2,-1,3,9,-1,-1,-1,-1,-1
				// 605
				];
			break;
		case "Wizard":
			return [
				//A-C
				6,0,-1,-1,1,-1,2,6,5,-1,-1,-1,4,-1,-1,1,-1,6,8,-1,4,2,0,3,7,9,-1,-1,-1,5,-1,7,-1,2,6,4,8,9,6,7,5,8,-1,-1,-1,-1,-1,5,2,3,2,5,2,6,1,-1,-1,-1,-1,2,6,1,6,-1,-1,-1,4,8,1,-1,1,6,3,-1,8,5,1,-1,-1,-1,2,-1,-1,1,5,4,-1,-1,5,4,6,2,-1,7,6,7,-1,-1,8,6,-1,-1,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				//D 113
				0,2,2,3,0,2,-1,-1,-1,3,-1,-1,7,8,-1,-1,-1,-1,-1,-1,-1,0,0,4,1,-1,2,1,-1,4,4,8,-1,-1,8,1,6,5,-1,-1,-1,-1,3,6,3,0,-1,-1,-1,-1,-1,9,5,-1,7,5,
				//E 169
				2,6,-1,-1,1,9,4,1,4,-1,-1,-1,1,7,9,4,1,3,6,
				//F 188
				5,-1,2,5,4,1,5,-1,-1,7,-1,4,-1,4,3,3,-1,-1,2,0,6,3,2,-1,7,9,2,6,9,-1,
				//G 218
				3,9,6,4,3,0,2,-1,-1,2,6,4,-1,-1,-1,-1,1,6,-1,2,
				//H 238
				-1,4,3,-1,3,-1,-1,-1,-1,-1,-1,3,6,-1,-1,-1,5,9,3,7,1,-1,-1,-1,-1,8,2,1,
				//I-K 266
				4,1,3,4,-1,-1,9,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,-1,2,4,7,-1,3,8,-1,1,3,2,-1,
				//L 296
				6,5,4,3,2,2,0,3,7,-1,4,2,-1,-1,
				//M 310
				1,0,3,3,3,3,-1,-1,5,1,2,-1,-1,1,3,5,3,-1,-1,8,-1,2,0,0,9,8,5,4,2,-1,5,2,2,6,-1,8,9,5,6,7,5,7,1,6,
				//N-O 354
				-1,5,3,1,2,1,0,-1,6,4,8,8,5,2,6,
				//P-Q 369
				5,-1,5,6,5,4,3,7,-1,-1,-1,6,8,5,7,-1,-1,8,4,8,7,9,8,-1,0,9,7,8,-1,6,7,2,1,3,1,1,1,8,5,8,-1,2,-1,
				//R 412
				3,4,-1,4,5,1,3,0,0,-1,1,4,9,-1,-1,-1,4,-1,-1,-1,-1,-1,-1,6,0,2,-1,-1,-1,-1,7,-1,2,-1,
				//S 446
				-1,2,8,2,8,4,7,-1,-1,3,2,5,5,3,7,9,4,7,5,8,6,-1,9,2,1,-1,-1,-1,-1,1,4,8,3,-1,1,7,-1,1,3,3,-1,-1,4,-1,9,-1,-1,-1,-1,2,-1,-1,-1,-1,7,2,-1,-1,-1,7,-1,3,4,4,-1,6,-1,3,6,-1,1,2,3,4,5,6,7,8,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,-1,8,8,6,8,5,6,5,7,7,-1,8,
				//T-V 547
				2,5,5,7,7,9,8,1,6,9,3,0,2,-1,5,5,-1,8,-1,-1,-1,6,1,6,-1,-1,-1,-1,1,3,6,1,-1,7,
				//W-Z 581
				9,4,5,4,6,5,-1,-1,3,-1,7,5,2,9,-1,2,-1,3,9,-1,-1,-1,-1,-1
				// 605
				];
			break;
	}
}

function getSpellsKnown(level,charClass){
	switch (charClass){
		case "Bard":
			spellsKnown = [
				[4,0,0,0,0,0,0],
				[5,2,0,0,0,0,0],
				[6,3,0,0,0,0,0],
				[6,3,2,0,0,0,0],
				[6,4,3,0,0,0,0],
				[6,4,3,0,0,0,0],
				[6,4,4,2,0,0,0],
				[6,4,4,3,0,0,0],
				[6,4,4,3,0,0,0],
				[6,4,4,4,2,0,0],
				[6,4,4,4,3,0,0],
				[6,4,4,4,3,0,0],
				[6,4,4,4,4,2,0],
				[6,4,4,4,4,3,0],
				[6,4,4,4,4,3,0],
				[6,5,4,4,4,4,2],
				[6,5,5,4,4,4,3],
				[6,5,5,5,4,4,3],
				[6,5,5,5,5,4,4],
				[6,5,5,5,5,5,4]
			];
			break;
		case "Sorcerer":
			spellsKnown = [
				[4,2,0,0,0,0,0,0,0,0],
				[5,2,0,0,0,0,0,0,0,0],
				[5,3,0,0,0,0,0,0,0,0],
				[6,3,1,0,0,0,0,0,0,0],
				[6,4,2,0,0,0,0,0,0,0],
				[7,4,2,1,0,0,0,0,0,0],
				[7,5,3,2,0,0,0,0,0,0],
				[8,5,3,2,1,0,0,0,0,0],
				[8,5,4,3,2,0,0,0,0,0],
				[9,5,4,3,2,1,0,0,0,0],
				[9,5,5,4,3,2,0,0,0,0],
				[9,5,5,4,3,2,1,0,0,0],
				[9,5,5,4,4,3,2,0,0,0],
				[9,5,5,4,4,3,2,1,0,0],
				[9,5,5,4,4,4,3,2,0,0],
				[9,5,5,4,4,4,3,2,1,0],
				[9,5,5,4,4,4,3,3,2,0],
				[9,5,5,4,4,4,3,3,2,1],
				[9,5,5,4,4,4,3,3,3,2],
				[9,5,5,4,4,4,3,3,3,3]
			];
			break;
		default:
			return [];
	}
	return spellsKnown[level-1];
}

function getSpellsPerDay(level,charClass){
	switch(charClass){
		case "Bard":
			spellsPerDay = [
				[2,-1,-1,-1,-1,-1,-1],
				[3,0,-1,-1,-1,-1,-1],
				[3,1,-1,-1,-1,-1,-1],
				[3,2,0,-1,-1,-1,-1],
				[3,3,1,-1,-1,-1,-1],
				[3,3,2,-1,-1,-1,-1],
				[3,3,2,0,-1,-1,-1],
				[3,3,3,1,-1,-1,-1],
				[3,3,3,2,-1,-1,-1],
				[3,3,3,2,0,-1,-1],
				[3,3,3,3,1,-1,-1],
				[3,3,3,3,2,-1,-1],
				[3,3,3,3,2,0,-1],
				[4,3,3,3,3,1,-1],
				[4,4,3,3,3,2,-1],
				[4,4,4,3,3,2,0],
				[4,4,4,4,3,3,1],
				[4,4,4,4,4,3,2],
				[4,4,4,4,4,4,3],
				[4,4,4,4,4,4,4]
			];
			break;
		case "Cleric":
			spellsPerDay = [
				[3,1,-1,-1,-1,-1,-1,-1,-1,-1],
				[4,2,-1,-1,-1,-1,-1,-1,-1,-1],
				[4,2,1,-1,-1,-1,-1,-1,-1,-1],
				[5,3,2,-1,-1,-1,-1,-1,-1,-1],
				[5,3,2,1,-1,-1,-1,-1,-1,-1],
				[5,3,3,1,-1,-1,-1,-1,-1,-1],
				[6,4,3,2,1,-1,-1,-1,-1,-1],
				[6,4,3,3,2,-1,-1,-1,-1,-1],
				[6,4,4,3,2,1,-1,-1,-1,-1],
				[6,4,4,3,3,2,-1,-1,-1,-1],
				[6,5,4,4,3,1,1,-1,-1,-1],
				[6,5,4,4,3,3,2,-1,-1,-1],
				[6,5,5,4,4,3,2,1,-1,-1],
				[6,5,5,4,4,3,3,2,-1,-1],
				[6,5,5,5,4,4,3,2,1,-1],
				[6,5,5,5,4,4,3,3,2,-1],
				[6,5,5,5,5,4,4,3,2,1],
				[6,5,5,5,5,4,4,3,3,2],
				[6,5,5,5,5,5,4,4,3,3],
				[6,5,5,5,5,5,4,4,4,4]
			];
			break;

		case "Druid":
			spellsPerDay = [
				[3,1,-1,-1,-1,-1,-1,-1,-1,-1],
				[4,2,-1,-1,-1,-1,-1,-1,-1,-1],
				[4,2,1,-1,-1,-1,-1,-1,-1,-1],
				[5,3,2,-1,-1,-1,-1,-1,-1,-1],
				[5,3,2,1,-1,-1,-1,-1,-1,-1],
				[5,3,3,1,-1,-1,-1,-1,-1,-1],
				[6,4,3,2,1,-1,-1,-1,-1,-1],
				[6,4,3,3,2,-1,-1,-1,-1,-1],
				[6,4,4,3,2,1,-1,-1,-1,-1],
				[6,4,4,3,3,2,-1,-1,-1,-1],
				[6,5,4,4,3,1,1,-1,-1,-1],
				[6,5,4,4,3,3,2,-1,-1,-1],
				[6,5,5,4,4,3,2,1,-1,-1],
				[6,5,5,4,4,3,3,2,-1,-1],
				[6,5,5,5,4,4,3,2,1,-1],
				[6,5,5,5,4,4,3,3,2,-1],
				[6,5,5,5,5,4,4,3,2,1],
				[6,5,5,5,5,4,4,3,3,2],
				[6,5,5,5,5,5,4,4,3,3],
				[6,5,5,5,5,5,4,4,4,4]
			];
			break;

		case "Paladin":
			spellsPerDay = [
				[-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1],
				[-1,0,-1,-1,-1],
				[-1,0,-1,-1,-1],
				[-1,1,-1,-1,-1],
				[-1,1,-1,-1,-1],
				[-1,1,0,-1,-1],
				[-1,1,0,-1,-1],
				[-1,1,1,-1,-1],
				[-1,1,1,0,-1],
				[-1,1,1,1,-1],
				[-1,1,1,1,-1],
				[-1,2,1,1,0],
				[-1,2,1,1,1],
				[-1,2,2,1,1],
				[-1,2,2,2,1],
				[-1,3,2,2,1],
				[-1,3,3,3,2],
				[-1,3,3,3,3]
			];
			break;

		case "Ranger":
			spellsPerDay = [
				[-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1],
				[-1,-1,-1,-1,-1],
				[-1,0,-1,-1,-1],
				[-1,0,-1,-1,-1],
				[-1,1,-1,-1,-1],
				[-1,1,-1,-1,-1],
				[-1,1,0,-1,-1],
				[-1,1,0,-1,-1],
				[-1,1,1,-1,-1],
				[-1,1,1,0,-1],
				[-1,1,1,1,-1],
				[-1,1,1,1,-1],
				[-1,2,1,1,0],
				[-1,2,1,1,1],
				[-1,2,2,1,1],
				[-1,2,2,2,1],
				[-1,3,2,2,1],
				[-1,3,3,3,2],
				[-1,3,3,3,3]
			];
			break;

		case "Sorcerer":
			spellsPerDay = [
				[5,3,-1,-1,-1,-1,-1,-1,-1,-1],
				[6,4,-1,-1,-1,-1,-1,-1,-1,-1],
				[6,5,-1,-1,-1,-1,-1,-1,-1,-1],
				[6,6,3,-1,-1,-1,-1,-1,-1,-1],
				[6,6,4,-1,-1,-1,-1,-1,-1,-1],
				[6,6,5,3,-1,-1,-1,-1,-1,-1],
				[6,6,6,4,-1,-1,-1,-1,-1,-1],
				[6,6,6,5,3,-1,-1,-1,-1,-1],
				[6,6,6,6,4,-1,-1,-1,-1,-1],
				[6,6,6,6,5,3,-1,-1,-1,-1],
				[6,6,6,6,6,4,-1,-1,-1,-1],
				[6,6,6,6,6,5,3,-1,-1,-1],
				[6,6,6,6,6,6,4,-1,-1,-1],
				[6,6,6,6,6,6,5,3,-1,-1],
				[6,6,6,6,6,6,6,4,-1,-1],
				[6,6,6,6,6,6,6,5,3,-1],
				[6,6,6,6,6,6,6,6,4,-1],
				[6,6,6,6,6,6,6,6,5,3],
				[6,6,6,6,6,6,6,6,6,4],
				[6,6,6,6,6,6,6,6,6,6]
			];
			break;

		case "Wizard":
			spellsPerDay = [
				[3,1,-1,-1,-1,-1,-1,-1,-1,-1],
				[4,2,-1,-1,-1,-1,-1,-1,-1,-1],
				[4,2,1,-1,-1,-1,-1,-1,-1,-1],
				[4,3,2,-1,-1,-1,-1,-1,-1,-1],
				[4,3,2,1,-1,-1,-1,-1,-1,-1],
				[4,3,3,2,-1,-1,-1,-1,-1,-1],
				[4,4,3,2,1,-1,-1,-1,-1,-1],
				[4,4,3,3,2,-1,-1,-1,-1,-1],
				[4,4,4,3,2,1,-1,-1,-1,-1],
				[4,4,4,3,3,2,-1,-1,-1,-1],
				[4,4,4,4,3,2,1,-1,-1,-1],
				[4,4,4,4,3,3,2,-1,-1,-1],
				[4,4,4,4,4,3,2,1,-1,-1],
				[4,4,4,4,4,3,3,2,-1,-1],
				[4,4,4,4,4,4,3,2,1,-1],
				[4,4,4,4,4,4,3,3,2,-1],
				[4,4,4,4,4,4,4,3,2,1],
				[4,4,4,4,4,4,4,4,3,2],
				[4,4,4,4,4,4,4,4,3,3],
				[4,4,4,4,4,4,4,4,4,4]
			];
			break;

		default:
			return [];
	}
	return spellsPerDay[level-1];
}

function getSpellSchool(){
	return [
		//A
		"Conjuration","Conjuration","Enchantment","Transmutation","Abjuration","Transmutation","Transmutation","Divination","Transmutation","Enchantment","Transmutation","Enchantment","Necromancy","Transmutation","Transmutation","Transmutation","Abjuration","Abjuration","Enchantment","Abjuration","Divination","Abjuration","Universal","Divination","Divination","Necromancy","Abjuration","Divination","Transmutation"
		//B 29
		,"Transmutation","Enchantment","Abjuration","Transmutation","Transmutation","Transmutation","Necromancy","Evocation","Evocation","Evocation","Evocation","Evocation","Enchantment","Evocation","Evocation","Enchantment","Transmutation","Transmutation","Necromancy","Necromancy","Transmutation","Illusion","Abjuration","Transmutation","Transmutation","Evocation"
		//C 55
		,"Evocation","Evocation","Enchantment","Enchantment","Transmutation","Transmutation","Necromancy","Evocation","Transmutation","Evocation","Enchantment","Enchantment","Enchantment","Enchantment","Transmutation","Necromancy","Necromancy","Divination","Abjuration","Necromancy","Conjuration","Illusion","Enchantment","Enchantment","Transmutation","Necromancy","Divination","Divination","Divination","Evocation","Enchantment","Enchantment","Evocation","Divination","Necromancy","Evocation","Evocation","Transmutation","Necromancy","Transmutation","Transmutation","Transmutation","Conjuration","Necromancy","Necromancy","Conjuration","Conjuration","Enchantment","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Necromancy"
		//D 113
		,"Evocation","Evocation","Transmutation","Evocation","Enchantment","Enchantment","Necromancy","Necromancy","Necromancy","Enchantment","Evocation","Conjuration","Evocation","Enchantment","Evocation","Necromancy","Divination","Divination","Divination","Divination","Divination","Divination","Divination","Divination","Divination","Divination","Divination","Divination","Evocation","Conjuration","Abjuration","Abjuration","Transmutation","Divination","Divination","Illusion","Transmutation","Abjuration","Abjuration","Abjuration","Abjuration","Abjuration","Abjuration","Abjuration","Illusion","Necromancy","Transmutation","Divination","Evocation","Evocation","Enchantment","Enchantment","Enchantment","Necromancy","Conjuration","Illusion"
		//E 169
		,"Transmutation","Transmutation","Evocation","Conjuration","Abjuration","Necromancy","Necromancy","Transmutation","Transmutation","Transmutation","Enchantment","Abjuration","Transmutation","Transmutation","Transmutation","Conjuration","Transmutation","Abjuration","Necromancy"
		//F 188
		,"Transmutation","Evocation","Necromancy","Illusion","Necromancy","Transmutation","Enchantment","Divination","Divination","Necromancy","Conjuration","Evocation","Evocation","Abjuration","Evocation","Transmutation","Evocation","Evocation","Evocation","Evocation","Transmutation","Transmutation","Conjuration","Abjuration","Evocation","Divination","Transmutation","Transmutation","Abjuration","Abjuration"
		//G 218
		,"Transmutation","Conjuration","Enchantment","Enchantment","Necromancy","Illusion","Necromancy","Transmutation","Transmutation","Conjuration","Abjuration","Abjuration","Abjuration","Abjuration","Transmutation","Enchantment","Conjuration","Abjuration","Divination","Evocation"
		//H 238
		,"Evocation","Illusion","Necromancy","Necromancy","Transmutation","Conjuration","Conjuration","Conjuration","Transmutation","Evocation","Conjuration","Enchantment","Enchantment","Abjuration","Abjuration","Enchantment","Enchantment","Enchantment","Enchantment","Enchantment","Abjuration","Abjuration","Evocation","Evocation","Evocation","Necromancy","Illusion","Enchantment"
		//I-K 266
		,"Evocation","Divination","Illusion","Illusion","Evocation","Evocation","Abjuration","Conjuration","Necromancy","Necromancy","Necromancy","Necromancy","Necromancy","Necromancy","Necromancy","Necromancy","Necromancy","Enchantment","Conjuration","Illusion","Illusion","Illusion","Evocation","Illusion","Transmutation","Transmutation","Transmutation","Transmutation","Transmutation","Divination"
		//L 296
		,"Divination","Conjuration","Conjuration","Evocation","Illusion","Transmutation","Evocation","Evocation","Universal","Transmutation","Divination","Divination","Transmutation","Enchantment"
		//M 310
		,"Conjuration","Transmutation","Abjuration","Abjuration","Abjuration","Abjuration","Transmutation","Transmutation","Necromancy","Evocation","Illusion","Transmutation","Transmutation","Transmutation","Transmutation","Conjuration","Illusion","Transmutation","Necromancy","Conjuration","Transmutation","Conjuration","Transmutation","Transmutation","Evocation","Abjuration","Enchantment","Conjuration","Illusion","Evocation","Illusion","Illusion","Illusion","Illusion","Enchantment","Divination","Abjuration","Conjuration","Transmutation","Conjuration","Abjuration","Evocation","Conjuration","Transmutation"
		//N-O 354
		,"Conjuration","Illusion","Abjuration","Illusion","Abjuration","Conjuration","Transmutation","Evocation","Evocation","Evocation","Evocation","Enchantment","Transmutation","Transmutation","Transmutation"
		//P-Q 369
		,"Transmutation","Transmutation","Universal","Illusion","Illusion","Illusion","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Transmutation","Necromancy","Evocation","Transmutation","Transmutation","Enchantment","Enchantment","Enchantment","Enchantment","Universal","Abjuration","Evocation","Abjuration","Evocation","Illusion","Illusion","Abjuration","Abjuration","Abjuration","Abjuration","Abjuration","Abjuration","Abjuration","Divination","Divination","Transmutation","Transmutation","Transmutation"
		//R 412
		,"Enchantment","Illusion","Conjuration","Transmutation","Divination","Necromancy","Necromancy","Evocation","Divination","Transmutation","Transmutation","Transmutation","Conjuration","Conjuration","Transmutation","Conjuration","Abjuration","Conjuration","Abjuration","Conjuration","Abjuration","Abjuration","Transmutation","Abjuration","Abjuration","Abjuration","Conjuration","Conjuration","Conjuration","Conjuration","Transmutation","Transmutation","Transmutation","Transmutation"
		//S 446
		,"Abjuration","Necromancy","Illusion","Evocation","Illusion","Divination","Divination","Transmutation","Evocation","Transmutation","Divination","Illusion","Evocation","Conjuration","Abjuration","Illusion","Illusion","Illusion","Illusion","Illusion","Illusion","Conjuration","Transmutation","Evocation","Abjuration","Abjuration","Abjuration","Abjuration","Transmutation","Evocation","Evocation","Evocation","Transmutation","Illusion","Illusion","Illusion","Necromancy","Enchantment","Conjuration","Transmutation","Transmutation","Transmutation","Conjuration","Enchantment","Necromancy","Evocation","Divination","Necromancy","Divination","Necromancy","Abjuration","Abjuration","Abjuration","Transmutation","Abjuration","Transmutation","Transmutation","Transmutation","Evocation","Transmutation","Divination","Conjuration","Transmutation","Abjuration","Divination","Transmutation","Conjuration","Enchantment","Enchantment","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Conjuration","Evocation","Evocation","Necromancy","Necromancy","Enchantment","Necromancy","Enchantment","Enchantment","Enchantment","Necromancy","Evocation","Enchantment"
		//T-V 547
		,"Enchantment","Transmutation","Conjuration","Conjuration","Conjuration","Conjuration","Transmutation","Evocation","Transmutation","Transmutation","Divination","Necromancy","Enchantment","Transmutation","Transmutation","Transmutation","Conjuration","Conjuration","Transmutation","Conjuration","Conjuration","Divination","Divination","Necromancy","Abjuration","Evocation","Abjuration","Evocation","Conjuration","Necromancy","Illusion","Illusion","Transmutation","Divination"
		//W-Z 581
		,"Necromancy","Evocation","Evocation","Evocation","Conjuration","Conjuration","Conjuration","Transmutation","Transmutation","Transmutation","Necromancy","Necromancy","Conjuration","Illusion","Evocation","Transmutation","Transmutation","Evocation","Universal","Transmutation","Evocation","Conjuration","Illusion","Enchantment"
		// 605
	];
}

function getSpellSubschool(){
	return [
		//A
		"Creation","Creation","Compulsion","","","","","","","Compulsion","","Compulsion","","","","","","","Compulsion","","Scrying","","","","","","","",""
		//B 29
		,"","Compulsion","","","","","","","","","","Compulsion","","","Compulsion","","","","","","Glamer","","","","",""
		//C 55
		,"","","Compulsion","Compulsion","","","","","","","Charm","Charm","Charm","Charm","","","","Scrying","","","Creation","Pattern","Compulsion","Compulsion","","","","","","","Compulsion","Compulsion","","","","","","","","","","","Creation","","","Creation","Summoning","Compulsion","Healing","Healing","Healing","Healing","Healing","Healing","Healing","Healing","Healing",""
		//D 113
		,"","","","","Compulsion","Compulsion","","","","Compulsion","","Healing","","Compulsion","","","","","","","","","","","","","","","","Telportation","","","","","","Glamer","","","","","","","","","Glamer","","","","","","Compulsion","Compulsion","Compulsion","","Summoning","Phantasm"
		//E 169
		,"","","","Summoning","","","","","","","Charm","","","","","Creation","","",""
		//F 188
		,"","","","Glamer","","","Compulsion","","","","Creation","","","","","","","","","","","","Creation","","","","","","",""
		//G 218
		,"","Creation or Calling","Compulsion","Compulsion","","Figment","","","","Creation","","","","","","Compulsion","Creation","","",""
		//H 238
		,"","Glamer","","","","Healing","Healing","Healing","","","","Compulsion","Compulsion","","","Compulsion","Compulsion","Compulsion","Compulsion","Compulsion","","","","","","","Pattern","Compulsion"
		//I-K 266
		,"","","Phantasm","Figment","","","","Creation","","","","","","","","","","Compulsion","Summoning","Glamer","Glamer","Glamer","","Glamer","","","","","",""
		//L 296
		,"","Summoning","Creation","","Glamer","","","","","","","","","Compulsion"
		//M 310
		,"Creation","","","","","","","","","","Glamer","","","","","Creation","Figment","","","Teleportation","","Creation","","","","","Compulsion","Creation","Figment","","Glamer","Figment","Glamer","Figment,Glamer","Compulsion","","","Creation","","Creation","","","Summoning",""
		//N-O 354
		,"Healing","Phantasm","","Glamer","","Creation","","","","","","Compulsion","","",""
		//P-Q 369
		,"","","","Figment","Figment","Phantasm","Creation","Creation","Calling","Calling","Calling","Calling","Calling","Calling","Teleportation","","","","","","Compulsion","Compulsion","Compulsion","Compulsion","","","","","","Figment","Shadow","","","","","","","","","","","",""
		//R 412
		,"Compulsion","Pattern","Healing","","","","","","","","","","Teleportation","Healing","","Healing","","Healing","","Healing","","","","","","","Healing","Healing","Healing","Healing","","","",""
		//S 446
		,"","","Pattern","","Glamer","Scrying","Scrying","","","","","Glamer","","Creation","","Shadow","Shadow","Shadow","Shadow","Shadow","Shadow","Creation","","","","","","","","","","","","Glamer","Figment","Shadow","","Compulsion","Creation","","","","Creation","Compulsion","","","","","","","","","","","","","","","","","","Creation","","","","","Summoning","Compulsion","Compulsion","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","Summoning","","","","","Compulsion","","Charm","Compulsion","Compulsion","","","Compulsion"
		//T-V 547
		,"Compulsion","","Teleportation","Teleportation","Teleportation","Teleportation","","","","","","","Compulsion","","","","Teleportation","Summoning","","Teleportation","Healing","","","","","","","","Creation","","Glamer","Figment","",""
		//W-Z 581
		,"","","","","Creation","Creation","Creation","","","","","","Creation","Phantasm","","","","","","","","Teleportation","Glamer","Compulsion"
		// 605
	];
}

function getSpellDescriptor(){
	return [
		//A
		["Acid"],["Acid"],["Mind-Affecting"],["Air"],[],[],[],[],[],["Mind-Affecting"],[],["Mind-Affecting","Sonic"],["Evil"],[],[],[],[],[],["Mind-Affecting"],[],[],[],[],[],[],[],[],[],[]
		//B 29
		,[],["Fear","Mind-Affecting"],[],[],[],[],[],["Force"],["Force"],["Force"],["Force"],["Force"],["Mind-Affecting"],["Force"],["Evil","Sonic"],["Mind-Affecting"],["Good"],[],[],[],[],[],[],[],[],["Fire"]
		//C 55
		,["Electricity"],["Electricity"],["Mind-Affecting"],["Mind-Affecting"],[],[],["Fear","Mind-Affecting"],["Electricity"],[],["Chaotic"],["Mind-Affecting"],["Mind-Affecting"],["Mind-Affecting"],["Mind-Affecting"],["Cold"],[],["Death"],[],["Chaotic"],[],[],["Mind-Affecting"],["Language-Dependent","Mind-Affecting"],["Language-Dependent","Mind-Affecting"],[],[],[],[],[],["Cold"],["Mind-Affecting"],["Mind-Affecting"],["Good"],[],["Evil"],[],["Light"],[],[],["Water"],[],["Air"],[],["Evil"],["Evil"],["Water"],[],["Mind-Affecting"],[],[],[],[],[],[],[],[],[],["Evil"]
		//D 113
		,["Light"],["Darkness"],[],["Light"],["Mind-Affecting"],["Mind-Affecting"],["Death","Evil"],[],["Evil"],["Mind-Affecting"],["Darkness"],[],["Fire"],["Mind-Affecting"],["Evil"],["Death"],[],[],[],[],[],[],[],[],[],[],["Mind-Affecting"],[],["Lawful","Sonic"],[],[],[],[],[],[],[],[],[],["Lawful"],["Good"],["Evil"],["Chaotic"],[],[],[],[],[],[],[],[],["Mind-Affecting"],["Mind-Affecting"],["Mind-Affecting"],["Fear","Mind-Affecting"],[],["Mind-Affecting"]
		//E 169
		,[],[],["Earth"],[],[],[],[],[],[],[],["Language-Dependent","Mind-Affecting","Sonic"],[],[],[],[],[],[],["Force"],["Evil"]
		//F 188
		,[],["Light"],[],[],["Fear","Mind-Affecting"],[],["Mind-Affecting"],[],[],["Death"],["Fire"],["Fire or Cold"],["Fire"],["Fire"],["Fire"],["Fire"],["Fire"],["Fire"],["Fire"],["Light"],[],[],[],[],["Force"],[],[],[],[],[]
		//G 218
		,[],[],["Language-Dependent","Mind-Affecting"],["Language-Dependent","Mind-Affecting"],[],[],[],[],[],[],[],[],[],[],[],["Mind-Affecting"],[],[],[],["Air"]
		//H 238
		,["Good"],[],[],[],[],[],[],[],["Fire"],[],["Creation"],["Mind-Affecting"],["Mind-Affecting"],[],[],["Mind-Affecting"],["Mind-Affecting"],["Mind-Affecting"],["Mind-Affecting"],["Mind-Affecting"],[],["Good"],["Good"],["Good"],["Good,Sonic"],[],["Mind-Affecting"],["Mind-Affecting"]
		//I-K 266
		,["Cold"],[],["Mind-Affecting"],[],[],[],[],["Fire"],[],[],[],[],[],[],[],[],[],["Mind-Affecting"],[],[],[],[],[],[],[],[],[],[],[],[]
		//L 296
		,[],[],[],["Force"],[],[],["Light"],["Electricity"],[],[],[],[],[],["Mind-Affecting"]
		//M 310
		,["Force"],[],["Lawful"],["Good"],["Evil"],["Chaotic"],[],[],[],["Force"],[],[],[],[],[],[],[],[],[],[],["Earth"],["Acid"],[],["Language-Dependent"],["Fire"],[],["Mind-Affecting"],[],[],[],[],[],[],[],["Mind-Affecting"],[],[],[],[],[],[],["Force"],[],["Earth"]
		//N-O 354
		,[],["Mind-Affecting","Evil"],[],[],[],[],[],["Lawful"],["Cold"],["Force"],["Force"],["Mind-Affecting"],[],[],[]
		//P-Q 369
		,[],[],[],[],[],["Fear","Mind-Affecting"],[],[],[],[],[],[],[],[],[],[],[],["Cold"],[],[],["Mind-Affecting"],["Death","Mind-Affecting"],["Mind-Affecting"],["Mind-Affecting"],[],[],[],[],["Fire"],[],[],[],["Lawful"],[],["Good"],["Evil"],["Chaotic"],[],[],[],[],[],[]
		//R 412
		,["Mind-Affecting"],["Mind-Affecting"],[],[],[],[],[],["Cold"],[],[],[],[],[],[],[],[],[],[],[],[],["Earth"],[],[],[],[],[],[],[],[],[],[],[],[],[]
		//S 446
		,[],["Fear","Mind-Affecting"],["Mind-Affecting"],["Fire"],[],[],[],[],[],[],[],[],[],["Force"],[],[],[],[],[],[],[],[],[],["Sonic"],["Force"],[],["Lawful"],[],[],["Electricity"],["Sonic"],["Sonic"],[],[],[],[],["Death"],["Mind-Affecting"],["Cold"],[],[],["Earth"],[],["Mind-Affecting","Sonic"],[],["Sonic"],[],["Language-Dependent"],[],[],[],[],[],[],[],[],[],["Earth"],["Force"],[],[],[],["Earth"],[],[],[],[],["Language-Dependent","Mind-Affecting"],["Language-Dependent","Mind-Affecting"],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],["Light"],["Light"],["Death"],["Fear","Mind-Affecting"],["Mind-Affecting"],["Evil"],["Mind-Affecting"],["Mind-Affecting"],["Mind-Affecting"],[],["Sonic"],["Mind-Affecting"]
		//T-V 547
		,["Mind-Affecting"],[],[],[],[],[],[],["Force"],[],[],[],[],["Mind-Affecting"],[],["Earth"],["Earth"],[],[],[],[],[],[],[],[],[],["Evil"],["Evil"],["Evil"],[],[],[],[],[],[]
		//W-Z 581
		,["Death","Sonic"],["Fire"],["Force"],["Cold"],[],["Earth"],[],[],[],["Water"],[],[],[],["Fear","Mind-Affecting"],["Air"],["Air"],["Air"],["Air"],[],[],["Chaotic","Sonic"],[],[],["Mind-Affecting"]
		// 605
	];
}

function getDomainSpells(domain){
	switch (domain){
		case "Air":
			return ["obscuringMist","windWall","gaseousForm","airWalk","controlWinds","chainLightning","controlWeather","whirlwind","elementalSwarm"];
		case "Animal":
			return ["calmAnimals","holdAnimal","dominateAnimal","summonNaturesAllyIV","communeWithNature","antilifeShell","animalShapes","summonNaturesAllyVIII","shapechange"];
		case "Chaos":
			return ["protectionFromLaw","shatter","magicCircleAgainstLaw","chaosHammer","dispelLaw","animateObjects","wordOfChaos","cloakOfChaos","summonMonsterIX"];
		case "Death":
			return ["causeFear","deathKnell","animateDead","deathWard","slayLiving","createUndead","destruction","createGreaterUndead","wailOfTheBanshee"];
		case "Destruction":
			return ["inflictLightWounds","shatter","contagion","inflictCriticalWounds","massInflictLightWounds","harm","disintegrate","earthquake","implosion"];
		case "Earth":
			return ["magicStone","softenEarthAndStone","stoneShape","spikeStones","wallOfStone","stoneskin","earthquake","ironBody","elementalSwarm"];
		case "Evil":
			return ["protectionFromGood","desecrate","magicCircleAgainstGood","unholyBlight","dispelGood","createUndead","blasphemy","unholyAura","summonMonsterIX"];
		case "Fire":
			return ["burningHands","produceFlame","resistEnergy","wallOfFire","fireShield","fireSeeds","fireStorm","incendiaryCloud","elementalSwarm"];
		case "Good":
			return ["protectionFromEvil","aid","magicCircleAgainstEvil","holySmite","dispelEvil","bladeBarrier","holyWord","holyAura","summonMonsterIX"];
		case "Healing":
			return ["cureLightWounds","cureModerateWounds","cureSeriousWounds","cureCriticalWounds","massCureLightWounds","heal","regenerate","massCureCriticalWounds","massHeal"];
		case "Knowledge":
			return ["detectSecretDoors","detectThoughts","clairaudienceClairvoyance","divination","trueSeeing","findThePath","legendLore","discernLocation","foresight"];
		case "Law":
			return ["protectionFromChaos","calmEmotions","magicCircleAgainstChaos","ordersWrath","dispelChaos","holdMonster","dictum","shieldOfLaw","summonMonsterIX"];
		case "Luck":
			return ["entropicShield","aid","protectionFromEnergy","freedomOfMovement","breakEnchantment","mislead","spellTurning","momentOfPrescience","miracle"];
		case "Magic":
			return ["nystulsMagicAura","indentify","dispelMagic","imbueWithSpellAbility","spellResistance","antimagicField","spellTurning","protectionFromSpells","mordenkainensDisjunction"];
		case "Plant":
			return ["entangle","barkskin","plantGrowth","commandPlants","wallOfThorns","repelWood","animatePlants","controlPlants","shambler"];
		case "Protection":
			return ["sanctuary","shieldOther","protectionFromEnergy","spellImmunity","spellResistance","antimagicField","repulsion","mindBlank","prismaticSphere"];
		case "Strength":
			return ["enlargePerson","bullsStrength","magicVestment","spellImmunity","righteousMight","stoneskin","bigbysGraspingHand","bigbysClenchedFist","bigbysCrushingHand"];
		case "Sun":
			return ["endureElements","heatMetal","searingLight","fireShield","flameStrike","fireSeeds","sunbeam","sunburst","prismaticSphere"];
		case "Travel":
			return ["longstrider","locateObject","fly","dimensionDoor","teleport","findThePath","greaterTeleport"];
		case "Trickery":
			return ["disguiseSelf","invisibility","nondetection","confusion","falseVision","mislead","screen","polymorphAnyObject","timeStop"];
		case "War":
			return ["magicWeapon","spiri","magicVestment","divinePower","flameStrike","bladeBarrier","powerWordBlind","powerWordStun","powerWordKill"];
		case "Water":
			return ["obscuringMist","fogCloud","waterBreathing","controlWater","iceStorm","coneOfCold","acidFog","horridWilting","elementalSwarm"];
	}
}

function getDomainSpecial(domain){
	switch (domain){
		case "Air":
			return "Turn or destroy earth creatures as a good cleric turns undead. Rebuke, command, or bolster air creatures as an evil cleric rebukes undead. Use these abilities a total number of times per day equal to 3 + your Charisma modifier. This granted power is a supernatural ability.";
		case "Animal":
			return "You can use speak with animals once per day as a spell-like ability. Add Knowledge (nature) to your list of cleric class skills.";
		case "Chaos":
			return "You cast chaos spells at +1 caster level.";
		case "Death":
			return "You may use a death touch once per day. Your death touch is a supernatural ability that produces a death effect. You must succeed on a melee touch attack against a living creature (using the rules for touch spells). When you touch, roll 1d6 per cleric level you possess. If the total at least equals the creature’s current hit points, it dies (no save).";
		case "Destruction":
			return "You gain the smite power, the supernatural ability to make a single melee attack with a +4 bonus on attack rolls and a bonus on damage rolls equal to your cleric level (if you hit). You must declare the smite before making the attack. This ability is usable once per day.";
		case "Earth":
			return "Turn or destroy air creatures as a good cleric turns undead. Rebuke, command, or bolster earth creatures as an evil cleric rebukes undead. Use these abilities a total number of times per day equal to 3 + your Charisma modifier. This granted power is a supernatural ability.";
		case "Evil":
			return "You cast evil spells at +1 caster level.";
		case "Fire":
			return "Turn or destroy water creatures as a good cleric turns undead. Rebuke, command, or bolster fire creatures as an evil cleric rebukes undead. Use these abilities a total number of times per day equal to 3 + your Charisma modifier. This granted power is a supernatural ability.";
		case "Good":
			return "You cast good spells at +1 caster level.";
		case "Healing":
			return "You cast healing spells at +1 caster level.";
		case "Knowledge":
			return "Add all Knowledge skills to your list of cleric class skills. You cast divination spells at +1 caster level.";
		case "Law":
			return "You cast law spells at +1 caster level.";
		case "Luck":
			return "You gain the power of good fortune, which is usable once per day. This extraordinary ability allows you to reroll one roll that you have just made before the DM declares whether the roll results in success or failure. You must take the result of the reroll, even if it’s worse than the original roll.";
		case "Magic":
			return "Use scrolls, wands, and other devices with spell completion or spell trigger activation as a wizard of one-half your cleric level (at least 1st level). For the purpose of using a scroll or other magic device, if you are also a wizard, actual wizard levels and these effective wizard levels stack.";
		case "Plant":
			return "Rebuke or command plant creatures as an evil cleric rebukes or commands undead. Use this ability a total number of times per day equal to 3 + your Charisma modifier. This granted power is a supernatural ability. Add Knowledge (nature) to your list of cleric class skills.";
		case "Protection":
			return "You can generate a protective ward as a supernatural ability. Grant someone you touch a resistance bonus equal to your cleric level on his or her next saving throw. Activating this power is a standard action. The protective ward is an abjuration effect with a duration of 1 hour that is usable once per day.";
		case "Strength":
			return "You can perform a feat of strength as a supernatural ability. You gain an enhancement bonus to Strength equal to your cleric level. Activating the power is a free action, the power lasts 1 round, and it is usable once per day.";
		case "Sun":
			return "Once per day, you can perform a greater turning against undead in place of a regular turning. The greater turning is like a normal turning except that the undead creatures that would be turned are destroyed instead.";
		case "Travel":
			return "For a total time per day of 1 round per cleric level you possess, you can act normally regardless of magical effects that impede movement as if you were affected by the spell freedom of movement. This effect occurs automatically as soon as it applies, lasts until it runs out or is no longer needed, and can operate multiple times per day (up to the total daily limit of rounds). This granted power is a supernatural ability. Add Survival to your list of cleric class skills.";
		case "Trickery":
			return "Add Bluff, Disguise, and Hide to your list of cleric class skills.";
		case "War":
			return "Free Martial Weapon Proficiency with deity’s favored weapon (if necessary) and Weapon Focus with the deity’s favored weapon. The favored weapons of the war deities are as follows; Corellon, longsword; Erythnul, morningstar; Gruumsh, spear (or longspear); Heironeous, longsword; Hextor, flail (light or heavy).";
		case "Water":
			return "Turn or destroy fire creatures as a good cleric turns undead. Rebuke, command, or bolster water creatures as an evil cleric rebukes undead. Use these abilities a total number of times per day equal to 3 + your Charisma modifier. This granted power is a supernatural ability.";
	}
}