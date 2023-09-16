const TelegramBot = require('node-telegram-bot-api');

// Telegram 봇 토큰을 여기에 추가합니다.
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// 봇을 생성합니다.
const bot = new TelegramBot(token, { polling: true });

// '/start' 명령어에 대한 핸들러를 추가합니다.
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '불편사항을 제출하려면 /submit 명령어를 사용하세요.');
});

// '/submit' 명령어에 대한 핸들러를 추가합니다.
bot.onText(/\/submit/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '불편사항을 입력해주세요.');
});

// 사용자로부터 메시지를 받는 핸들러를 추가합니다.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const messageText = msg.text;

  if (messageText === '/submit') {
    bot.sendMessage(chatId, '불편사항을 입력해주세요.');
  } else {
    // 여기서 메시지를 처리하고 필요한 작업을 수행합니다.
    // 예를 들어, 불편사항을 저장하거나 처리할 수 있습니다.
    // 이 예제에서는 단순히 사용자에게 다시 응답합니다.
    bot.sendMessage(chatId, `당신의 불편사항: ${messageText}`);
  }
});

// 봇이 실행 중인지 확인합니다.
console.log('봇이 실행 중입니다.');
