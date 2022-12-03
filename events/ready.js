const config = require("../config.json")
const log = message => {
  //Pasador Code | Müzik Botu
    console.log(`${message}`)
}

module.exports = async client => {
  
client.user.setActivity(`GamerBros | Müzik Botu`, {//Pasador Code | Müzik Botu
type: "PLAYING",
  url: "https://www.twitch.tv/cugulisst"})
    log(`[BOT] Aktif, Komutlar Yüklendi.`)
  }
//Pasador Code | Müzik Botu