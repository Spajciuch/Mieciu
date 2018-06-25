
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var weather = require('weather-js')
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err,result){
    if(err){
      message.channel.send(err)}
    var current = result[0].current
    var location = result[0].location
    const embed = new Discord.RichEmbed()
      .setDescription(current.skytext)
      .setAuthor(`Pogoda dla: ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(`#00a9ff`)
      .addField(`Strefa Czasowa`,`UTC${location.timezone}`, true)
      .addField(`Jednostka Temp.`, `°${location.degreetype}`, true)
      .addField(`Temperatura`, `${current.temperature}°C`, true)
      .addField(`Temperatura Odczuwalna`, `${current.feelslike}°C`, true)
      .addField(`Wiatr`, current.winddisplay ,true)
      .addField(`Wilgotność`, `${current.humidity}%`, true)
      message.channel.send({embed})
  })
}

module.exports.help = {
  name: "weather"
}
