const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
  
  let pages = [`**Prefix: m!**\nMasz jakieś problemy?, Wbij na serwer pomocy -> https://discord.gg/jjNfaHM`, '**Komendy Administarcyjne**\nset.channel.name\nunbal\nid.ban\ncreate.channel\nset.icon\nset.server.name\nset-ver-lvl\ncreate.role\nrole.color\nban\nkick\nset.topic\nclear', '**Komendy Użytkowe**\nmail\ncolor\nweather\ngif\nping\nserver.info\nivona\nsupportet.languages\ntranslate [text] | [Język, np, EN]\nnote\nget.note[kod]\nqr', '**Komendy Do zabawy**\nachievement\nreverse\nstart.typing\nstop.typing\n8ball\nchoose\navatar\nos.ping\nsay\nascii\nhug\npat\nslap\npunch\nlenny\nlennyd\nshrug\nshrugd', '**Picie**\nredwine\nwhitewine\nadvocat\nwhiskey\nbeer\nvodka\nsake\ncoffee\ntea\nglass_of_milk\napple_juice', '**Jedzenie**\nwaffles\nwatermelon\napple\npancakes\ngrape\nlemon\npineapple\nmelon\ntangerine\nbanana\ncookie\nxanax', '**Muzyka**\nmusichelp']; 
  let page = 1; 
 
  const embed = new Discord.RichEmbed() 
    .setColor(config.embed_color)
    .setFooter(`Strona ${page} z ${pages.length}`) 
    .setDescription(pages[page-1])
 
  message.channel.send(embed).then(msg => { 
   
    msg.react('⏪').then( r => { 
      msg.react('⏩') 
     
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
     
      const backwards = msg.createReactionCollector(backwardsFilter); 
      const forwards = msg.createReactionCollector(forwardsFilter); 
     
      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Strona ${page} z ${pages.length}`); 
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => { 
        if (page === pages.length) return; 
        page++; 
        embed.setDescription(pages[page-1]); 
        embed.setFooter(`Strona ${page} z ${pages.length}`); 
        msg.edit(embed) 
      })
   
    })
 
  })
}
module.exports.help = {
  name: "help"
}
