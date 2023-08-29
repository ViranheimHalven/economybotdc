const { Events } = require('discord.js');
const { currency, client } = require('../money/main-money-code.js');
const { Users } = require('../money/dbObjects.js')
module.exports = {
	name: Events.ClientReady,
	async execute(interaction) {
    const storedBalances = await Users.findAll();
	  storedBalances.forEach(b => currency.set(b.user_id, b));
	},
};


