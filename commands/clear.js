

const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
var firebase = require('firebase')
  var database = firebase.database()
  await database.ref(`/config/${message.guild.id}/util`).once('value')
  .then(async pingi => {
    if(pingi.val() == false) return message.reply('Komenda jest wyłączona');
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nie masz uprawnień.");
  if(!args[0]) return message.channel.send("Podaj liczbę wiadomości do usunięcia");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Usunięto ${args[0]} wiadomości.`).then(msg => msg.delete(2000));
});
})
}

module.exports.help = {
  name: "clear",
  category:"admin"
}
