const Discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message) => {

    
    const play0 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Botla aynı kanalda olmalısın!**")//Pasador Code | Müzik Botu
.setTimestamp()
.setFooter(`${config.footer}`)

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(play0);
    
    const pause1 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Lütfen bir sesli kanala girin!**")//Pasador Code | Müzik Botu
.setTimestamp()
.setFooter(`${config.footer}`)

if (!message.member.voice.channel) return message.channel.send(pause1);

const pause2 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Durdurmak için bir şarklı ekleyin!**")
.setTimestamp()
.setFooter(`${config.footer}`)

    if (!client.player.getQueue(message)) return message.channel.send(pause2);

 const pause3 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`✔️ - ${client.player.getQueue(message).playing.title} isimli şarkı başarıyla durduruldu!`)
.setTimestamp()
.setFooter(`${config.footer}`)
    
    client.player.pause(message);

    message.channel.send(pause3);

};//Pasador Code | Müzik Botu

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['pause','duraklat'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'pause',
   description: 'botun gecikme süresini gösterir',
   usage: 'prefix+ping'
  };

//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu

//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
//Pasador Code | Müzik Botu
