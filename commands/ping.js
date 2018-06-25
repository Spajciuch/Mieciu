
const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  const m = await message.channel.send("Ping? <a:loading:460475336736374787>");
  m.edit(`<a:loading:460475336736374787> Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}
module.exports.help = {
  name: "ping"
}
