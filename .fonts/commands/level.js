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
    let difference = nxtLvlXp - curxp;

    // let lvlEmbed = new Discord.RichEmbed()
    //         .setAuthor(message.author.username, message.author.displayAvatarURL)
    //         .setColor(config.embed_color)
    //         .addField("Level", curlvl, true)
    //         .addField("XP", curxp, true)
    //         .setFooter(`${difference} XP do następnego levelu`);

        var snekfetch = require('snekfetch')
    const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(681, 356)
const ctx = canvas.getContext('2d')
const bkg = await loadImage("./photos/card.png");
ctx.drawImage(bkg, 0, 0, canvas.width, canvas.height);


  const { body: buffer } = await snekfetch.get(message.author.displayAvatarURL);
  const avt = await loadImage(buffer);
  ctx.drawImage(avt, 26, 29, 116, 113);
  ctx.fillStyle = '#adb2c2';
    ctx.strokeStyle = '#adb2c2'; //b4c0ee
    ctx.lineWidth = 3
    ctx.textBaseline = "top"
    ctx.font=`30px "Autour One"`
    var user = `${message.author.username}#${message.author.discriminator}`
    if(user.length > 10) ctx.font = `20px "Autour One"`
    //NICK
    ctx.fillText(`${message.author.username}#${message.author.discriminator}`, 186,30)
    ctx.strokeText(`${message.author.username}#${message.author.discriminator}`, 186,30)
    //LEVEL
    ctx.strokeStyle = '#707278'
    ctx.fillStyle = '#707278'; //#707278
    ctx.fillText(`${curlvl} Poziom`, 477,67)
    ctx.strokeText(`${curlvl } Poziom`, 477,67)
    //XP
      ctx.fillText(`${curxp}XP`, 477,150)
    ctx.strokeText(`${curxp}XP`, 477,150)
    //XP DO NASTEPNEGO LVL 
    ctx.font=`20px "Autour One"`
      ctx.fillText(`${difference}XP brakuje`, 477,255)
    ctx.strokeText(`${difference}XP brakuje`, 477,255)
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'card.png');
  message.channel.send(attachment)
    })
    })
}
    module.exports.help = {
                name:"profile",
                category:"social"
    }