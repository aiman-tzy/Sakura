const chalk = require('chalk')
const fs = require('fs')
global.author = `lynx Multi Device\nJangan Lupa subscribe untuk Update sc terbaru dari kami :)` //ini untuk wm stiker ya kawan
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})