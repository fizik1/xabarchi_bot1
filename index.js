const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "5635180552:AAFso92cvkzDQ0v-00wZCyr4qowKUn0XFkw",
  hemisToken = "dpbJRafHgNO28kk30iU_0XdAgOziHWTo",
  url1 = "https://student.samdu.uz/rest/v1/data/employee-list",
  url2 = "https://student.samdu.uz/rest/v1/data/schedule-list";

let resultByName = "",
  keyboard = [],
  employeeId = "",
  scheduleData = "";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text == "/start") {
    bot.sendMessage(chatId, "Ismingizni kiriting");
  } else {
    await TeacherName(msg.text, msg);
  }
});

bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let text;

  resultByName.forEach((item, index) => {
    if (action == index) {
      text = item.full_name;
      employeeId = item.id;

      TeacherData(employeeId, opts)
    }
  });

  // if (action === '1') {
  //   text = 'You hit button 1';
  // }

  
});

async function TeacherName(name, msg) {
  try {
    await axios
      .get(url1, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + hemisToken,
        },
        params: {
          type: "teacher",
          search: name,
        },
      })
      .then((res) => {
        if (res.data.data.pagination.totalCount != 0) {
          resultByName = res.data.data.items;
          res.data.data.items.forEach((element, index) => {
            keyboard.push([{ text: element.full_name, callback_data: index }]);
          });
          var options = {
            reply_markup: JSON.stringify({
              inline_keyboard: keyboard,
            }),
          };
          bot.sendMessage(msg.chat.id, "answer.", options);
          keyboard = [];
        } else
          bot.sendMessage(
            msg.chat.id,
            "Ma'lumot topilmadi, qayta kiritib ko'ring"
          );
      });
  } catch (error) {
    console.log(error);
  }
}

async function TeacherData(id, opts) {
  try {
    await axios
      .get(url2, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + hemisToken,
        },
        params: {
          limit: 200,
          _employee: id,
        },
      })
      .then((res) => {
        if (res.data.data.pagination.totalCount != 0) {
          scheduleData = res.data.data.items;
          scheduleData.forEach((item, index)=>{
            console.log(index, item);
          })
          bot.editMessageText("Bot muvaffaqiyatli ishga tushdi", opts);
        } else bot.editMessageText("Darslar topilmadi!", opts);
      });
  } catch (error) {
    console.log(error);
  }
}
