const mongoose = require('mongoose')

const NewTicketSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    product:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
},{timestamps:true})

const TicketCreate = mongoose.model('NewCreateTicket', NewTicketSchema)

module.exports = TicketCreate
