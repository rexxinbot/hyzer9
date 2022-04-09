let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/tag.webp')
conn.fakeReply(m.chat, stc, '6282145203493@s.whatsapp.net', '*Ngapain Tag Owner Gw Deck, Mau Nyewa Bot?*')
}
handler.customPrefix = /^(@6282145203493)$/i
handler.command = new RegExp

module.exports = handler
