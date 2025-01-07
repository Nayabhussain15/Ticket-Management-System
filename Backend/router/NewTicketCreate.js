const express = require('express');
const router = express.Router();
const TicketCreate = require('../models/NewTicketCreate');
const jwt = require('jsonwebtoken');


// Get all tickets
router.get('/',(req,res)=>{

    if(req.query.ticketId){
        return TicketCreate.find({_id: req.query.id})
        .then(users => res.json(users))
        .catch(error => res.json(error))
    }
    else{
        return TicketCreate.find()
        .then(users => res.json(users))
        .catch(error => res.json(error))
    }
})


// Get ticket by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const ticket = await createticketdata.findById(req.params.id);
//         if (!ticket) {
//             return res.status(404).json({ error: 'Ticket not found.' });
//         }
//         res.status(200).json(ticket);
//     } catch (error) {
//         res.status(500).json({ error: 'An error occurred while fetching the ticket.' });
//     }
// });

// Create a new ticket
router.post('/', async (req, res) => {
    try {
        const { name, email, product, description } = req.body;

        // Basic input validation
        if (!name || !email || !product || !description) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Check if a ticket with this email already exists
        const existingTicket = await TicketCreate.findOne({ email });
        if (existingTicket) {
            return res.status(400).json({ error: 'A user with this email already exists.' });
        }

        // Create new ticket
        const ticketdata = await TicketCreate.create({
            name,
            email,
            product,
            description,
        });
        res.status(201).json(ticketdata);

        // const token = jwt.sign(ticketdata, process.env.JWT_SECRET, { expiresIn: '1h' });
        // res.json({ token });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the ticket.' });
    }
});

module.exports = router;
