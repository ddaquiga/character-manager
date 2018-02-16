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
	return [5,10,25,100,15,50,150,200,20,250,600,1500,15,3,9,7,20,30,50,8,10];
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