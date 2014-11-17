var router = require('express').Router(),
	control = require('../db/control');

module.exports = function(io) {

	var shimArticles = [
		{
			title: 'ROM Hacking',
			md: '# ROM Hacking\nROM hacking is the process of modifying a video game ROM image to alter the game\'s graphics, dialogue, levels, gameplay, or other elements. This is usually done by technically inclined video game fans to breathe new life into a cherished old game, as a creative outlet, or to make essentially new unofficial games using the old game\'s engine.'
		},
		{
			title: 'Hex Editors',
			md: '# Hex Editors\nA hex editor (or binary file editor or byte editor) is a type of computer program that allows for manipulation of the fundamental binary data that constitutes a computer file. The name \'hex\' comes from \'hexadecimal\': the standard numerical format for representing binary data. A typical computer file occupies multiple areas on the platter(s) of a disk drive, whose contents are combined to form the file. Hex editors that are designed to parse and edit sector data from the physical segments of floppy or hard disks are sometimes called sector editors or disk editors.\n\n[![Hex Editor](http://upload.wikimedia.org/wikipedia/commons/2/2c/Hexedit-screenshot.png)](#)'
		},
		{
			title: 'Pokémon',
			md: '# Pokémon\nPokémon (ポケモン Pokemon?, /ˈpoʊkeɪmɒn/ poh-kay-mon[1][2]) is a media franchise published by Japanese video game company Nintendo, owned by The Pokémon Company, and created by Satoshi Tajiri in 1996, focused on the titular creatures. Originally released as a pair of interlinkable Game Boy role-playing video games developed by Game Freak, Pokémon has since become the second-most successful and lucrative video game-based media franchise in the world, behind only Nintendo\'s Mario franchise. Pokémon properties have since been merchandised into anime, manga, trading cards, toys, books, and other media.\n\n[![Pokemon](http://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/English_Pok%C3%A9mon_logo.svg/269px-English_Pok%C3%A9mon_logo.svg.png)](#)'
		},
		{
			title: 'GBA',
			md: '# Game Boy Advance\nThe Game Boy Advance (ゲームボーイアドバンス Gēmu Bōi Adobansu?), often shortened to GBA, is a 32-bit handheld video game console developed, manufactured and marketed by Nintendo. It is the successor to the Game Boy Color. It was released in Japan on March 21, 2001; in North America on June 11, 2001; in Australia and Europe on June 22, 2001; and in the People\'s Republic of China on June 8, 2004 (excluding Hong Kong).\n\n[![Game Boy Advance](http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Game-Boy-Advance-Blk.jpg/250px-Game-Boy-Advance-Blk.jpg)](#)'
		},
		{
			title: 'Ruby and Sapphire',
			md: '# Ruby and Sapphire\nPokémon Ruby Version and Sapphire Version (ポケットモンスター ルビー&サファイア Poketto Monsutā Rubī & Safaia?, "Pocket Monsters: Ruby & Sapphire") are the third installments of the Pokémon series of role-playing video games, developed by Game Freak and published by Nintendo for the Game Boy Advance. The games were first released in Japan in late 2002 and internationally in 2003. Pokémon Emerald, a special edition version, was released two years later in each region. These three games (Pokémon Ruby, Sapphire, and Emerald) are part of the third generation of the Pokémon video game series, also known as the "advanced generation". A remake of the two games, titled Omega Ruby and Alpha Sapphire, will be released for the Nintendo 3DS in November 2014.\n\n[![Pokemon Ruby Cover](http://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Pokemon_Ruby_NA.jpg/220px-Pokemon_Ruby_NA.jpg)](#)'
		},
		{
			title: 'ARM',
			md: '# ARM\nARM is a family of instruction set architectures for computer processors based on a reduced instruction set computing (RISC) architecture developed by British company ARM Holdings. A RISC-based computer design approach means ARM processors require significantly fewer transistors than typical CISC x86 processors in most personal computers. This approach reduces costs, heat and power use. Such reductions are desirable traits for light, portable, battery-powered devices—​including smartphones, laptops, tablet and notepad computers, and other embedded systems. A simpler design facilitates more efficient multi-core CPUs and higher core counts at lower cost, providing improved energy efficiency for servers. ARM Holdings develops the instruction set and architecture for ARM-based products, but does not manufacture products. The company periodically releases updates to its cores. Current cores from ARM Holdings support a 32-bit address space and 32-bit arithmetic; the ARMv8-A architecture, announced in October 2011,[6] adds support for a 64-bit address space and 64-bit arithmetic. Instructions for ARM Holdings\' cores have 32 bits wide fixed-length instructions, but later versions of the architecture also support a variable-length instruction set that provides both 32 and 16 bits wide instructions for improved code density. Some cores can also provide hardware execution of Java bytecodes. ARM Holdings licenses the chip designs and the ARM instruction set architectures to third parties, who design their own products that implement one of those architectures—​including systems-on-chips (SoC) that incorporate memory, interfaces, radios, etc. Currently, the widely used Cortex cores, older "classic" cores, and specialized SecurCore cores variants are available for each of these to include or exclude optional capabilities. Companies that make chips that implement an ARM architecture include Apple, AppliedMicro, Atmel, Broadcom, Freescale Semiconductor, Nvidia, NXP, Qualcomm, Samsung Electronics, ST Microelectronics and Texas Instruments. Qualcomm introduces new three-layer 3D chip stacking in their 2014-15 ARM SoCs such as in their first 20 nm 64-bit octa-core. Globally ARM is the most widely used instruction set architecture in terms of quantity produced.[8][9][10][11][12] The low power consumption of ARM processors has made them very popular: over 50 billion ARM processors have been produced as of 2014, thereof 10 billion in 2013[13] and "ARM-based chips are found in nearly 60 percent of the world’s mobile devices". In 2008, 10 billion chips had been produced.[14] The ARM architecture (32-bit) is the most widely used architecture in mobile devices, and most popular 32-bit one in embedded systems.[15] In 2005, about 98% of all mobile phones sold used at least one ARM processor.[16] According to ARM Holdings, in 2010 alone, producers of chips based on ARM architectures reported shipments of 6.1 billion ARM-based processors, representing 95% of smartphones, 35% of digital televisions and set-top boxes and 10% of mobile computers.\n\n[![ARM](http://upload.wikimedia.org/wikipedia/commons/thumb/6/60/ARM_logo.svg/200px-ARM_logo.svg.png)](#)'
		}
	];

	router.get('/', function(req, res) {
		res.render('index', {

		});
	});

	io.on('connection', function(socket) {
		socket.on('init', function(data) {
			socket
				.emit('response', {

				})
				.on('disconnect', function() {

				});

			var i = 0;
			for (var a in shimArticles) {
				setTimeout((function(a) {
					return function() {
						socket.emit('server.article', a);
					}
				})(shimArticles[a]), i += 10);
			}
		});
	});

	return router;

}
