const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
let webhookid = args[0].split("/")[5]
let webhooktoken = args[0].split("/")[6]

const hook = new Discord.WebhookClient(webhookid, webhooktoken);

hook.send(args.join(" ").slice(args[0].length));
}
module.exports.help = {
	name: "writehook",
	category:"fun",
  description:"Piszesz za pomocą webhooka",
  use:"<prefix>writehook <link> <tekst>"
}
