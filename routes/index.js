var router = require('express').Router(),
	control = require('../db/control');

module.exports = function(io) {

	var shimArticles = [
		{
			title: 'All About ROM Hacking',
			md: '# All About ROM Hacking\nROM hacking is the process of modifying a video game ROM image to alter the game\'s graphics, dialogue, levels, gameplay, or other elements. This is usually done by technically inclined video game fans to breathe new life into a cherished old game, as a creative outlet, or to make essentially new unofficial games using the old game\'s engine.'
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

				})
				.emit('server.articles', shimArticles);
		});
	});

	return router;

}
