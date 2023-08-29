const { SlashCommandBuilder } = require('discord.js');
const { getBalance } = require('../../money/main-money-code.js')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('getbalance')
		.setDescription('Get Balance to the Account.'),
	async execute(interaction) {
    
    const target = interaction.options.getUser('user') ?? interaction.user;
		return interaction.reply(`${target.tag} has ${getBalance(target.id)}💰`);
    
		// interaction.guild is the object representing the Guild in which the command was run
	},
};
