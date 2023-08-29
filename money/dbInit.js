const Sequelize = require('sequelize');
const username = process.env.username;
const password = process.env.password;
      
const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const CurrencyShop = require('./data/CurrencyShop.js')(sequelize, Sequelize.DataTypes);
require('./data/Users.js')(sequelize, Sequelize.DataTypes);
require('./data/UserInventory.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	const shop = [
		CurrencyShop.upsert({ name: 'Wood', cost: 10 }),
		CurrencyShop.upsert({ name: 'Iron', cost: 25 }),
		CurrencyShop.upsert({ name: 'Cobalt', cost: 50 }),
	];

	await Promise.all(shop);
	console.log('Database synced');

	sequelize.close();
}).catch(console.error);