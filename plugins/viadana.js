let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
╠═〘 PEMBAYARAN 〙 ═
╠═ Untuk Pembayaran Via Gopay
╠➥ *6281317549796*
║- Owner Bot:
║- wa.me/6281317549796
╠═〘 Rexxin 〙 ═
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Sewa Bot*', 'status@broadcast') 
}
handler.help = ['viagopay']
handler.tags = ['info']
handler.command = /^viadigi$/i

module.exports = handler
