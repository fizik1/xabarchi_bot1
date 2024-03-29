const { Schema, model } = require("mongoose");


const teacherSchema = new Schema({
    user_full_name:{
        type:String,
    },
    username:{
        type:String
    },
    full_name:{
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
    },
    isLogged:{
      type:Boolean,
      default:false
    },
    sciences:{
      type:[]
    },
    selected:{
      type:Object
    },
    department:{
      type:Object
    },
    image:String
    
    
}, {timestamps:true})

//Creating indexes
teacherSchema.index({
    full_name: "text",
  });
  
  teacherSchema.statics = {
    searchPartial: function (q, cb) {
      return this.aggregate(
        [
          // Project the concatenated full name along with the original doc
          {
            $match: {
              $or: [
                { full_name: new RegExp(q, "gi") },
                //   {"kafedra.name":new RegExp(q,'gi')}
              ],
            },
          },
          // {$project: {fullname: {$concat: ['$firstName', ' ', '$lastName']}, doc: '$$ROOT'}},
          // {$match: {fullname: new RegExp(q,'gi')}}
        ],
        cb
      );
    },
  
    searchFull: function (q, cb) {
      return this.find(
        {
          $text: { $search: q, $caseSensitive: false },
        },
        cb
      );
    },
  };

module.exports = model("Teacher", teacherSchema)