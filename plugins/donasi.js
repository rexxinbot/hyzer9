let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*Dana*_ : 
║│- 6281317549796
║│
║│➸ _*Gopay*_ : 
║│- 6281317549796
║│
║│➸ _*Pulsa*_: 
║│- 6281317549796
║│
║│➸ _*OWNER*_
║│- wa.me/6281317549796
║╰────────────
╰═══════════════
`.trim(), 'HUBUNGI OWNER SEBELUM BERDONASI!', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
