var mongoose=require('mongoose');
var url="mongodb://localhost:27017/login";

mongoose.connect(url).then((val)=>{
    console.log("connected")
}).catch((err)=>{
    console.log("not connected")
})

var mongoSchema=new mongoose.Schema({

    firstName:{
        type:String,
        unique: true
    },
    
    email:{
        type:String,
        unique: true
        
    },
    password:{
        type:String,
    },
   
})
var collection=mongoose.model('personalDetail',mongoSchema)
module.exports=collection