import express from "express";

const PORT=5500;
let app=express();

app.get("/download",(req,res)=>{
    res.status(200).download("./intro.txt")//when user access with/download, the file gets downloaded
})

app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})