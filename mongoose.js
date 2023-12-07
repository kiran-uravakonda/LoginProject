var mongoose=require('mongoose');
var url="mongodb://localhost:27017/loginDeatils";

mongoose.connect(url).then((val)=>{
    console.log("connected")
}).catch((err)=>{
    console.log("not connected")
})

var mongoSchema=new mongoose.Schema({

    firstName:{
        type:String,
        require:true
    },
    
    email:{
        type:String,
        unique: true,
        require:true
        
    },
    password:{
        type:String,
        require:true
    },
   
})
var collection=mongoose.model('personalDetail',mongoSchema)
module.exports=collection