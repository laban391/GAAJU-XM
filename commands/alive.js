const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const aliveMessage = `
╭─❖ 「 ${settings.botName || "GaajuBot-Mini"} 」 ❖─⬣
│ 🤖 Status : ONLINE ✅
│ ⚡ Version : ${settings.version || "4.0.0"}
│ 🌐 Mode : ${settings.mode || "Private"}
╰──────────────⬣

┌─〔 Features 〕
│ • Group Tools
│ • Antilink / Antispam
│ • Fun & Games
│ • AI Commands
└─────────────

📌 Use *.menu* to explore commands
⚡ Fast • Smooth • Reliable
`;

        await sock.sendMessage(chatId, {
            text: aliveMessage,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363406588763460@newsletter',
                    newsletterName: settings.botName || 'Gaaju-Bots',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, {
            text: `🤖 ${settings.botName || "GaajuBot-Mini"} is online!`
        }, { quoted: message });
    }
}

module.exports = aliveCommand;
