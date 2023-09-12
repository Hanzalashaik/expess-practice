import express from "express";

const PORT=5500;
let app=express();

app.get("/hanzala",(req,res)=>{
    console.log(req.hostname);
})

app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})




