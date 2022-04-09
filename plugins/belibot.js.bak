let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *PERMINGGU* : *Rp.3.000*
╠➥ *PERBULAN*  : *Rp.5.000*
╠➥ *PERMANENT* : *Rp.10.000*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ DANA/GOPAY/PULSA
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 Sabo 〙 ═`.trim(), 'Sabo', 'Menu', '#menu', 'Owner', '#owner', m)
}

handler.command = /^sewabot$/i

module.exports = handler
