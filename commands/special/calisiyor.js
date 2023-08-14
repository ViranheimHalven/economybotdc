const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('itsworking')
		.setDescription('ÇALIŞIYOR. VE ÇALIŞMAYA DEVAM EDECEK.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply(`ŞU AN ÇALIŞIYORUM, GÖREBİLİRSİNİZ Kİ ÇALIŞMAYA DEVAM EDİYORUM.`);
	},
};

