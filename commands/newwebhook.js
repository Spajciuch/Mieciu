const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
channel.createWebhook(args.join(" ").split(" | ")[0], args.join(" ").split(" | ")[1])
  .then(webhook => console.log(`Nowy WebHook https://canary.discordapp.com/api/webhooks/${webhook.id}/${webhook.token}`))
  .catch(console.error)
}
module.exports.help = {
  name: "newhook"
}
