const { Schema, model } = require("mongoose");


const teacherSchema = new Schema({
    full_name:{
        type:String,
        required:true
    },
    chatId:{
        type:String,
        required:true
    },
    employeeId:{
        type:String,
        required:true
    },
    dailyLessons:{
        type:[]
    },
    dailyLessonsCount:{
        type:[]
    },
    isThereToday:{
        type:Boolean,
        required:true
    }
})

module.exports = model("Teacher", teacherSchema)