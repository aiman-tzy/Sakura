const chalk = require('chalk')
const fs = require('fs')

//SELEBIHNYA JIKA MAU SETTING ADA DI FOLDER JS 

//api ibeng
global.apiibeng = 'HMM5Zpz5Cr' // letakan apikey kalian daftar dlu ya
// •> https://api.ibeng.tech
//lalu klian daftar jika sudah daftar di dashboard ada tulisan apikey kalian salin aja Paste di 'APIKEY'





global.owner = ['60102810046'] 
global.ownernomer = "60102810046"
global.socialmedia = "IG: aiman1_23"
global.yutub = "-"
global.lokasi = "Negeri Sembilan"
global.sakuraurl = 'https://lenttobs.xyz'
global.packgename = "by" 
global.author = "lynx" 
global.title = 'lynxmd'
global.body = 'lynx Bot'
global.welcome = false //false mati true nyala
global.left = false //false mati true nyala
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})