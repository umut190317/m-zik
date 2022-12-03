const Discord = require('discord.js');
const config = require("../config.json")
exports.run = function(client, message) {//Pasador Code | Müzik Botu
 
 const help = new Discord.MessageEmbed()
  .setAuthor(`${message.client.user.username}`, message.client.user.avatarURL)
  .setColor('RED')
  .addField('Müzik Komutları',`

  **${config.prefix}play <müzikismi>**: İstenilen şarkıyı çalar.
  **${config.prefix}pause**: Şarkıyı durdurur.
  **${config.prefix}resume**: Durdurulan şarkıyı devam ettirir.
  **${config.prefix}loop**: Şarkıyı tekrardan oynatır.
  **${config.prefix}skip**: Varsa listedeki diğer şarkılara geçer.
  **${config.prefix}stop**: Şarkıyı durdurur. 
  **${config.prefix}np**: Çalan şarkıyı gösterir.
  **${config.prefix}list**: Şarkıları gösterir.
  **${config.prefix}mix**: Şarkıları karıştırır.
  **${config.prefix}ping**: Botun gecikme süresini gösterir.
       `)
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)//Pasador Code | Müzik Botu
  .setThumbnail("https://cdn.discordapp.com/attachments/929746406502191115/929748375501414430/pasador-pp.png")
  .setImage("https://cdn.discordapp.com/attachments/929746406502191115/929748298959577138/pasador-banner.png") 
   return message.channel.send(help).catch(console.error);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','yardim'],//Pasador Code | Müzik Botu
 permLevel: 0
};
 
exports.help = {
 name: 'help',
 description: 'botun gecikme süresini gösterir',
 usage: 'prefix+ping'//Pasador Code | Müzik Botu
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