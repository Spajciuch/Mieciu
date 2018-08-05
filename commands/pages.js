<<<<<<< HEAD
const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {

  let pages = [`**Prefix: m!**\nMasz jakieś problemy?, Wbij na serwer pomocy -> https://discord.gg/jjNfaHM\nLiczba wszystkich komend: ${client.commands.size}`,`**Profil**\nprofile` ,'**Komendy Administarcyjne**\n'+ client.commands.filter(cmd => cmd.help.category === 'admin').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n"), '**Komendy Użytkowe**\n'+client.commands.filter(cmd => cmd.help.category === 'util').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n"),'**Komendy ze Zdjęciami**\n'+client.commands.filter(cmd => cmd.help.category === 'photo').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n"),'**Komendy Do zabawy**\n'+ client.commands.filter(cmd => cmd.help.category === 'fun').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n"),'**Muzyka**\nmusichelp','**NSFW**\n'+ client.commands.filter(cmd => cmd.help.category === 'nsfw').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n")]; 
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
=======
const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {

  let pages = [`**Prefix: m!**\nMasz jakieś problemy?, Wbij na serwer pomocy -> https://discord.gg/jjNfaHM\nLiczba wszystkich komend: ${client.commands.size}`,`**Profil**\nprofile` ,'**Komendy Administarcyjne**\n'+ client.commands.filter(cmd => cmd.help.category === 'admin').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n"), '**Komendy Użytkowe**\n'+client.commands.filter(cmd => cmd.help.category === 'util').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n"),'**Komendy ze Zdjęciami**\n'+client.commands.filter(cmd => cmd.help.category === 'photo').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n"),'**Komendy Do zabawy**\n'+ client.commands.filter(cmd => cmd.help.category === 'fun').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n"),'**Muzyka**\nmusichelp','**NSFW**\n'+ client.commands.filter(cmd => cmd.help.category === 'nsfw').map(cmd => '\ ' + cmd.help.name + '\ ').join("\n")]; 
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
>>>>>>> 896afc7f4378ced0e0bfec1cbae96344f72f3e25
