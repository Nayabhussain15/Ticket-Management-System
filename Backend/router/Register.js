const express = require('express')
const router = express.Router()
const Registerdata = require('../models/Register')


// router.get('/getcreater', async(req,res)=>{ 
 
// })

router.post('/', async(req,res)=>{
    try{
        debugger;
        const {name , email , password , rewritePassword} = req.body
        // if(!name || !email || !password || !rewritePassword){
        //         return res.status(400).json({error:'All field are available'})
        //     }
            
            const existingUser =await Registerdata.findOne({email});
            if(existingUser){
                console.log("existed this user")
                return res.status(409).json({error:'User with this email is already exists'});
            } 
        
        const userdata = await Registerdata.create({
            name: name,
            email: email,
            password: password,
            rewritePassword: rewritePassword
        })
        res.status(201).json(userdata)

      

    }
    catch(error){
console.log(error)
    }
        
    })

module.exports = router