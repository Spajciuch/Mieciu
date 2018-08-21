const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
message.channel.createWebhook(args.join(" ").split(" | ")[0], args.join(" ").split(" | ")[1])
  .then(webhook => message.author.send(`Twój WebHook https://canary.discordapp.com/api/webhooks/${webhook.id}/${webhook.token}`))
  .catch(console.error)
}
module.exports.help = {
  name: "newhook",
  category:"util",
  description:"Tworzy webhook",
  use:"<prefix>newhook <nazwa> | <URL>"
}
//https://canary.discordapp.com/api/webhooks/462664593429364746/b2RLryR4Pz_ar_2V0BcRT3YqxujihEpYispM_JRvFY_M6l86tfVqgoxalZQv-RkgA86R