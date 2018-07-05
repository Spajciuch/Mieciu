const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
	let member = args[0];
    if (!member) {
        fs.readFile('../Pickle/' + message.author.id + '.txt', function (err, data) {
            if (err) {
                message.channel.startTyping()
                var ile = Math.floor(Math.random() *100) + 1
                fs.writeFile('../Pickle/' + message.author.id + '.txt', ile, function (err) {
                    if (err) throw err;
                    message.channel.send(`**${message.author.username}**, rozmiar twojego wynosi: ${ile}cm`)
                });
                message.channel.stopTyping();

            } else if (data.toString() !== '') {
                message.channel.send(`**${message.author.username}**, rozmiar twojego wynosi: ${data.toString()}cm`)
            }
        });
    } else {
        fs.readFile('../Pickle/' +  message.mentions.members.first().user.id + '.txt', function (err, data) {
            if (err) {
                message.channel.startTyping()
                var ile = Math.floor(Math.random() *100) + 1
                fs.writeFile('../Pickle/' + message.mentions.members.first().user.id + '.txt', ile , function (err) {
                    if (err) throw err;
                    message.channel.send(`Rozmiar **${message.mentions.members.first().user.username}** wynosi: ${ile}cm`)
                });
                message.channel.stopTyping();

            } else {
                if (data.toString() !== '') {
                    message.channel.send(`Rozmiar **${message.mentions.members.first().user.username}** wynosi:  ${data.toString()}cm`)
                }
            }
        });
    }
}
module.exports.help = {
	name: "pickle"
}