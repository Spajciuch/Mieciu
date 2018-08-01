const Discord = require("discord.js");
const config = require(`../config.json`)
var fs = require('fs')
module.exports.run = async (client, message, args) => {
const fetch = require('node-fetch');
fetch('https://api.github.com/users/' + args.join("+"))
    .then(res => res.json())
    .then(json => {
    	console.log(json)
let embed = new Discord.RichEmbed()
.setTitle("GitHub")
.setColor(config.embed_color)
.setAuthor(`${json.login}`, json.avatar_url)
.setFooter("Utworzono " + json.created_at)
.setThumbnail(json.avatar_url)
.addField("Nick", json.name, true)
.addField("Respozytoria", json.public_repos,true)
.addField("Obserwujący", json.followers,true)
.addField("Obserwuje",json.following,true)
message.channel.send({embed})
    });
}

module.exports.help = {
	name: "github",
	category:"info"
}