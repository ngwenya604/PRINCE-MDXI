const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dQZ1V5cHF3OXk1aERCd20rcmMwZzhrYzQrcnIyR2c1TXZZSGtGbElVaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGhNb29veVNoai9CUkQxZHQ0SmNBMkQvSmlEQUFydlA0dWhacW5ZV2JDND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRTllbkR3TDhTS2tZVUR3YUh2bC94MS93VTVkOUN3N0s4OGZONnlibFY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwUGYyNHFHTXlQTmRsRVpZb1hUS2dsRHozNmpmRlRzckxSb29SbzZWUnkwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBCTXRwanFSTFg2SFE2Nm45SEdudFRhbDJiQnMxa29ubjVvSU5DOUQza0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZPYXJzc3dmbjFxaWZ5cDFXZUhLQ2VuUVp3bksvK0M5V3JGYzRoYWVWQTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENXdXlueGFmbkFpaUYreUVmbXNrQlQ3RjQzTGxmM2pKR1p6QSsxLzAxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTY4eHB5bnFLVkh0V2h2bDNGZ29YZGVTeE9CbG9nc01kUGdQc01GVW5EMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZnYTN0ODdwSG5KSzNXT05jdENGbmlhaUkvczU1Y3BrM3RKVmx1c0d4UEJSdW42elBHSEV4NWlJb3gxUk4vaUFGcTVmZmEwakd3c04zMTlLQTQzY2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODEsImFkdlNlY3JldEtleSI6ImlrWXNQUGNOZEJvUFJOL0hFd2NUYnQ0L0xNWkprb0Z4SDdUaEJNZzBZeVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ino4TjdJb3FrUloyNnJZUGxaTEVRUVEiLCJwaG9uZUlkIjoiZWI2NTJmOTMtNTA4My00ZjhmLTkwODMtZDRjYzlhNjUyZDM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZDbkxpVXlIdjg2eEZXSWZtVVlQdWIrckxsTT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJReEhSSEFlM3pLWHpoN1RXd2s2Mng0RGJ5c1k9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQUJYUVA4R1kiLCJtZSI6eyJpZCI6IjI2Mzc4Mjg5NjEyOTo3MUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmVnbjRjRkVOYXV5TUFHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibUxPOUd1MGc0Rld3dzUzMGtXSW5qa3YxMjFJVUpGUkpqN010RS9sWXhRTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiblppWnZOVjIyaXY0azRKR1k4QTdqdjRrMFVvbkthRTBCOXNIa1BKZncxQzN1VU5oWE9pRFh1Q1NYRTQ0TVVRdmQ4b2RCdk9DOHNVL3NwQXJzaURSRFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkpienVMNDdNYkVLYnVCNFlyM1F2MDZyMzRWam9ML0tXenczZlgySS9WUC96M05adzV3ZHpDRHEzU05FeXdNeVduczEyU25IMUxBU1RLcklENVF3aGhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzgyODk2MTI5OjcxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlppenZScnRJT0JWc01PZDlKRmlKNDVMOWR0U0ZDUlVTWSt6TFJQNVdNVUQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDYwMTYxMDB9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY PRINCE-MDX *",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PRINCE MDX",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
OWNER_NUMBER: process.env.OWNER_NUMBER || "237677224245",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴛᴇᴄʜ  ",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/kzfne8.jpeg",
// add img for alive msg
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
// menu image 
MENU3_IMG: process.env.MENU_IMG || "https://files.catbox.moe/upmwpw.jpg",
// menu image 
RUNTIME_IMG: process.env.RUNTIME_IMG || "https://files.catbox.moe/ykdtkm.jpeg",
// runtime image 
WELCOME_ENABLED: process.env.WELCOME_ENABLED || "true",
    // welcome group members 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "237677224245",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
