const { Schema, model } = require("mongoose");



const departmentSchema = new Schema({
    id:Number,
    name:{
        type:String,
        required:true
    },
    code:String,
    structureType:{
        type:Map,
        required:true
    },
    parent:{
        type:Number,
        default:null
    }
})

module.exports = model("Department", departmentSchema)