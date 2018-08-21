const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
var channel = client.channels.find("name", "global")
channel.send(args.join(' '))
}
module.exports.help = {
	name: "phone",
	category:"fun"
}