const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_08_50_11_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDgxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA2NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNCxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjAsXG4gICAgICAgIDM0LFxuICAgICAgICA1OSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAwLFxuICAgICAgICA2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAwLFxuICAgICAgICA3MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDM2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDUwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMixcbiAgICAgICAgNDMsXG4gICAgICAgIDkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTksXG4gICAgICAgIDY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODksXG4gICAgICAgIDk1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgODUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA2LFxuICAgICAgICA5NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA5NixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDczLFxuICAgICAgICA2LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTM1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImFnT1d4Q1lqZFpIaHBjV1dxeUh2VnF5RjVzRUtiK1phNVR1eFhuaWdpbzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzNDkyMTQ3MTAyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMTdCMkM3MjFEMkQxNTVBRUQwRThDQzc5MEY1NjhENlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzIzNTE4MTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVGJMMExfdXNTYnUwWm5sbjNjLUhaZ1wiLFxuICBcInBob25lSWRcIjogXCI0YTJhYWRhMS00MDRjLTRkMDctYjE3MS0xMDAwZWUwYzRhNTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgMjIsXG4gICAgICAxNDYsXG4gICAgICAxNjcsXG4gICAgICAyMzksXG4gICAgICA2NCxcbiAgICAgIDgzLFxuICAgICAgMjMyLFxuICAgICAgMTk1LFxuICAgICAgMTEwLFxuICAgICAgMjQ5LFxuICAgICAgMTIzLFxuICAgICAgMTg5LFxuICAgICAgMTU4LFxuICAgICAgMjE0LFxuICAgICAgNDAsXG4gICAgICAyMDMsXG4gICAgICA3LFxuICAgICAgMjI3LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICA3MyxcbiAgICAgIDE4NyxcbiAgICAgIDc5LFxuICAgICAgMTk5LFxuICAgICAgMTYyLFxuICAgICAgMTU3LFxuICAgICAgMjE1LFxuICAgICAgMTc5LFxuICAgICAgNSxcbiAgICAgIDIwMCxcbiAgICAgIDIzLFxuICAgICAgMixcbiAgICAgIDE0NSxcbiAgICAgIDE3OCxcbiAgICAgIDI0OSxcbiAgICAgIDkyLFxuICAgICAgMjAxLFxuICAgICAgMyxcbiAgICAgIDIwNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKTjNZWVZNWFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDkyMTQ3MTAyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZmw8J2agvCdmbjwnZm1IPCdmoLwnZm38J2ZtPCdmbfwnZqJ8J2ZsPCdmbPwnZmwXCIsXG4gICAgXCJsaWRcIjogXCIxNzE1MDY5Njk2NjU2Mjg6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYS9udllGRUxTdWhyb0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIllGdUdjemdEOVRad20rQW1UcU00NnU4VFA0bW44d3dTK0NrdUZ5Qzd4V1k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaGtrVUFlNTZoWkZkcGZpSFZrRW5NRkNZV0Q2bmdNWGZPb3g1WnE0ZjNTNVlXUXJJYjRrTkc4TUZnNUtKV2dOdURscnpZUG9yUTdHS1plR20wS21wREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmMxblpWSEhHdE03VkhwQStaMTFseUpOYTFhR3dvaUcxbUVBZ2hkL1ROZ2FBQm9QSnRrYWFDUHgvN1F5R0RjM3BNZmw0YXNLeWcvTGVieDZhMU9raGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDkyMTQ3MTAyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMzUxODAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSjUyXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKNTIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJKQzgweHg0RkxqbnhZT2toYmkvNWFidlNJNjBKbXBYeUdwSi9yckVERkxvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTAxNDA4ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzIzMzYzNDQ2NDZcIn0iCn0="  // PUT your SESSION_ID 


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
