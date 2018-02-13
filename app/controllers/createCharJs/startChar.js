function loadStartChar(){
	console.log("loadStartChar");
	loadClassDescription(0);
	loadRaceDescription(0);
}

function loadClassDescription(id){
	console.log("Loading Class Description");
	var classDescription;

	switch (id){
		case 0:
			classDescription = "<h2>Barbarian Description</h2><p>The barbarian is an excellent warrior. Where the fighter’s skill in combat comes from training and discipline, however, the barbarian has a powerful rage. While in this berserk fury, he becomes stronger and tougher, better able to defeat his foes and withstand their attacks. These rages leave him winded, and he has the energy for only a few such spectacular displays per day, but those few rages are usually sufficient. He is at home in the wild, and he runs at great speed.</p>";
			break;
		case 1:
			classDescription = "<h2>Bard Description</h2><p>A bard brings forth magic from his soul, not from a book. He can cast only a small number of spells, but he can do so without selecting or preparing them in advance. His magic emphasizes charms and illusions over the more dramatic evocation spells that wizards and sorcerers often use.</p> <p>In addition to spells, a bard works magic with his music and poetry. He can encourage allies, hold his audiences rapt, and counter magical effects that rely on speech or sound.</p> <p>Bards have some of the skills that rogues have, although bards they are not as focused on skill mastery as rogues are. A bard listens to stories as well as telling them, of course, so he has a vast knowledge of local events and noteworthy items.</p>";
			break;
		case 2:
			classDescription = "<h2>Cleric Description</h2><p>Clerics are masters of divine magic, which is especially good at healing. Even an inexperienced cleric can bring people back from the brink of death, and an experienced cleric can bring back people who have crossed over that brink. As channelers of divine energy, clerics can affect undead creatures. A good cleric can turn away or even destroy undead; an evil cleric can bring undead under his control.</p> <p>Clerics have some combat training. They can use simple weapons, and they are trained in the use of armor, since armor does not interfere with divine spells the way it does with arcane spells.</p>";
			break;
		case 3:
			classDescription = "<h2>Druid Description</h2><p>Druids cast divine spells much the same way clerics do, though most get their spells from the power of nature rather than from deities. Their spells are oriented toward nature and animals. In addition to spells, druids gain an increasing array of magical powers, including the ability to take the shapes of animals, as they advance in level.</p> <p>The armor of a druid are restricted by traditional oaths to the items noted in Weapon and Armor proficiency (below),All other armor is prohibited. Though a druid could learn to wear full plate, putting it on would violate her oath and suppress her druidic powers.</p> <p>Druids avoid carrying much worked metal with them because it interferes with the pure and primal nature that they attempt to embody.</p>";
			break;
		case 4:
			classDescription = "<h2>Fighter Description</h2><p>Of all classes, fighters have the best all-around fighting capabilities (hence the name). Fighters are familiar with all the standard weapons and armors. In addition to general fighting prowess, each fighter develops particular specialties of his own. A given fighter may be especially capable with certain weapons, another might be trained to execute specific fancy maneuvers. As fighters gain experience, they get more opportunities to develop their fighting skills. Thanks to their focus on combat maneuvers, they can master the most difficult ones relatively quickly.</p>";
			break;
		case 5:
			classDescription = "<h2>Monk Description</h2><p>The key feature of the monk is her ability to fight unarmed and unarmored. Thanks to her rigorous training, she can strike as hard as if she were armed and strike faster than a warrior with a sword.</p> <p>Though a monk casts no spells, she has a magic of her own. She channels a subtle energy, called ki, which allows her to perform amazing feats. The monk’s best-known feat is her ability to stun an opponent with an unarmed blow. A monk also has a preternatural awareness that allows her to dodge an attack even if she is not consciously aware of it.</p> <p>As the monk gains experience and power, her mundane and kioriented abilities grow, giving her more and more power over herself and, sometimes, over others.</p>";
			break;
		case 6:
			classDescription = "<h2>Paladin Description</h2><p>Divine power protects the paladin and gives her special powers. It wards off harm, protects her from disease, lets her heal herself, and guards her heart against fear. The paladin can also direct this power to help others, healing their wounds or curing diseases. Finally, the paladin can use this power to destroy evil. Even the least experienced paladin can detect evil, and more experienced paladins can smite evil foes and turn away undead. In addition, this power draws a mighty steed to the paladin and imbues that mount with strength, intelligence, and magical protection.</p>";
			break;
		case 7:
			classDescription = "<h2>Ranger Description</h2><p>A ranger can use a variety of weapons and is quite capable in combat. His skills allow him to survive in the wilderness, to find his prey, and to avoid detection. He also has special knowledge about certain types of creatures, which makes it easier for him to find and defeat such foes. Finally, an experienced ranger has such a tie to nature that he can actually draw upon natural power to cast divine spells, much as a druid does.</p>";
			break;
		case 8:
			classDescription = "<h2>Rogue Description</h2><p>Rogues are highly skilled, and they can concentrate on developing any of several categories of skills. While not equal to members of many other classes in combat, a rogue knows how to hit where it hurts, and she can dish out a lot of damage with a sneak attack.</p> <p>Rogues have a sixth sense when it comes to avoiding danger. Experienced rogues develop mystical powers and skills as they master the arts of stealth, evasion, and sneak attacks. In addition, while not capable of casting spells on their own, rogues can “fake it” well enough to cast spells from scrolls, activate wands, and use just about any other magic item.</p>";
			break;
		case 9:
			classDescription = "<h2>Sorcerer Description</h2><p>Sorcerers cast spells through innate power rather than through careful training and study. Their magic is intuitive rather than logical. Sorcerers know fewer spells than wizards do and acquire powerful spells more slowly than wizards, but they can cast spells more often and have no need to select and prepare their spells ahead of time. Sorcerers do not specialize in certain schools of magic the way wizards sometimes do.</p> <p>Since sorcerers gain their powers without undergoing the years of rigorous study that wizards go through, they don’t have the background of arcane knowledge than most wizards have. However, they do have more time to learn fighting skills, and they are proficient with simple weapons.</p>";
			break;
		case 10:
			classDescription = "<h2>Wizard Description</h2><p>The wizard’s strength is her spells. Everything else is secondary. She learns new spells as she experiments and grows in experience, and she can also learn them from other wizards. In addition to learning new spells, a wizard can, over time, learn to manipulate her spells so they go farther, work better, or are improved in some other way.</p> <p>Some wizards prefer to specialize in a certain type of magic. Specialization makes a wizard more powerful in her chosen field, but it denies her access to some of the spells that lie outside that field.</p> <p>Like a sorcerer, a wizard can call a familiar—a small, magical animal companion that serves her. For some wizards, their familiars are their only true friends.</p>";
			break;
	}
	console.log(classDescription)
	document.getElementById("classDescription").innerHTML = classDescription;
}

function loadRaceDescription(id){
	var raceDescription;

	switch (id){
		case 0:
			raceDescription = "<h2>HUMAN RACIAL TRAITS</h2><ul>" + 
			"<li>Medium: As Medium creatures, humans have no special bonuses or penalties due to their size.Human base land speed is 30 feet.</li>" +
			"<li>1 extra feat at 1st level, because humans are quick to master specialized tasks and varied in their talents.<li>" +
			"<li>4 extra skill points at 1st level and 1 extra skill point at each additional level, since humans are versatile and capable. (The 4 skill points at 1st level are added on as a bonus, not multiplied in)</li></ul>";
			break;

		case 1:
			raceDescription = "<h2>DWARF RACIAL TRAITS</h2><ul>" +
			"<li>+2 Constitution, –2 Charisma: Dwarves are stout and tough but tend to be gruff and reserved.</li>" +
			"<li>Medium: As Medium creatures, dwarves have no special bonuses or penalties due to their size.</li>" +
			"<li>Dwarf base land speed is 20 feet. However, dwarves can move at this speed even when wearing medium or heavy armor or whose speed is reduced in such conditions).</li>" +
			"<li>Darkvision: Dwarves can see in the dark up to 60 feet. Darkvision is black and white only, but it is otherwise like normal sight, and dwarves can function just fine with no light at all.</li>" +
			"<li>Stonecunning: This ability grants a dwarf a +2 racial bonus on Search checks to notice unusual stonework, such as sliding walls, stonework traps, new construction (even when built to match the old), unsafe stone surfaces, shaky stone ceilings, and the like. Something that isn’t stone but that is disguised as stone also counts as unusual stonework. A dwarf who merely comes within 10 feet of unusual stonework can make a Search check as if he were actively searching, and a dwarf can use the Search skill to find stonework traps as a rogue can. A dwarf can also intuit depth, sensing his approximate depth underground as naturally as a human can sense which way is up. Dwarves have a sixth sense about stonework, an innate ability that they get plenty of opportunity to practice and hone in their underground homes.</li>" +
			"<li>Weapon Familiarity: Dwarves may treat dwarven waraxes and dwarven urgroshes as martial weapons, rather than exotic weapons.</li>" +
			"<li>Stability: Dwarves are exceptionally stable on their feet. A dwarf gains a +4 bonus on ability checks made to resist being bull rushed or tripped when standing on the ground (but not when climbing, flying, riding, or otherwise not standing firmly on the ground).</li>" +
			"<li>+2 racial bonus on saving throws against poison: Dwarves are hardy and resistant to toxins.</li>" +
			"<li>+2 racial bonus on saving throws against spells and spell-like effects: dwarves have an innate resistance to magic spells.</li>" +
			"<li>+1 racial bonus to attack rolls against orcs (including half-orcs) and goblinoids (including goblins, hobgoblins, and bugbears): Dwarves are trained in the special combat techniques that allow them to fight their common enemies more effectively.</li>" +
			"<li>+4 dodge bonus to Armor Class against monsters of the giant type (such as ogres, trolls, and hill giants): This bonus represents special training that dwarves undergo, during which they learn tricks that previous generations developed in their battles with giants. Any time a creature loses its Dexterity bonus (if any) to Armor Class, such as when it’s caught flat-footed, it loses its dodge bonus, too.</li>" +
			"<li>+2 racial bonus on Appraise checks that are related to stone or metal items: Dwarves are familiar with valuable items of all kinds, especially those made of stone or metal.</li>" +
			"<li>+2 racial bonus on Craft checks that are related to stone or metal: Dwarves are especially capable with stonework and metalwork.</li></ul>";
			break;

		case 2:
			raceDescription = "<h2>ELF RACIAL TRAITS</h2><ul>" +
			"<li>+2 Dexterity, –2 Constitution: Elves are graceful but frail. An elf’s grace makes her naturally better at stealth and archery.</li>" +
			"<li>Medium: As Medium creatures, elves have no special bonuses or penalties due to their size.</li>" +
			"<li>Elf base land speed is 30 feet.</li>" +
			"<li>Immunity to magic sleep effects, and a +2 racial saving throw bonus against enchantment spells or effects.</li>" +
			"<li>Low-light Vision: An elf can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination. She retains the ability to distinguish color and detail under these conditions.</li>" +
			"<li>Weapon Proficiency: Elves receive the Martial Weapon Proficiency feats for the longsword, rapier, longbow (including composite longbow), and shortbow (including composite shortbow) as bonus feats. Elves esteem the arts of swordplay and archery, so all elves are familiar with these weapons.</li>" +
			"<li>+2 racial bonus on Listen, Search, and Spot checks. An elf who merely passes within 5 feet of a secret or concealed door is entitled to a Search check to notice it as if she were actively looking for it. An elf’s senses are so keen that she practically has a sixth sense about hidden portals.</li></ul>";
			break;

		case 3:
			raceDescription = "<h2>GNOME RACIAL TRAITS</h2><ul>" +
				"<li>+2 Constitution, –2 Strength: Like dwarves, gnomes are tough, but they are small and therefore not as strong as larger humanoids.</li>" +
				"<li>Small: As a Small creature, a gnome gains a +1 size bonus to Armor Class, a +1 size bonus on attack rolls, and a +4 size bonus on Hide checks, but he uses smaller weapons than humans use, and his lifting and carrying limits are three-quarters of those of a Medium character. Gnome base land speed is 20 feet. Low-light Vision: A gnome can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination. He retains the ability to distinguish color and detail under these conditions.</li>" +
				"<li>Weapon Familiarity: Gnomes may treat gnome hooked hammers as martial weapons rather than exotic weapons.</li>" +
				"<li>+2 racial bonus on saving throws against illusions: Gnomes are innately familiar with illusions of all kinds.</li>" +
				"<li>Add +1 to the Difficulty Class for all saving throws against illusion spells cast by gnomes. Their innate familiarity with these effects make their illusions more difficult to see through. This adjustment stacks with those from similar effects, such as the Spell Focus feat.</li>" +
				"<li>+1 racial bonus on attack rolls against kobolds and goblinoids (including goblins, hobgoblins, and bugbears): Gnomes battle these creatures frequently and practice special techniques for fighting them.</li>" +
				"<li>+4 dodge bonus to Armor Class against monsters of the giant type (such as ogres, trolls, and hill giants): This bonus represents special training that gnomes undergo, during which they learn tricks that previous generations developed in their battles with giants. Any time a creature loses its Dexterity bonus (if any) to Armor Class, such as when it’s caught flat-footed, it loses its dodge bonus, too.</li>" +
				"<li>+2 racial bonus on Listen checks: Gnomes have keen ears.</li>" +
				"<li>+2 racial bonus on Craft (alchemy) checks: A gnome’s sensitive nose allows him to monitor alchemical processes by smell.</li>" +
				"<li>Spell-Like Abilities:<ul>" +
				"<li>1/day—speak with animals (burrowing mammal only, duration 1 minute).</li>" +
				"<li>A gnome with a Charisma score of at least 10 also has the following spell-like abilities: 1/day—dancing lights, ghost sound, prestidigitation. Caster level 1st; save DC 10 + gnome’s Cha modifier + spell level.</li></ul></li></ul>";
				break

		case 4:
			raceDescription = "<h2>HALF-ELF RACIAL TRAITS</h2><ul>" +
				"<li>Medium: As Medium creatures, half-elves have no special bonuses or penalties due to their size.</li>" +
				"<li>Half-elf base land speed is 30 feet.</li>" +
				"<li>Immunity to sleep spells and similar magical effects, and a +2 racial bonus on saving throw against enchantment spells or effects.</li>" +
				"<li>Low-light Vision: A half-elf can see twice as far as a human in starlight, moonlight, torchlight, and similar conditions of poor illumination. She retains the ability to distinguish color and detail under these conditions.</li>" +
				"<li>+1 racial bonus on Listen, Search, and Spot checks: A half-elf does not have the elf’s ability to notice secret doors simply by passing near them. Half-elves have keen senses, but not as keen as those of an elf.</li>" +
				"<li>+2 racial bonus on Diplomacy and Gather Information checks: Half-elves get along naturally with all people.</li>" +
				"<li>Elven Blood: For all effects related to race, a half-elf is considered an elf. Half-elves, for example, are just as vulnerable to special effects that affect elves as their elf ancestors are, and they can use magic items that are only usable by elves.</li></ul>";
				break;

		case 5:
			raceDescription = "<h2>HALF-ORC RACIAL TRAITS</h2><ul>" +
				"<li>+2 Strength, –2 Intelligence, –2 Charisma: Half-orcs are strong, but their orc lineage makes them dull and crude.</li>" +
				"<li>Medium: As Medium- creatures, half-orcs have no special bonuses or penalties due to their size.</li>" +
				"<li>Half-orc base land speed is 30 feet.</li>" +
				"<li>Darkvision: Half-orcs (and orcs) can see in the dark up to 60 feet. Darkvision is black and white only, but it is otherwise like normal sight, and half-orcs can function just fine with no light at all.</li>" +
				"<li>Orc Blood: For all effects related to race, a half-orc is considered an orc. Half-orcs, for example, are just as vulnerable to special effects that affect orcs as their orc ancestors are, and they can use magic items that are only usable by orcs.</li></ul>";
				break;

		case 6:
			raceDescription = "<h2>HALFLING RACIAL TRAITS</h2><ul>" + 
				"<li>+2 Dexterity, –2 Strength: Halflings are quick, agile, and good with ranged weapons, but they are small and therefore not as strong as other humanoids.</li>" +
				"<li>Small: As a Small creature, a halfling gains a +1 size bonus to</li>" +
				"<li>Armor Class, a +1 size bonus on attack rolls, and a +4 size bonus on Hide checks, but she uses smaller weapons than humans use, and her lifting and carrying limits are three-quarters of those of a Medium character.</li>" +
				"<li>Halfling base land speed is 20 feet.</li>" +
				"<li>+2 racial bonus on Climb, Jump, and Move Silently checks: Halflings are agile, surefooted, and athletic.</li>" +
				"<li>+1 racial bonus on all saving throws: Halflings are surprisingly capable of avoiding mishaps.</li>" +
				"<li>+2 morale bonus on saving throws against fear. This bonus stacks with the halfling’s</li>" +
				"<li>+1 bonus on saving throws in general.</li>" +
				"<li>+1 racial bonus on attack rolls with a thrown weapon and slings: Throwing and slinging stones is a universal sport among halflings, and they develop especially good aim.</li>" +
				"<li>+2 racial bonus on Listen checks: Halflings have keen ears.</li></ul>";
				break;
	}

	document.getElementById("raceDescription").innerHTML = raceDescription;
}