import express from "express";

const PORT=5200;
let app=express();

app.get("/hanzala",(req,res)=>{
    res.end("hello world")//response ends with hello world
})

app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})