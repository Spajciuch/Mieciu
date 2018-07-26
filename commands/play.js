const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
message.member.voiceChannel.join()
 .then(connection => {
console.log('Connected!')
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();

 const stream = ytdl(args.join(" "), { filter : 'audioonly' });
 broadcast.playStream(stream);
 const dispatcher = connection.playBroadcast(broadcast);
 })
}
module.exports.help = {
	name: "play",
	category:"music"
}
