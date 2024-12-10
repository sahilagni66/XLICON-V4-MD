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

//~~~~~~~~~~~~~~~< SETTINGS >~~~~~~~~~~~~~~~\\
const fs = require('fs');
const chalk = require('chalk');


//~~~~~~~~< Owner Information>~~~~~~~~~~~~~~\\
global.ytname = process.env.YT_NAME || "Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ";

global.socialm = process.env.GITHUB_USERNAME || "Shׁׅ֮ɑׁׅ֮hׁׅ֮ꭈׁׅυׁׅƙׁׅ֑hׁׅ֮ Khׁׅ֮ɑׁׅ֮ꪀׁׅ";

global.location = process.env.LOCATION || "India";


//~~~~~~~~<Session and Bot Details>~~~~~~~~~~~~~\\
global.SESSION_ID = process.env.SESSION_ID || '';

global.botname = process.env.BOT_NAME || 'Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ';

global.ownernumber = [process.env.OWNER_NUMBER || '918127875972'];

global.ownername = process.env.OWNER_NAME || 'Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ';


//~~~~~~<Website and Social Links>~~~~~~~~~~\\
global.websitex = process.env.WEBSITE_URL || "https://youtube.com/";

global.wagc = process.env.WHATSAPP_CHANNEL || "https://whatsapp.com";


//~~~~~~~~<Theme and Miscellaneous>~~~~~~~~~~\\
global.themeemoji = process.env.THEME_EMOJI || '⛩';

global.wm = process.env.WATERMARK || "Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ.";

global.botscript = process.env.SCRIPT_LINK || 'https://github.com/sahilagni66/XLICON-V4-MD';

global.packname = process.env.PACK_NAME || "Fꫀׁׅܻᥣׁׅ֪ꪱׁׅ᥊ׁׅ";

global.author = process.env.AUTHOR_NAME || "Shׁׅ֮ɑׁׅ֮hׁׅ֮ꭈׁׅυׁׅƙׁׅ֑hׁׅ֮ Khׁׅ֮ɑׁׅ֮ꪀׁׅ";

global.creator = process.env.CREATOR_NUMBER || "918127875972@s.whatsapp.net";


//~~~~~~~~~~~~~<Bot Settings>~~~~~~~~~~~~~~~\\
global.xprefix = process.env.PREFIX || '.';

global.premium = [process.env.PREMIUM_NUMBER || '923184070915'];

global.typemenu = process.env.MENU_TYPE || 'v1';

global.typereply = process.env.REPLY_TYPE || 'v1';

global.autoblocknumber = process.env.AUTOBLOCK_COUNTRYCODE || '212';

global.antiforeignnumber = process.env.ANTIFOREIGN_COUNTRYCODE || '91';

global.antidelete = process.env.ANTI_DELETE === 'true';


global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆'];


global.tempatDB = process.env.DB_FILE || 'database.json';


global.limit = {
  free: parseInt(process.env.FREE_LIMIT || 100),
  premium: parseInt(process.env.PREMIUM_LIMIT || 999),
  vip: process.env.VIP_LIMIT || 'VIP'
};


global.uang = {
  free: parseInt(process.env.FREE_UANG || 10000),
  premium: parseInt(process.env.PREMIUM_UANG || 1000000),
  vip: parseInt(process.env.VIP_UANG || 10000000)
};


global.mess = {
  error: process.env.ERROR_MESSAGE || 'Error!',
  nsfw: process.env.NSFW_MESSAGE || 'Nsfw is disabled in this group, Please tell the admin to enable',
  done: process.env.DONE_MESSAGE || 'Done'
};


global.bot = {
  limit: 0,
  uang: 0
};


global.game = {
  suit: {},
  menfes: {},
  tictactoe: {},
  kuismath: {},
  tebakbom: {},
};


//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\
// Watch for file changes
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Updated ${__filename}`));
  delete require.cache[file];
  require(file);
});
