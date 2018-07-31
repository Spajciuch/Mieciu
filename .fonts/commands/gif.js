const Discord = require("discord.js");
const config = require(`../config.json`)
var giphy = require('giphy-api')("IL0Gy0XLlUmTTaAIQkF3wWiItrT8ijhZ");
const GiphyRandom = require('giphy-random');
const giphyRandom = new GiphyRandom({ apiKey: config.giphy});
module.exports.run = async (client, message, args) => {
giphyRandom.get({ tag: args.join(" ")})
.then(data => message.channel.send(`https://media.giphy.com/media/${data.id}/giphy.gif`))
.catch(e => console.error(e.message));
}
module.exports.help = {
	name: "gif",
	category:"fun"
}