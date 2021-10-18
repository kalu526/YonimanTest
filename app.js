require('dotenv').config({path:'.env'});
const Telegraf = require('telegraf');
 {typeof import('telegraf').Telegraf}
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})

bot.hears('Balance', ctx => {
    console.log(ctx.from)
    let BalanceMessage = `👋 Hello %firstname%   💲Your Account Balance is 0 point`;
    ctx.deleteMessage();
bot.telegram.sendMessage(ctx.chat.id, BalanceMessage, {
    reply_markup: {
        inline_keyboard: [
            [{
                    text: "Balance",
                    callback_data: 'Balance'
                },
              
            ],

        ]
    }
})
})
bot.hears('Withdrwa', ctx => {
    console.log(ctx.from)
    let WithdrawMessage = `Hello %firstname%,  Here you can withdraw your earning to your wallet please give us a valid information send your detail in this format not else 👉 Amount In Point And Wallet Address/Mail only Just like This format. Example:- Amount—100 points  Wallet Address/Mail—bank account`;
    ctx.deleteMessage();
bot.telegram.sendMessage(ctx.chat.id, WithdrawMessage, {
    reply_markup: {
        inline_keyboard: [
            [{
                    text: "Withdraw",
                    callback_data: 'Withdraw'
                },
              
            ],

        ]
    }
})
})
bot.hears('Invite', ctx => {
    console.log(ctx.from)
    let InviteMessage = `🤝 Kalu Here is Your Invitation Link, 
    Share it With Friends To Earn Money https://t.me/YoniManTest_Bot?start=r0995913904        
    👉There is/are Currently 0 Users in Your DownLine`;
    ctx.deleteMessage();
bot.telegram.sendMessage(ctx.chat.id, InviteMessage, {
    reply_markup: {
        inline_keyboard: [
            [{
                    text: "Invite",
                    callback_data: 'Invite'
                },
              
            ],

        ]
    }
})
})
bot.hears('ImportantMessage', ctx => {
    console.log(ctx.from)
    let ImportantMessage = `Dear, User By using our Bot you can earn from referring our Bot to your friend ,         
    ✍️ if a user join our bot via your link, your account will be credited by 1 point, currently 1 points=$0.01. 
    The Minimum Amount you can withdraw is $100 We currently accept Bitcoins as payment.
    Do Not! Create artificial reference else you will be banned`;
    ctx.deleteMessage();
bot.telegram.sendMessage(ctx.chat.id, ImportantMessage, {
    reply_markup: {
        inline_keyboard: [
            [{
                    text: "Balance",
                    callback_data: 'Balance'
                },
              
            ],

        ]
    }
})
})

bot.action('Balance', ctx => {
    bot.telegram.sendText(ctx.chat.id, {
        source: "Balance"
    })

})

//method that returns image of a cat 

bot.action('Invite', ctx => {
    bot.telegram.sendText(ctx.chat.id, {
        source: "Invite"
    })

})

bot.hears('phone', (ctx, next) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'send us bank account number?', requestaccountKeyboard);

})

//method for requesting user's location

bot.hears("WithdraPoint", (ctx) => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'send us the withdraw point ?', requestamountKeyboard);
})

const requestPhoneKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "Amount",
                request_contact: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }
};

const requestLocationKeyboard = {
    "reply_markup": {
        "one_time_keyboard": true,
        "keyboard": [
            [{
                text: "account_number",
                request_location: true,
                one_time_keyboard: true
            }],
            ["Cancel"]
        ]
    }

}

bot.launch();