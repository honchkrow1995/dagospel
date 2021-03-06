const express = require('express');
const router = express.Router();
const Telegraf = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN)

router.get('/', function (req, res, next) {
      bot.start((ctx) => {
        console.log('started:', ctx.from.id)
        return ctx.reply('Welcome!')
      })
      
      bot.hears('hola', (ctx) => {
          console.log('ctx id after hi:', ctx);
          ctx.reply('Hola hola, ')})
      bot.command('help', (ctx) => {console.log('user requires help', ctx.from);ctx.reply('Try send a sticker!')})
      bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy!'))
      bot.on('sticker', (ctx) => ctx.reply('👍'))
      
      bot.startPolling();
      res.send('Telegraf is hearing!');
});

module.exports = router;
