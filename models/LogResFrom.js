const mongoose = require("mongoose");

const fromSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    number : String ,
})

const LogResFromModel = mongoose.model("from" ,fromSchema);

module.exports = LogResFromModel