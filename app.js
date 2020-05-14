
const VkBot = require('node-vk-bot-api');
const Markup = require('node-vk-bot-api/lib/markup');
const fs = require('fs');
const bot = new VkBot('token');

let nextTimeTable = fs.readFileSync('parsedTime.txt', 'utf-8');
let currentTimeTable = fs.readFileSync('parsedTime.txt', 'utf-8');
nextTimeTable = JSON.parse(nextTimeTable);
currentTimeTable = JSON.parse(currentTimeTable);



bot.command('/start', (ctx) => {
    ctx.reply(`На эту неделю "/curr номер(009, 115, 032)"
               На след. неделю "/next номер(009, 115, 032)"`);
});



bot.command(/next [0-9][0-9][0-9]/, (ctx) => {
    const num = ctx.match[0].split(' ')[1];
    try {
        bot.sendMessage(ctx.message.user_id, currentTimeTable[num].join('\n'));
    } catch (e) {
        bot.sendMessage(ctx.message.user_id, 'Такого номер нет в расписании. Попробуй снова');
    }
});

bot.command(/curr [0-9][0-9][0-9]/, (ctx) => {
    console.log(ctx);
    const num = ctx.match[0].split(' ')[1];
    try {
        bot.sendMessage(ctx.message.user_id, nextTimeTable[num].join('\n'));

    } catch (e){
        bot.sendMessage(ctx.message.user_id, 'Такого номер нет в расписании. Попробуй снова');
    }
});



bot.startPolling(() => { // Это запускает нашего бота
    console.log('[BOT] Бот успешно запущен!'); // Сделал себе для понятности запустился или нет
});

