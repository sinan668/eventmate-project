const express=require("express");
const mongoose=require("mongoose");
const cors = require("cors");
const router = require("./router/userRoter");;
require("dotenv").config()
// const port=5000
const app=express();
app.use(cors())
app.use(express.json())
app.use('/',router)
mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log(`mongodb is connected ${process.env.DATABASE_URL}`);
    
})
.catch((error)=>{
    console.log(error,`mongodb error`);
    
})

app.listen(5000,()=>{
    console.log(`server is running on 5000`);
    
});
