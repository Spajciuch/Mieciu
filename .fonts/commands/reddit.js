const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  const redditSearch = require('reddit-search');

console.log(redditSearch('hotels'))
}
module.exports.help = {
  name: "reddit"
}
