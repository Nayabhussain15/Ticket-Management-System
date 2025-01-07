const mongoose = require('mongoose')

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    RewritePassowrd:{
        type:String,
        require:true,
    },
},{timestamps:true})
const Registerdata = mongoose.model('Register', registerSchema)

module.exports = Registerdata;