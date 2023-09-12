import express from "express";

const PORT=5000;
let app=express();

app.get("/",(req,res)=>{
    console.log(req.ip);//it gives the ip of access machine
    
})

app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})



