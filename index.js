const { Collection, Client } = require('discord.js')
const fs = require('fs')
require('dotenv').config

const client = new Client({
    disableEveryone: true
})

client.config = require('./config.json')
const token = process.env;

module.exports = client


client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

require('./handlers/loader')(client)



client.login(token)
