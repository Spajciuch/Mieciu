const Discord = require("discord.js");
var firebase = require('firebase')
var config = require(`../config.json`)
var database = firebase.database()
           



    module.exports.run = async (client, message, args) => {
        database.ref(`profile/${message.author.id}/xp`).once("value")
            .then(async exp => {
                database.ref(`profile/${message.author.id}/level`).once("value")
                    .then(async level => {
                
    let curxp = exp.val();
    let curlvl = level.val();
    let nxtLvlXp = curlvl * 300;
    let difference = curxp - nxtLvlXp;

    // let lvlEmbed = new Discord.RichEmbed()
    //         .setAuthor(message.author.username, message.author.displayAvatarURL)
    //         .setColor(config.embed_color)
    //         .addField("Level", curlvl, true)
    //         .addField("XP", curxp, true)
    //         .setFooter(`${difference} XP do następnego levelu`);

        var snekfetch = require('snekfetch')
    const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(1024, 576)
const ctx = canvas.getContext('2d')
const bkg = await loadImage("./photos/card.png");
ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);


  const { body: buffer } = await snekfetch.get(message.author.displayAvatarURL);
  const avt = await loadImage(buffer);
  ctx.drawImage(avt, 78, 67, 144, 144);
  ctx.fillStyle = 'white';
    ctx.textBaseline = "top"
    ctx.font=`80px "Autour One"`
    
    //NICK
    ctx.fillText(`${message.author.username}#${message.author.discriminator}`, 254,56)
    //LEVEL
    ctx.fillStyle = '#7289da'; //#707278
    ctx.fillText(`${curlvl}`, 170,435)
    // //XP
      ctx.fillText(`${curxp}`, 420,435)
    // //XP DO NASTEPNEGO LVL 
      ctx.fillText(`${difference}`, 750,435)

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'card.png');
  message.channel.send(attachment)
    })
    })
}
    module.exports.help = {
                name:"profile",
                category:"social"
    }
