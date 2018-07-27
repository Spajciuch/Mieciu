const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();
if(args[0] == 'play'){
message.member.voiceChannel.join()
 .then(async connection => {
	const { YTSearcher } = require('ytsearcher');
const searcher = new YTSearcher('AIzaSyCOHw263Gs7JDtkYjsP_Hc50WLoOrk4G00');
let result=  await searcher.search(args.join(" "), { type: 'video' });

console.log(result.first);
console.log(result.first.url);
console.log('Connected!')


 const stream = ytdl(result.first.url, { filter : 'audioonly' });
 broadcast.playStream(stream);
 const dispatcher = connection.playBroadcast(broadcast);
		let embed = new Discord.RichEmbed()
	.setAuthor(result.first.title)
	.setThumbnail(result.first.thumbnails.default.url)
	.setColor(config.embed_color)
	.setDescription(result.first.description)
		message.channel.send({embed})
 })
} else if(args[0] == 'pause'){
	broadcast.pause()
}
}
module.exports.help = {
	name: "m",
	category:"music"
}
