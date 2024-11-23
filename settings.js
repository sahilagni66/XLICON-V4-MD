//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                    𝗫𝗟𝗜𝗖𝗢𝗡-𝗩𝟰-𝗠𝗗  𝐁𝐎𝐓                                                //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//                                                                                                      //
//                                                                                                      //      
//               ██╗  ██╗██╗     ██╗ ██████╗ ██████╗ ███╗   ██╗      ██╗   ██╗██╗  ██╗                  //              
//                ██╗██╔╝██║     ██║██╔════╝██╔═══██╗████╗  ██║      ██║   ██║██║  ██║                  //
//                ╚███╔╝ ██║     ██║██║     ██║   ██║██╔██╗ ██║█████╗██║   ██║███████║                  // 
//                ██╔██╗ ██║     ██║██║     ██║   ██║██║╚██╗██║╚════╝╚██╗ ██╔╝╚════██║                  // 
//               ██╔╝ ██╗███████╗██║╚██████╗╚██████╔╝██║ ╚████║       ╚████╔╝      ██║                  //
//                ═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝        ╚═══╝       ╚═╝                  // 
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : XLICON-V4-MD
//  * @author : salmanytofficial
//  * @youtube : https://www.youtube.com/@s4salmanyt
//  * @description : XLICON-V4 ,A Multi-functional whatsapp user bot.
//*
//*
//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//Instagram: ahmmikun
//Telegram: t.me/ahmmitech
//GitHub: @salmanytofficial
//WhatsApp: +923184070915
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon
//   * Created By Github: DGXeon.
//   * Credit To Xeon
//   * © 2024 XLICON-V3-MD.
// ⛥┌┤
// */

const fs = require('fs');
const chalk = require('chalk');

//owmner v card
global.ytname = "YT: S4 SALMAN YT" //ur yt chanel name
global.socialm = "GitHub: salmanytofficial" //ur github or insta name
global.location = "Pakistan, Lahore, Sabzazar" //ur location

//new
global.botname = 'Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ' //ur bot name
global.ownernumber = ['918127875972'] //ur owner number, dont add more than one
global.ownername = 'Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ' //ur owner name
global.websitex = "https://youtube.com/@s4salmanyt"
global.wagc = "https://whatsapp.com/channel"
global.themeemoji = '⛩'
global.wm = "Shׁׅ֮ɑׁׅ֮hׁׅ֮ꭈׁׅυׁׅƙׁׅ֑hׁׅ֮ ƙׁׅ֑hׁׅ֮ɑׁׅ֮ꪀׁׅ."
global.botscript = 'https://github.com/salmanytofficial/XLICON-V4-MD' //script link
global.packname = "Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ"
global.author = "Shׁׅ֮ɑׁׅ֮hׁׅ֮ꭈׁׅυׁׅƙׁׅ֑hׁׅ֮ ƙׁׅ֑hׁׅ֮ɑׁׅ֮ꪀׁׅ"
global.creator = "918127875972@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["918127875972"] // Premium User

//bot sett
global.typemenu = 'v2' // menu type 'v1' => 'v12'
global.typereply = 'v4' // reply type 'v1' => 'v4'
global.autoblocknumber = '212' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.antidelete = false //set anti delete 


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']
global.tempatDB = 'database.json'



global.limit = {
	free: 100,
	premium: 999,
	vip: 'VIP'
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	error: 'Error!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
	done: 'Done'
}

global.bot = {
	limit: 0,
	uang: 0
}

global.game = {
	suit: {},
	menfes: {},
	tictactoe: {},
	kuismath: {},
	tebakbom: {},
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
