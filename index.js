var express=require('express')
var app=express();
var collection=require('./mongoose')
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/login',(req,res)=>{
   res.send('login')
})

app.get('/signup',(req,res)=>{
    res.send('signup')
})

app.post('/signup',(req,res)=>{
    var data=
    {
        name:req.body.firstName,
        email:req.body.email,
        password:req.body.password,
    }

    collection.insertMany([data])
    res.send("hello world")

})



app.post('/login',async (req,res)=>{
   
    var check=await collection.findOne({email:req.body.email})
    console.log(check)
    // console.log(req.body.password)
    // console.log(check.password)
    if(check.password===req.body.password)
    {
        res.send('home')
    }
    else
    {
        res.send("wrong details found")
    }

})

app.listen(1000,()=>{
    console.log("server running on 3000 port")
})