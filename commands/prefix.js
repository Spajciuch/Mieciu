
const Discord = require("discord.js");
const fs = require("fs");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Nie masz uprawnień");
  if(!args[0] || args[0 == "help"]) return message.reply("Użycie: m!prefix <twój prefix>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor(config.embed_color)
  .setTitle("Zmiania prefiu")
  .setDescription(`**Ustawiono prefix na:** ${args[0]}`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "prefix"
}
