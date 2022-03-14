let handler =  m => m.reply(`
╭─「 Donasi 」
│ [08992669817]
│ • Dana
│ • Gopay
│ • Ovo
╰────

╭─「 Donasi 」
│ [085813262667]
│ • Pulsa
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
