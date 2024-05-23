const express = require("express")

const mongoose = require("mongoose")

const cors = require("cors")

const LogResFromModel = require("./models/LogResFrom")

const app = express();

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb+srv://alsiam09:siamalbaba@cluster0.giaedey.mongodb.net/");

app.post("/Login" , (req ,res)=>{
    const {email , password} = req.body;
   LogResFromModel.findOne({email: email})
   .then(user => { console.log(user);
    if (user) {
        if(user.password === password){
            res.json("success")
        }else{
            res.json("password is incorreat")
        }
    } else{
        console.log("no rocord existed");
    }
   })
})

app.post('/createAccount', (req , res)=>{
    LogResFromModel.create(req.body).then(submit => res.json(submit)).catch(err => res.json(err))
})

const PORT = process.env.PORT || 3000

app.listen(3000 ,()=>{
    console.log("server is ready");
})