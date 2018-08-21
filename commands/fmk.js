const Discord = require("discord.js");
const google = require("google");
var config = require('../config')
var fs = require('fs')
module.exports.run = async (client, message, args) => {
 let replies = ['MARRY :ring:', 'KILL :bomb:', 'FUCK :ok_hand:'];
    let result = Math.floor(Math.random() * replies.length);

    let makifuembed = new Discord.RichEmbed()

        .setDescription(`**${args[0]} został wybrany przez <@${message.author.id}>**`)
        .setColor(config.embed_color)
        .addField('Wybrałeś:', replies[result])
        .setFooter('Fuck, Marry, Kill!')
        .setTimestamp();

    if (!message.mentions.users.first()) return message.channel.send(`<@${message.author.id}>, please mention a user you wanna choose!`).then(msg => {
        msg.delete(3000)
    });

    message.channel.send(makifuembed);
}
module.exports.help = {
  name: "fmk",
  category:"util",
  description:"Zabawa w Fuck/Marry/Kill",
  use:"<prefix>fmk <osoba>"
}