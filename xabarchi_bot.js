const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");
const mongoose = require("mongoose");
const Teacher = require("./models");
require("dotenv").config();

mongoose.connect(process.env.DB_URI);

const token = process.env.TOKEN,
  hemisToken = process.env.HEMISTOKEN,
  url1 = process.env.URL1,
  url2 = process.env.URL2;

let year = new Date().getFullYear(),
  month = new Date().getMonth(),
  day = new Date().getDate(),
  today = new Date(year, month, day).valueOf();

setInterval(() => {
  year = new Date().getFullYear();
  month = new Date().getMonth();
  day = new Date().getDate();
  today = new Date(year, month, day);
}, [3600000]);

const bot = new TelegramBot(token, { polling: true });
bot.on("polling_error", (msg) => console.log(msg));

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1];
  bot.sendMessage(chatId, resp);
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text == "/start" || msg.text == "Qayta ishga tushirish") {
    let teacher = await Teacher.findOne({ chatId: msg.chat.id });
    if (teacher) {
      let keyboard3 = teacher.isActive
        ? "Bildirishnomani o'chirish"
        : "Bildirishnomani yoqish";
      bot.sendMessage(msg.chat.id, "Ismingizni kiriting: ", {
        reply_markup: {
          keyboard: [
            ["Qayta ishga tushirish", "Ma'lumotni ko'rish"],
            [keyboard3],
          ],
          resize_keyboard: true,
          // one_time_keyboard: true,
          // force_reply: true,
        },
      });
    } else bot.sendMessage(chatId, "Ismingizni kiriting: ");
  } else if (msg.text == "Ma'lumotni ko'rish") {
    let teacher = await Teacher.findOne({ chatId });
    if (teacher) {
      let message = "";
      teacher.dailyLessonsCount.forEach((element) => {
        message += `
          
<b style="color:blue;text-align:center">🕰${element}</b>`;
        teacher.dailyLessons.forEach((item, key) => {
          if (item.lessonPair.start_time == element) {
            message += `
📎<b>Fan</b>: ${item.subject.name}
<b>Fakultet</b>: ${item.faculty.name}
<b>Guruh</b>: ${item.group.name}
<b>Xona</b>: ${item.auditorium.name}
<b>Dars turi</b>: ${item.trainingType.name}
<b>Dars vaqti</b>: ${item.lessonPair.start_time}-${item.lessonPair.end_time}`;
          }
        });
      });
      console.log(teacher);
      bot.sendMessage(
        teacher.chatId,
        `O'qituvchi ismi: <b>${teacher?.full_name}</b> 
Bugun <b>${new Date().toLocaleDateString()}</b>
Bugun <b>${teacher.dailyLessonsCount.length}</b> para darsingiz bor ${message}`,
        { parse_mode: "HTML" }
      );
    } else {
      bot.sendMessage(chatId, "Ma'lumot topilmadi");
    }
  } else if (msg.text == "Bildirishnomani o'chirish") {
    let teacher = await Teacher.findOneAndUpdate(
      { chatId: msg.chat.id },
      { isActive: false }
    );
    if (teacher) {
      bot.sendMessage(msg.chat.id, "Bildirishnomalar o'chirildi ", {
        reply_markup: {
          keyboard: [
            ["Qayta ishga tushirish", "Ma'lumotni ko'rish"],
            ["Bildirishnomani yoqish"],
          ],
          resize_keyboard: true,
          // one_time_keyboard: true,
          // force_reply: true,
        },
      });
    } else bot.sendMessage(chatId, "Ma'lumot topilmadi");
  } else if (msg.text == "Bildirishnomani yoqish") {
    let teacher = await Teacher.findOneAndUpdate(
      { chatId: msg.chat.id },
      { isActive: true }
    );
    if (teacher) {
      bot.sendMessage(msg.chat.id, "Bildirishnomalar yoqildi ", {
        reply_markup: {
          keyboard: [
            ["Qayta ishga tushirish", "Ma'lumotni ko'rish"],
            ["Bildirishnomani o'chirish"],
          ],
          resize_keyboard: true,
          // one_time_keyboard: true,
          // force_reply: true,
        },
      });
    } else bot.sendMessage(chatId, "Ma'lumot topilmadi");
  } else {
    await TeacherName(msg);
  }
});

bot.on("callback_query", async function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const opts = {
    chat_id: msg.chat.id,
    message_id: msg.message_id,
  };
  let { resultByName } = await Teacher.findOne({ chatId: msg.chat.id }).select(
    "resultByName"
  );
  resultByName.forEach(async (item, index) => {
    if (action == index) {
      console.log("item", item);
      await Teacher.findOneAndUpdate(
        { chatId: msg.chat.id },
        { department:item.department, image:item.image }
      );
      TeacherData(item.id, opts, msg, item.full_name);
    }
  });
  await Teacher.findOneAndUpdate({ chatId: msg.chat.id }, { resultByName: [] });
});

async function TeacherName(msg) {
  try {
    await axios
      .get(url1, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + hemisToken,
        },
        params: {
          type: "teacher",
          search: msg.text,
        },
      })
      .then(async (res) => {
        if (res.data.data.pagination.totalCount !== 0) {
          const teacher = await Teacher.findOne({ chatId: msg.chat.id });
          if (!teacher) {
            await Teacher.create({
              chatId: msg.chat.id,
              user_full_name: msg.chat.first_name + " " + msg.chat.last_name,
              username: msg.chat.username,
              // employeeId: id,
              isThereToday: false,
              resultByName: res.data.data.items,
            });
          } else {
            await Teacher.findOneAndUpdate(
              { chatId: msg.chat.id },
              { resultByName: res.data.data.items }
            );
          }
          // resultByName = res.data.data.items;
          let keyboard = [];
          res.data.data.items.forEach((element, index) => {
            keyboard.push([{ text: element.full_name, callback_data: index }]);
          });
          var options = {
            reply_markup: JSON.stringify({
              inline_keyboard: keyboard,
            }),
          };
          // force_reply: true,
          bot.sendMessage(msg.chat.id, "O'z ism familyangizni anlang", options);
        } else
          bot.sendMessage(
            msg.chat.id,
            "Ma'lumot topilmadi, qayta kiritib ko'ring"
          );
      });
  } catch (error) {
    throw error;
  }
}

async function TeacherData(id, opts, msg, full_name) {
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
      .then(async (res) => {
        if (res.data.data.pagination.totalCount != 0) {
          let newUser = !Boolean(
            await Teacher.findOne({ chatId: msg.chat.id })
          );

          if (newUser) {
            await Teacher.create({
              chatId: msg.chat.id,
              user_full_name: msg.chat.first_name + " " + msg.chat.last_name,
              username: msg.chat.username,
              full_name,
              employeeId: id,
              isThereToday: false,
            });
          } else {
            await Teacher.updateOne(
              { chatId: msg.chat.id },
              { full_name, employeeId: id, isThereToday: false }
            );
          }

          let dailyLessonsCount = new Set();
          let dailyLessons = [];

          res.data.data.items.forEach(async (element, index) => {
            if (
              new Date(element.lesson_date * 1000).toLocaleDateString() ==
              new Date(today).toLocaleDateString()
            ) {
              dailyLessonsCount.add(element.lessonPair.start_time);
              dailyLessons.push(element);
            }
          });

          if (dailyLessonsCount.size > 0) {
            await Teacher.findOneAndUpdate(
              { chatId: msg.chat.id },
              {
                dailyLessons,
                dailyLessonsCount: Array.from(dailyLessonsCount),
                isThereToday: true,
              }
            );
          } else {
            await Teacher.findOneAndUpdate(
              { chatId: msg.chat.id },
              { dailyLessons, dailyLessonsCount: [], isThereToday: false }
            );
          }

          let message = "";
          dailyLessonsCount.forEach((element) => {
            message += `
<b style="color:blue;text-align:center">🕰${element}</b>`;
            dailyLessons.forEach((item, key) => {
              if (item.lessonPair.start_time == element) {
                message += `
📎<b>Fan</b>: ${item.subject.name}
       <b>Fakultet</b>: ${item.faculty.name}
       <b>Guruh</b>: ${item.group.name}
       <b>Xona</b>: ${item.auditorium.name}
       <b>Dars turi</b>: ${item.trainingType.name}
       <b>Dars sanasi</b>: ${new Date(
         item.lesson_date * 1000
       ).toLocaleDateString()}
       <b>Dars vaqti</b>: ${item.lessonPair.start_time}-${
                  item.lessonPair.end_time
                }`;
              }
            });
          });
          bot.editMessageText("Bot muvaffaqiyatli ishga tushdi", opts);
          bot.sendMessage(
            msg.chat.id,
            `Bugun <b>${dailyLessonsCount.size}</b> para darsingiz bor ${message}`,
            { parse_mode: "HTML",
              reply_markup: {
                keyboard: [
                  ["Qayta ishga tushirish", "Ma'lumotni ko'rish"],
                  ["Bildirishnomani o'chirish"],
                ],
                resize_keyboard: true,
                // one_time_keyboard: true,
                // force_reply: true,
              },
            }
          );
        } else {
          bot.editMessageText("Darslar topilmadi!", opts);
        }
      });
  } catch (error) {
    throw error;
  }
}

//Har minutda ma'lumotni tekshirish
setInterval(async () => {
  let hour = new Date().getHours(),
    minut = new Date().getMinutes();
  let teachers = await Teacher.find({ isThereToday: true });
  console.log(
    `${String(100 + hour).slice(-2)}:${String(100 + minut).slice(-2)}`
  );

  // Notification
  teachers.forEach((teacher) => {
    teacher.dailyLessons.forEach((element) => {
      if (
        element.lessonPair.end_time ==
          `${String(100 + hour).slice(-2)}:${String(100 + minut).slice(-2)}` &&
        teacher.isActive
      ) {
        bot.sendMessage(teacher.chatId, `Dars tugadi`);
      }
    });
  });

  // Morning message
  if (
    `${String(100 + hour).slice(-2)}:${String(100 + minut).slice(-2)}` ==
    `${String(107).slice(-2)}:${String(100).slice(-2)}`
  ) {
    teachers.forEach((teacher) => {
      let message = "";
      teacher.dailyLessonsCount.forEach((element) => {
        message += `
          
<b style="color:blue;text-align:center">🕰${element}</b>`;
        teacher.dailyLessons.forEach((item, key) => {
          if (item.lessonPair.start_time == element) {
            message += `
📎<b>Fan</b>: ${item.subject.name}
<b>Fakultet</b>: ${item.faculty.name}
<b>Guruh</b>: ${item.group.name}
<b>Xona</b>: ${item.auditorium.name}
<b>Dars turi</b>: ${item.trainingType.name}
<b>Dars vaqti</b>: ${item.lessonPair.start_time}-${item.lessonPair.end_time}`;
          }
        });
      });

      bot.sendMessage(
        teacher.chatId,
        `Bugun <b>${new Date().toLocaleDateString()}</b>
Bugun <b>${teacher.dailyLessonsCount.length}</b> para darsingiz bor ${message}`,
        { parse_mode: "HTML" }
      );
    });
  } else if (
    `${String(100 + hour).slice(-2)}:${String(100 + minut).slice(-2)}` ==
    `${String(121).slice(-2)}:${String(100).slice(-2)}`
  ) {
    // Evening message
    teachers.forEach(async(teacher) => {
      let message = "";
      await teacher.dailyLessonsCount.forEach((element) => {
        message += `
          
<b style="color:blue;text-align:center">🕰${element}</b>`;
        teacher.dailyLessons.forEach((item, key) => {
          if (item.lessonPair.start_time == element) {
            message += `
📎<b>Fan</b>: ${item.subject.name}
      <b>Fakultet</b>: ${item.faculty.name}
      <b>Guruh</b>: ${item.group.name}
      <b>Xona</b>: ${item.auditorium.name}
      <b>Dars turi</b>: ${item.trainingType.name}
      <b>Dars vaqti</b>: ${item.lessonPair.start_time}-${item.lessonPair.end_time}`;
          }
        });
      });
      console.log(teacher);
      bot.sendMessage(
        teacher.chatId,
        `Bugun <b>${new Date().toLocaleDateString()}</b>
Bugun <b>${teacher.dailyLessonsCount.length}</b> para dars o'tdingiz.
Hemis tizimida davomat qilishni unutmang ${message}`,
        { parse_mode: "HTML" }
      );
    });
  }else if (
    `${String(100 + hour).slice(-2)}:${String(100 + minut).slice(-2)}` ==
    `${String(102).slice(-2)}:${String(100).slice(-2)}`
    ) {
    // Update DataBase
    let allTeachers = await Teacher.find({});
    allTeachers.forEach((teacher) => {
      try {
        axios
          .get(url2, {
            headers: {
              accept: "application/json",
              authorization: "Bearer " + hemisToken,
            },
            params: {
              limit: 200,
              _employee: teacher.employeeId,
            },
          })
          .then(async (res) => {
            if (res.data.data.pagination.totalCount != 0) {
              let dailyLessonsCount = new Set();
              let dailyLessons = [];

              res.data.data.items.forEach(async (element, index) => {
                if (
                  new Date(element.lesson_date * 1000).toLocaleDateString() ==
                  new Date(today).toLocaleDateString()
                ) {
                  dailyLessonsCount.add(element.lessonPair.start_time);
                  dailyLessons.push(element);
                }
              });
              if (dailyLessonsCount.size > 0) {
                await Teacher.findOneAndUpdate(
                  { chatId: teacher.chatId },
                  {
                    dailyLessons,
                    dailyLessonsCount:Array.from(dailyLessonsCount),
                    isThereToday: true,
                    updateAt: Date.now(),
                  }
                );
              } else {
                await Teacher.findOneAndUpdate(
                  { chatId: teacher.chatId },
                  {
                    dailyLessons,
                    dailyLessonsCount:[],
                    isThereToday: false,
                    updateAt: Date.now(),
                  }
                );
              }
            }
          });
      } catch (error) {
        throw error;
      }
    });
  }
}, [60000]);
