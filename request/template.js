import express from "express";

const PORT=5000;
let app=express();

app.get("/",(req,res)=>{
    res.end("hello world")
})

app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})