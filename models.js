const { Schema, model } = require("mongoose");


const teacherSchema = new Schema({
    full_name:{
        type:String,
        // required:true
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
        // required:true
    },
    dailyLessons:{
        type:[]
    },
    dailyLessonsCount:{
        type:[]
    },
    isThereToday:{
        type:Boolean,
        // required:true
    },
    resultByName:{
        type:[]
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    }
}, {timestamps:true})

module.exports = model("Teacher", teacherSchema)