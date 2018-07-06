const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
let { installedFonts } = require('installed-fonts');
installedFonts().then(fonts => message.channel.send(fonts));
}
module.exports.help = {
	name: "fonts"
}