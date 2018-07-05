const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	  if(message.author.id !== '367390191721381890') return message.reply("Nie masz uprawnień")
    client.user.setActivity(args.join(" "), {type: "STREAMING"});
}
module.exports.help = {
	name: "setgame"
}