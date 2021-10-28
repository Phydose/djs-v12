const client = require('../index')
const prefix = require('../config.json').prefix

client.on('ready', () => {
    console.log(`[READY]: Logged in as ${client.user.username}`)
})
