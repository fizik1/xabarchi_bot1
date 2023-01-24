const { Schema, model } = require("mongoose");


const teacherSchema = new Schema({
    full_name:{
        type:String,
        required:true
    },
    user_full_name:{
        type:String,
    },
    username:{
        type:String
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
    },
    createAt:{
        type:Date,
        required:true,
    },
    updateAt:{
        type:Date,
        required:true
    },
    resultByName:{
        type:[]
    }
})

module.exports = model("Teacher", teacherSchema)