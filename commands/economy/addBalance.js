const { SlashCommandBuilder } = require('discord.js');
const { addBalance, getBalance } = require('../../money/main-money-code.js')

module = {
	data: new SlashCommandBuilder()
		.setName('addbalancetoyourself')
		.setDescription('Add Balance to your Account.')
		.addIntegerOption(option =>
			option.setName('amount')
				.setDescription('Add Amount')
				.setRequired(true)),

	async execute(interaction) {
    
    const target = interaction.options.getUser('user') ?? interaction.user;
    const amount = interaction.options.getInteger('amount');
    addBalance(target.id, amount);
		return interaction.reply(`You added ${amount}, ${target.tag}, you now have: ${getBalance(target.id)}💰`);
    
		// interaction.guild is the object representing the Guild in which the command was run
	},
};
