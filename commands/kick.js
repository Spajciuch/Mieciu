const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
      if(!message.member.roles.some(r=>["Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
    return message.reply("Nie masz uprawnień")

      let member = message.mentions.members.first();
      if (!member)
        return message.reply("Oznacz właściwą osobę");
      if (!member.kickable)
        return message.reply("Nie mogę wywalić tej osoby, czy mam wszystkie uprawnienia");


      let reason = args.slice(1).join(' ');
      if(!reason) reason = " `Nie podano powodu`";

      await member.kick(reason)
        .catch(error => message.reply(`${message.author} Nie mogłem wykopać usera, powód: ${error}`));
      const embed = {
        "title": "Kick",
        "description": `Osoba: ${member.user.username}\nWywalono przez: ${message.author.username}\nPowód: ${reason}`,
        "color": 43519,
        "timestamp": "",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/avatars/423196130508275716/65a17d5274f3db851ef9ab5f3ed13ea1.jpg?size=2048",
          "text": "Mieciu"
        },
        "thumbnail": {
          "url": message.mentions.members.first().user.avatarURL
        }
      };
      message.channel.send({ embed })
}
module.exports.help = {
	name: "kick",
  category:"admin"
}