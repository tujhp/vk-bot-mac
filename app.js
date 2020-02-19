
const VkBot = require('node-vk-bot-api');
const Markup = require('node-vk-bot-api/lib/markup');

const bot = new VkBot('81e6fa548a1718f712ef3642e0b449d38033b4cd3839979dd9dc569ba5ae7d00ace901382aa2faf890915');

bot.command('/start', (ctx) => {
    ctx.reply('Выбери на какую неделю ты хочешь узнать рассписание', null, Markup
        .keyboard([
            [
                Markup.button('/расписание на эту неделю', 'primary'),
            ],
            [
                Markup.button('/расписание на след. неделю', 'positive'),
            ],
        ]),
    )
});



bot.command('/расписание на эту неделю', (ctx) => {
    console.log(ctx);
    bot.sendMessage(ctx.message.user_id, 'Рассписание на эту неделю', ['photo-109859315_457239018','photo-109859315_457239018']);
});

bot.command('/расписание на след. неделю', (ctx) => {
    console.log(ctx);
    bot.sendMessage(ctx.message.user_id, 'Расписание на следующую неделю', ['photo-109859315_457239020']);
});



bot.startPolling(() => { // Это запускает нашего бота
    console.log('[BOT] Бот успешно запущен!'); // Сделал себе для понятности запустился или нет
});

