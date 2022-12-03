const Discord = require('discord.js');
const config = require("../config.json")
exports.run = async (client, message, args) => {//Pasador Code | Müzik Botu
  
    const play0 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Botla aynı kanalda olmalısın!**")//Pasador Code | Müzik Botu
.setTimestamp()
.setFooter(`${config.footer}`)

    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(play0);
  
    const play1 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Şarkı açmak için lütfen herhangi bir ses kanalına girin!**")
.setTimestamp()//Pasador Code | Müzik Botu
.setFooter(`${config.footer}`)

    if (!message.member.voice.channel) return message.channel.send(play1);

    const play2 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setDescription("**❗️ - Lütfen bir şarkı ismi yazın!**")    //Pasador Code | Müzik Botu
.setTimestamp()
.setFooter(`${config.footer}`)

    if (!args[0]) return message.channel.send(play2);

    client.player.play(message, args.join(" "));
//Pasador Code | Müzik Botu
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['play','oynat','çal','p'],
   permLevel: 0
  };
   
  exports.help = {
   name: 'play',
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