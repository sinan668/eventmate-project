const express = require('express')
const cors  = require('cors')

const app = express()

app.use(express.json())

app.use(cors({
    origin:"http://localhost:/booking"
}))

// app.use("/",(req,res)=>{
//     res.send("hello world")
// })


app.listen(3000,()=>{
    console.log("server is running")
})