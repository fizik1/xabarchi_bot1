const axios = require("axios");
const TelegramBot = require("node-telegram-bot-api");
const connectDB = require("./config/db");
const Teacher = require("./models/teacherModel");
require("dotenv").config();
connectDB()

let datas = {
  "success": true,
  "error": null,
  "data": {
    "items": [
      {
        "id": 433194,
        "subject": {
          "id": 3429,
          "name": "XIX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "14",
          "name": "4-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 1230,
          "name": "RUS_FIL_YEVRO_2021_03"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 805,
          "name": "Fil-ru 31"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "15",
          "name": "5",
          "start_time": "14:30",
          "end_time": "15:50"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1675641600,
        "weekEndTime": 1676073600,
        "lesson_date": 1675814400,
        "_week": 45942
      },
      {
        "id": 433191,
        "subject": {
          "id": 3429,
          "name": "XIX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "14",
          "name": "4-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 1228,
          "name": "RUS_FIL_YEVRO_2021_01"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 800,
          "name": "Fil-ru 23"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "16",
          "name": "6",
          "start_time": "16:00",
          "end_time": "17:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1675641600,
        "weekEndTime": 1676073600,
        "lesson_date": 1675814400,
        "_week": 45942
      },
      {
        "id": 437462,
        "subject": {
          "id": 7663,
          "name": "Umumta'lim  maktablarda rus tili va adabiyoti 5-9 sinflarda o'quv darsliklarini urganish mahiyati"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 37,
          "name": "RUS_FIL_NATS_2020_07"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 34,
          "name": "Fakultetlararo rus tili ",
          "code": "312-110-10",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 805,
          "name": "Fil-ru 31"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "12",
          "name": "2",
          "start_time": "09:30",
          "end_time": "10:50"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1675814400,
        "weekEndTime": 1676073600,
        "lesson_date": 1675900800,
        "_week": 9385
      },
      {
        "id": 436319,
        "subject": {
          "id": 3430,
          "name": "XX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 1410,
          "name": "RUS_FIL_YEVRO_2020_17"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 808,
          "name": "Fil-ru 34"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "13",
          "name": "3",
          "start_time": "11:00",
          "end_time": "12:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1675814400,
        "weekEndTime": 1676073600,
        "lesson_date": 1675987200,
        "_week": 9177
      },
      {
        "id": 436287,
        "subject": {
          "id": 3430,
          "name": "XX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 27,
          "name": "RUS_FIL_YEVRO_2020_02"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 807,
          "name": "Fil-ru 33"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "11",
          "name": "1",
          "start_time": "08:00",
          "end_time": "09:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676246400,
        "_week": 9178
      },
      {
        "id": 436378,
        "subject": {
          "id": 7663,
          "name": "Umumta'lim  maktablarda rus tili va adabiyoti 5-9 sinflarda o'quv darsliklarini urganish mahiyati"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 35,
          "name": "RUS_FIL_YEVRO_2020_05"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 34,
          "name": "Fakultetlararo rus tili ",
          "code": "312-110-10",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 808,
          "name": "Fil-ru 34"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "12",
          "name": "2",
          "start_time": "09:30",
          "end_time": "10:50"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676246400,
        "_week": 9178
      },
      {
        "id": 437478,
        "subject": {
          "id": 7663,
          "name": "Umumta'lim  maktablarda rus tili va adabiyoti 5-9 sinflarda o'quv darsliklarini urganish mahiyati"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 37,
          "name": "RUS_FIL_NATS_2020_07"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 34,
          "name": "Fakultetlararo rus tili ",
          "code": "312-110-10",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 801,
          "name": "Fil-ru 24"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "13",
          "name": "3",
          "start_time": "11:00",
          "end_time": "12:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676246400,
        "_week": 9386
      },
      {
        "id": 441986,
        "subject": {
          "id": 3429,
          "name": "XIX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "14",
          "name": "4-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 1229,
          "name": "RUS_FIL_YEVRO_2021_02"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 807,
          "name": "Fil-ru 33"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "14",
          "name": "4",
          "start_time": "13:00",
          "end_time": "14:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676246400,
        "_week": 45943
      },
      {
        "id": 436280,
        "subject": {
          "id": 3430,
          "name": "XX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 26,
          "name": "RUS_FIL_YEVRO_2020_01"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 800,
          "name": "Fil-ru 23"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "12",
          "name": "2",
          "start_time": "09:30",
          "end_time": "10:50"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676332800,
        "_week": 9178
      },
      {
        "id": 436304,
        "subject": {
          "id": 3430,
          "name": "XX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 32,
          "name": "RUS_FIL_YEVRO_2020_03"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 807,
          "name": "Fil-ru 33"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "13",
          "name": "3",
          "start_time": "11:00",
          "end_time": "12:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676332800,
        "_week": 9178
      },
      {
        "id": 442002,
        "subject": {
          "id": 3429,
          "name": "XIX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "14",
          "name": "4-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 1230,
          "name": "RUS_FIL_YEVRO_2021_03"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 805,
          "name": "Fil-ru 31"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "15",
          "name": "5",
          "start_time": "14:30",
          "end_time": "15:50"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676419200,
        "_week": 45943
      },
      {
        "id": 441971,
        "subject": {
          "id": 3429,
          "name": "XIX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "14",
          "name": "4-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 1228,
          "name": "RUS_FIL_YEVRO_2021_01"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 800,
          "name": "Fil-ru 23"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "16",
          "name": "6",
          "start_time": "16:00",
          "end_time": "17:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676419200,
        "_week": 45943
      },
      {
        "id": 437473,
        "subject": {
          "id": 7663,
          "name": "Umumta'lim  maktablarda rus tili va adabiyoti 5-9 sinflarda o'quv darsliklarini urganish mahiyati"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 37,
          "name": "RUS_FIL_NATS_2020_07"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 34,
          "name": "Fakultetlararo rus tili ",
          "code": "312-110-10",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 805,
          "name": "Fil-ru 31"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "12",
          "name": "2",
          "start_time": "09:30",
          "end_time": "10:50"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676505600,
        "_week": 9386
      },
      {
        "id": 436327,
        "subject": {
          "id": 3430,
          "name": "XX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 1410,
          "name": "RUS_FIL_YEVRO_2020_17"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 808,
          "name": "Fil-ru 34"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "13",
          "name": "3",
          "start_time": "11:00",
          "end_time": "12:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676246400,
        "weekEndTime": 1676678400,
        "lesson_date": 1676592000,
        "_week": 9178
      },
      {
        "id": 446154,
        "subject": {
          "id": 3430,
          "name": "XX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 27,
          "name": "RUS_FIL_YEVRO_2020_02"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 807,
          "name": "Fil-ru 33"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "11",
          "name": "1",
          "start_time": "08:00",
          "end_time": "09:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676851200,
        "weekEndTime": 1679702400,
        "lesson_date": 1676851200,
        "_week": 9179
      },
      {
        "id": 446212,
        "subject": {
          "id": 7663,
          "name": "Umumta'lim  maktablarda rus tili va adabiyoti 5-9 sinflarda o'quv darsliklarini urganish mahiyati"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 35,
          "name": "RUS_FIL_YEVRO_2020_05"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 34,
          "name": "Fakultetlararo rus tili ",
          "code": "312-110-10",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 808,
          "name": "Fil-ru 34"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "12",
          "name": "2",
          "start_time": "09:30",
          "end_time": "10:50"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676851200,
        "weekEndTime": 1679702400,
        "lesson_date": 1676851200,
        "_week": 9179
      },
      {
        "id": 446140,
        "subject": {
          "id": 3430,
          "name": "XX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 26,
          "name": "RUS_FIL_YEVRO_2020_01"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 800,
          "name": "Fil-ru 23"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "12",
          "name": "2",
          "start_time": "09:30",
          "end_time": "10:50"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676851200,
        "weekEndTime": 1679702400,
        "lesson_date": 1676937600,
        "_week": 9179
      },
      {
        "id": 446182,
        "subject": {
          "id": 3430,
          "name": "XX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 32,
          "name": "RUS_FIL_YEVRO_2020_03"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 807,
          "name": "Fil-ru 33"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "13",
          "name": "3",
          "start_time": "11:00",
          "end_time": "12:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676851200,
        "weekEndTime": 1679702400,
        "lesson_date": 1676937600,
        "_week": 9179
      },
      {
        "id": 446224,
        "subject": {
          "id": 3430,
          "name": "XX asr rus adabiyoti tarixi"
        },
        "semester": {
          "code": "16",
          "name": "6-semestr"
        },
        "educationYear": {
          "code": "2022",
          "name": "2022-2023",
          "current": true
        },
        "group": {
          "id": 1410,
          "name": "RUS_FIL_YEVRO_2020_17"
        },
        "faculty": {
          "id": 12,
          "name": "Filologiya fakulteti",
          "code": "312-110",
          "structureType": {
            "code": "11",
            "name": "Fakultet"
          },
          "parent": null
        },
        "department": {
          "id": 129,
          "name": "Rus va chet el adabiyoti ",
          "code": "312-110-12",
          "structureType": {
            "code": "12",
            "name": "Kafedra"
          },
          "parent": 12
        },
        "auditorium": {
          "code": 808,
          "name": "Fil-ru 34"
        },
        "trainingType": {
          "code": "13",
          "name": "Amaliy"
        },
        "lessonPair": {
          "code": "13",
          "name": "3",
          "start_time": "11:00",
          "end_time": "12:20"
        },
        "employee": {
          "id": 497,
          "name": "SIDDIKOVA I. I."
        },
        "weekStartTime": 1676851200,
        "weekEndTime": 1679702400,
        "lesson_date": 1677196800,
        "_week": 9179
      }
    ],
    "pagination": {
      "totalCount": 239,
      "pageSize": 20,
      "pageCount": 12,
      "page": 12
    }
  },
  "code": 200
}

// let datas1 = JSON.parse(datas)
datas.data.items.forEach(el=>{
  // console.log(el);
  console.log(new Date(el.lesson_date*1000));
})


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
      }).then(async res1=>{
        await axios
      .get(url2, {
        headers: {
          accept: "application/json",
          authorization: "Bearer " + hemisToken,
        },
        params: {
          limit: 200,
          _employee: id,
          page:res1.data.data.pagination.pageCount
        },
      })
      .then(async (res) => {
        res.data.data.items.forEach(el=>{
          console.log(new Date(el.lesson_date*1000));
        })
        // console.log(res.data.data.items);
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
      })
    
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
