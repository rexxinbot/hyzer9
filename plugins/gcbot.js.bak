let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ [ GRUB BOT ] ❉──
║│➸ *GROUP OWNER*
║│➸ https://chat.whatsapp.com/HKNdgk6CV1i06b9ArQ8EjP
║│➸ *GROUP BOT*
║│➸ https://chat.whatsapp.com/KG1QdHJ3qkB5QlFW0KeNNJ
║╰───────────────
╰══════════════════

`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GRUB SIRAD')).buffer(), ext, 'Sabo', 'SIAP BANG🗿', 'AUTO JOIN', 'Donasi', '.donasi', m)

}
handler.help = ['gcbot']
handler.tags = ['main']
handler.command = /^(gcbot)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
