const Discord = require("discord.js");
const config = require(`../config.json`)
module.exports.run = async (client, message, args) => {
 message.channel.send(args.join(" ").toUpperCase().replace(/A/g, ":regional_indicator_a: ").replace(/B/g, ":regional_indicator_b: ").replace(/C/g, ":regional_indicator_c: ").replace(/D/g, ":regional_indicator_d: ").replace(/E/g, ":regional_indicator_e: ").replace(/F/g, ":regional_indicator_f: ").replace(/G/g, ":regional_indicator_g: ").replace(/H/g, ":regional_indicator_h: ").replace(/I/g, ":regional_indicator_i: ").replace(/J/g, ":regional_indicator_j: ").replace(/K/g, ":regional_indicator_k: ").replace(/L/g, ":regional_indicator_l: ").replace(/M/g, ":regional_indicator_m: ").replace(/N/g, ":regional_indicator_n: ").replace(/O/g, ":regional_indicator_o: ").replace(/P/g, ":regional_indicator_p: ").replace(/Q/g, ":regional_indicator_q: ").replace(/R/g, ":regional_indicator_r: ").replace(/S/g, ":regional_indicator_s: ").replace(/T/g, ":regional_indicator_t: ").replace(/U/g, ":regional_indicator_u: ").replace(/V/g, ":regional_indicator_v: ").replace(/W/g, ":regional_indicator_w: ").replace(/X/g, ":regional_indicator_x: ").replace(/Y/g, ":regional_indicator_y: ").replace(/Z/g, ":regional_indicator_z: "))
}
module.exports.help = {
	name: "emojify",
	category:"fun"
}