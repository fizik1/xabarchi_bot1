const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");

const token = "5635180552:AAFso92cvkzDQ0v-00wZCyr4qowKUn0XFkw",
  hemisToken = "dpbJRafHgNO28kk30iU_0XdAgOziHWTo",
  url1 = "https://student.samdu.uz/rest/v1/data/employee-list",
  url2 = "https://student.samdu.uz/rest/v1/data/schedule-list";

let resultByName = "",
  keyboard = [],
  employeeId = "",
  scheduleData = "",
  year = 0, month = 0, day = 0, today = 0, kunlikDarslarSoat = new Set(), kunlikDarslar = [], morningMessage = ''
year = new Date().getFullYear()
month = new Date().getMonth()
day = new Date().getDate()
today = new Date(year, month, day).valueOf()

setInterval(() => {
  year = new Date().getFullYear()
  month = new Date().getMonth()
  day = new Date().getDate()
  today = new Date(year, month, day)
}, [3600000])


const bot = new TelegramBot(token, { polling: true });
bot.on("polling_error", (msg) => console.log(msg));

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});


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

      TeacherData(employeeId, opts, msg);
    }
  });
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
          bot.sendMessage(msg.chat.id, "Tanlang", options);
          keyboard = [];
        } else
          bot.sendMessage(
            msg.chat.id,
            "Ma'lumot topilmadi, qayta kiritib ko'ring"
          );
      });
  } catch (error) {
    throw error
  }
}

async function TeacherData(id, opts, msg) {
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
          scheduleData.forEach((element, index) => {
            if (new Date(element.lesson_date * 1000).toLocaleDateString() == new Date(today).toLocaleDateString()) {
              kunlikDarslarSoat.add(element.lessonPair.start_time)
              kunlikDarslar.push(element)
            }
          })

          kunlikDarslarSoat.forEach((element) => {
            morningMessage += `
        
<b style="color:blue;text-align:center">🕰${element}</b>`
            kunlikDarslar.forEach((item, key) => {
              if (item.lessonPair.start_time == element) {
                morningMessage += `
📎<b>Fan</b>: ${item.subject.name}
       <b>Fakultet</b>: ${item.faculty.name}
       <b>Guruh</b>: ${item.group.name}
       <b>Xona</b>: ${item.auditorium.name}
       <b>Dars turi</b>: ${item.trainingType.name}
       <b>Dars sanasi</b>: ${new Date(item.lesson_date*1000).toLocaleDateString()}
       <b>Dars vaqti</b>: ${item.lessonPair.start_time}-${item.lessonPair.end_time}`
              }
            })
          })
          bot.editMessageText("Bot muvaffaqiyatli ishga tushdi", opts);
          bot.sendMessage(msg.chat.id, `Bugun <b>${kunlikDarslarSoat.size}</b> para darsingiz bor ${morningMessage}`, { parse_mode: 'HTML' })
          morningMessage = ''

          setInterval(() => {
            let hour = new Date().getHours(),
              minut = new Date().getMinutes();
            console.log(`${String(100+hour).slice(-2)}:${String(100+minut).slice(-2)}`);
            kunlikDarslar.forEach(element => {
              if (element.lessonPair.end_time == `${String(100+hour).slice(-2)}:${String(100+minut).slice(-2)}`) {
                bot.sendMessage(msg.chat.id, `Dars tugadi`)
              }
            });
            if (`${hour % 100}:${minut % 100}` == `${String(108).slice(-2)}:${String(100).slice(-2)}`) {
              kunlikDarslarSoat.forEach((element) => {
                morningMessage += `
                  
<b style="color:blue;text-align:center">🕰${element}</b>`
                kunlikDarslar.forEach((item, key) => {
                  if (item.lessonPair.start_time == element) {
                    morningMessage += `
📎<b>Fan</b>: ${item.subject.name}
        <b>Fakultet</b>: ${item.faculty.name}
        <b>Guruh</b>: ${item.group.name}
        <b>Xona</b>: ${item.auditorium.name}
        <b>Dars turi</b>: ${item.trainingType.name}
        <b>Dars vaqti</b>: ${item.lessonPair.start_time}-${item.lessonPair.end_time}`
                  }
                })
              })
              bot.sendMessage(msg.chat.id, `Bugun <b>${new Date().toLocaleDateString()}</b>
Bugun <b>${kunlikDarslarSoat.size}</b> para darsingiz bor ${morningMessage}`, { parse_mode: 'HTML' })
              kunlikDarslarSoat = new Set()
              kunlikDarslar = []
              morningMessage = ''
              try {
                axios.get(url2, {
                  headers: {
                    accept: "application/json",
                    authorization: "Bearer " + hemisToken,
                  },
                  params: {
                    limit: 200,
                    _employee: id,
                  },
                })
                  .then(res => {
                    if (res.data.data.pagination.totalCount != 0) {
                      scheduleData = res.data.data.items;
                      scheduleData.forEach((element, index) => {
                        if (new Date(element.lesson_date * 1000).toLocaleDateString() == new Date(today).toLocaleDateString()) {
                          kunlikDarslarSoat.add(element.lessonPair.start_time)
                          kunlikDarslar.push(element)
                        }
                      })
                    }
                  })
              } catch (error) {
                throw error
              }

            }
          }, [60000])
        } else bot.editMessageText("Darslar topilmadi!", opts);
      });
  } catch (error) {
    console.log(error);
  }
}
