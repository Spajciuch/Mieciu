const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
const { YTSearcher } = require('ytsearcher');
const searcher = new YTSearcher('AIzaSyCOHw263Gs7JDtkYjsP_Hc50WLoOrk4G00');
let result=  await searcher.search('Kuban', { type: 'video' });

console.log(result.first);
console.log(result.first.url);
}
module.exports.help = {
	name: "search",
	category:"search"
}
