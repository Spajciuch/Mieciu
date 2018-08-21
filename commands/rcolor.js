
const Discord = require("discord.js");
module.exports.run = async (client, message, args) =>{
  var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Nie masz uprawnień");
  var name = args.join(" ").split(" | ")[0]
  const role = message.guild.roles.find("name", name)
  var color = args.join(" ").split(" | ")[1]
  role.setColor(color);
  let embed = new Discord.RichEmbed()
  .setTitle("Zmiana koloru roli")
  .addField("Zmiany:", `Rola: ${role}\nNowy kolor: ${color}`)
  .setColor(color)
  message.channel.send({embed: embed})
})
}
module.exports.help = {
  name: "role.color",
  category:"admin",
  description:"Zmienia kolor roli",
  use:"<prefix>role <nazwa> | <hex>"
}
