const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  if(message.author.id !== '367390191721381890') return message.reply("Nie masz uprawnień")
			if(!result) return console.log("Błąd Eval")
      let embed = new Discord.RichEmbed()
      .setTitle("Eval")
      .addField(":inbox_tray: Wejście", "```"+args.join(" ")+"```")
      .addField(":outbox_tray: Wyjście", "```"+eval(args.join(" ")).toString()+"```")
      .setColor(config.embed_color)
      message.channel.send({embed})
  
}
module.exports.help = {
  name: "eval"
}
