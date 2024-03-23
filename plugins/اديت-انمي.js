let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "✨",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['ايديت_زو-رو']
handler.tags = ['anime']
handler.command = /^(اديت)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/0cb7efa196ee69cfefbc9.mp4',
'https://telegra.ph/file/c3a1a52e91f29695a314c.mp4',
'https://telegra.ph/file/908fd35689cddc1adff4a.mp4',
'https://telegra.ph/file/b41dc197b1b5ff4ab187f.mp4',
'https://telegra.ph/file/112a86d291a6940495ea2.mp4',
'https://telegra.ph/file/16adf7c719b6824664539.mp4',
'https://telegra.ph/file/dea7c92444adc87a62f26.mp4',
'https://telegra.ph/file/c154d8d4b2808ead62417.mp4',
'https://telegra.ph/file/3f860055a78d813df6c5c.mp4',
'https://telegra.ph/file/ab4c5694e0b631cf4bc86.mp4',
'https://telegra.ph/file/ed3a1d6d419369192852b.mp4',
'https://telegra.ph/file/33bfe672f00f01fd6d35e.mp4',
'https://telegra.ph/file/788a655bab547f6751fd6.mp4',



'',
]
