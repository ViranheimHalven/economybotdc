const { Client, SlashCommandBuilder, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Latency Test.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
    const sent = await interaction.reply({ content: 'Pinging...', fetchReply: true });

    interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
    
	},
};

