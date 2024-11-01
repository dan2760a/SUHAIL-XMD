const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254768307613,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_21_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1MCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTUzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExLFxuICAgICAgICAzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyNixcbiAgICAgICAgODYsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICA1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDM3LFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMixcbiAgICAgICAgMTgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NixcbiAgICAgICAgOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5NixcbiAgICAgICAgMjAwLFxuICAgICAgICA3NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3MixcbiAgICAgICAgNjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzAsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFPU2NaVVRhdFZ6WDEvVWdwWXNUVTZXUE8rMk9XQmMzWHFVZmN6YjZWUmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFqVFl5NzFBUldhSHVVZHlzSFZma3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiOThkZjYwNDYtMDQ5My00NGQxLWE0MjctZjU2NTEwNDg4MWI1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDIyMCxcbiAgICAgIDI0NCxcbiAgICAgIDEyMSxcbiAgICAgIDExNixcbiAgICAgIDE4MixcbiAgICAgIDgwLFxuICAgICAgMTg3LFxuICAgICAgNTksXG4gICAgICA0NixcbiAgICAgIDE0NSxcbiAgICAgIDEyMCxcbiAgICAgIDE3MixcbiAgICAgIDE0MixcbiAgICAgIDIwNSxcbiAgICAgIDIxMCxcbiAgICAgIDcxLFxuICAgICAgMjA0LFxuICAgICAgMTQ0LFxuICAgICAgMTA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAwLFxuICAgICAgMTQwLFxuICAgICAgMTQxLFxuICAgICAgMTMwLFxuICAgICAgOTMsXG4gICAgICAyNDcsXG4gICAgICA3NixcbiAgICAgIDEwMixcbiAgICAgIDg4LFxuICAgICAgMTgwLFxuICAgICAgMTA4LFxuICAgICAgMTgzLFxuICAgICAgMjE0LFxuICAgICAgODYsXG4gICAgICAxMDIsXG4gICAgICAxMDgsXG4gICAgICAxODYsXG4gICAgICAxNTQsXG4gICAgICAxNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKemJ0L1lERVAvQWpya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhOWnJ0bzdlbzVEOFlvMmFCb2E2QS9PSm0rZ3BiQ0w3SGMzUVNQQmF5UWc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSlI5OUM1UHVoVmxYKy8yTUd6VVZGOEFwd2lEMXhxUmRKZWFFM1RuN1dYTGdoOTZKeGt6NFoyeXpWWUdwcDhXNG5xTWkwS0Nyd3hpSXgrYlpjczluQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSmd6c3VIQmFLZnk0R2tUdDBBblJMTFpVcXNZY05zK0crNVNaMms0UHUvM0xuZi9ieGtnbXU2MFRXNTViWi9GbTAzYXA1Zi9qYkx6cnNDbXBhRmRSaEE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NjgzMDc2MTM6NzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyOTA1NTQ3MTMzMDE2Ojc2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY4MzA3NjEzOjc2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAzODgxMDBcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
