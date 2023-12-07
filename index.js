var express=require('express')
var app=express();
const cors = require('cors');
var collection=require('./mongoose')
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.post('/signup',(req,res)=>{
    var data=
    {
        firstName:req.body.requestData.firstName,
        email:req.body.requestData.email,
        password:req.body.requestData.password,
    }

    
    collection.insertMany([data])
    res.send("data stored in database")

})



app.post('/login',async (req,res)=>{
   
    var check=await collection.findOne({email:req.body.requestData.email})
    console.log(check)
    // console.log(req.body.password)
    // console.log(check.password)
    if(check.password===req.body.requestData.password)
    {
        // res.send('welcome to home page')

        res.status(200).send('Welcome to Home Page')
    }
    else
    {
       
        res.status(400).send("wrong details entered")
    }

})

app.listen(1000,()=>{
    console.log("server running on 1000 port")
})