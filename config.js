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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255612503979";




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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,255xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,255xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "255xxxxxxxx,255xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_19_12_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICA3OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDYxLFxuICAgICAgICA5MixcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzMixcbiAgICAgICAgODYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNyxcbiAgICAgICAgNixcbiAgICAgICAgMTg0LFxuICAgICAgICAzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgODYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTExLFxuICAgICAgICA5NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTIzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQ3LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjE2LFxuICAgICAgICA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDM2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyOCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkwLFxuICAgICAgICA1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjgsXG4gICAgICAgIDIyLFxuICAgICAgICA4MyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlVVNvL0w0S3hUUHlkNTFuMllpZlcwNVdhMU56WnlaTDNlSG5MSitpY3dFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0RFk0U0tBRVRKNnRNa3ppZkZMYWRRXCIsXG4gIFwicGhvbmVJZFwiOiBcImI0ODYyMWI1LWZjNjktNGM3Mi04NGRkLTY5NDU5MjI3NDcxN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDEyMCxcbiAgICAgIDk1LFxuICAgICAgNjUsXG4gICAgICAyMDcsXG4gICAgICAyNDgsXG4gICAgICAxOTksXG4gICAgICAyMzcsXG4gICAgICAxNTgsXG4gICAgICAxMzcsXG4gICAgICAxMSxcbiAgICAgIDgyLFxuICAgICAgNyxcbiAgICAgIDE1NCxcbiAgICAgIDIyNSxcbiAgICAgIDIzMyxcbiAgICAgIDE4LFxuICAgICAgMyxcbiAgICAgIDIxNixcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMixcbiAgICAgIDg5LFxuICAgICAgNDYsXG4gICAgICAxOTEsXG4gICAgICAzOCxcbiAgICAgIDczLFxuICAgICAgMjEwLFxuICAgICAgMTc3LFxuICAgICAgNDksXG4gICAgICAzOCxcbiAgICAgIDEwMCxcbiAgICAgIDYzLFxuICAgICAgOTcsXG4gICAgICA5OCxcbiAgICAgIDIyNyxcbiAgICAgIDUsXG4gICAgICAxNjQsXG4gICAgICAxMjcsXG4gICAgICAxOTIsXG4gICAgICA4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSWVhKTjNOSlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjEyNTAzOTc5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZWe8J2Vm/CdlZbwnZWj8J2VpvCdlZ7wnZWS8J2Vn/CdlZpf8J2VoPCdlZhcIixcbiAgICBcImxpZFwiOiBcIjE0MjI1NDUxNzkwMzg2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHkzOS9zQkVJMkR5N29HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDYVFQbERDc0FnekFoUXZPYVRJTkM1RlMzSFpCUjJMWDErQWRyb1lYblZrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZBZnBodmZjclBJU2VYK2NCMzB5b0Y1b3YvZjZPWVhmZDRVQTRkbklneDZ4WGd3QkEzTnVQWk1Td1dQa25DOWNqYkVJTSt5b1hPVlBTVEZYcGtOQkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNMNFZwTzQwOFJvd3hMd0xoNjltSHZCL0xJNXhQa3FDQkRBeUZONmdXblRkY0FESlRqRjJHYjRTQjJhLzFrQ2hKVFFnTC80OXl0aFlDVnM4OTBRY0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTYxMjUwMzk3OToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDc2NzYwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRTkxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFOTEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI3TGpSZThlWU5BYkdZdUtoclNOU1VKVTBZbEgrWXJCOVlFRk5YMVRCM280PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUyODM0MjAxMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNDc2NzYyMzE1XCJ9Igp9"  // PUT your SESSION_ID 


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
  //alwaysonline:process.env.WAPRESENCE|| "recording", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
