const fs = require('fs-extra')
const envPath = __dirname + '/.env'
if (fs.existsSync(envPath)) {
  require('dotenv').config({ path: envPath })
  try {
    const raw = fs.readFileSync(envPath, 'utf8')
    for (const line of raw.split(/\r?\n/)) {
      const m = /^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=(.*)$/.exec(line)
      if (!m) continue
      const key = m[1]
      let val = m[2].trim()
      if (!val || /^["'`]/.test(val)) continue
      val = val.replace(/\s+#.*$/, '').trim()
      if (val.includes('#') && (process.env[key] === undefined || val.startsWith(process.env[key]))) {
        process.env[key] = val
      }
    }
  } catch (e) {}
}

global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""
global.email ="saimsamsun789@gmail.com"
global.location="Mukalla,Yemen."

global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Aden";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/Suhail-Md-3.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vb7ydebF1YlYtOCJzu2O";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029Vb7ydebF1YlYtOCJzu2O" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg";
global.caption = process.env.CAPTION || global.caption || "𝑀𝐻𝑆𝑁,505 🩷" 

global.devs = ""
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "967718061225";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "967718061225";

global.style = process.env.STYLE || '0'
global.flush = process.env.FLUSH   || "false";
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = (String(process.env.WELCOME ?? process.env.CAN_WELCOME ?? "").toLowerCase() === "true" ||
                (!process.env.WELCOME && !process.env.CAN_WELCOME && Math.floor(Math.random()*3) === 1))
                ?  "true" : "false" ;

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false",

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false"
global.userImages= process.env.USER_IMAGES || ""
global.waPresence= process.env.WAPRESENCE ||  "null" ;

global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null"

global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null"
global.read_status_from =  process.env.READ_STATUS_FROM  || ""

global.api_smd = "https://api.qasimdev.dpdns.org"
global.scan = "https://suhail-pair.onrender.com";
global.SESSION_ID = process.env.SESSION_ID  || ""
global.TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "";

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.1.0-dev",
  caption : global.caption || "",
  author : process.env.PACK_AUTHER|| "𝑀𝐻𝑆𝑁,505",
  packname: process.env.PACK_NAME || "𝑀𝐻𝑆𝑁,505",
  botname : process.env.BOT_NAME  || "𝑀𝐻𝑆𝑁,505",
  ownername:process.env.OWNER_NAME|| "𝑀𝐻𝑆𝑁,505",
  MsgsInLog: global.MsgsInLog || "false",
  warncount: process.env.WARN_COUNT || 3,
  evalCmd: process.env.EVAL_CMD || "false",
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",
  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  TELEGRAM_BOT_TOKEN: global.TELEGRAM_BOT_TOKEN || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),
};

global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.WAIFU_IM_API_KEY = process.env.WAIFU_IM_API_KEY || "hDHzfR9NFFjbJsn6ut8ayELIsXysd7UH8OXHgmW8";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";
global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file]; require(file); })
