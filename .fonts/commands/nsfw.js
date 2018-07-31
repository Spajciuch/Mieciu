const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
const randomPuppy = require('random-puppy');
const { get } = require('request-promise-native')
module.exports.run = async (client, message, args) => {
  if (!message.channel.nsfw) return message.reply("Tylko na nsfw");

      var subreddits = [
          'NSFW_Wallpapers',
          'SexyWallpapers',
          'HighResNSFW',
          'nsfw_hd',
          'UHDnsfw',
          'ass',
          'boobs'
      ]
      var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

      randomPuppy(sub)
          .then(url => {
              const embed = new Discord.RichEmbed()
              
                  .setColor("RANDOM")
                  .setAuthor("Porn")
                  .setImage(url);

              message.channel.send({
                  embed
              });
          })
  }
  module.exports.help = {
    name: "porn",
    category:"nsfw"
  }
