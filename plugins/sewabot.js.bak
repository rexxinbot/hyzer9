let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kamisato = `
╭═══ 〔 SEWA BOT 〕 ════
├⬡ PERMINGGU
├⬡ PERBULAN
├⬡ PERMANENT
└═══════════════
𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗸𝗹𝗶𝗸 𝗽𝗮𝗱𝗮 "𝗟𝗶𝘀𝘁 𝗛𝗮𝗿𝗴𝗮" 𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗹𝗶𝗵𝗮𝘁 𝗹𝗶𝘀𝘁.
╭═══════════════════════
║╭──❉ 〔 𝐕𝐈𝐀 𝐓𝐎𝐏𝐔𝐏 〕 ❉──────
║│➸ *Dana*   : 6282145203493
║│➸ *Gopay*  : 6282145203493
║|➸ *Pulsa*  : 6282145203493
║│➸ *Owner*  : wa.me/6282145203493
║╰─────────────────────
╰═══════════════════════`.trim()
    const button = {
        buttonText: 'List Harga',
        description: kamisato,
        sections:  [{title: "Silahkan di pilih", rows: [
        {title: 'PERMINGGU', description: "Rp.3.000\nSewa bot PERMINGGU.", rowId:".masuk"},
        {title: 'PERBULAN', description: "Rp.5.000\nSewa bot PERBULAN.", rowId:".masuk"},
        {title: 'PERMANENT', description: "Rp.10.000\nSewa bot PERMANENT.", rowId:".masuk"},
        {title: 'Owner', description: "Chat owner nya jika ada perlu.", rowId:".owner"},
        {title: 'Rules', description: "Rules Bot Sabo.", rowId:".snk"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['main']
handler.command = /^(sewa)$/i
handler.help = ['sewa']
module.exports = handler
//R-Txzy
