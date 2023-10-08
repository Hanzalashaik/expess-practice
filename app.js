import express from "express";
import fs  from "fs/promises"
const PORT = 5000; //5500

//3000=>React
//5000/5500 => server or express

const app = express();
let read
let strtoobj

async function send(){
     read= await fs.readFile("db.json","utf-8")
     strtoobj=JSON.parse(read);
    // console.log(strtoobj);
    
}
send();

//get method 
app.get("/",(req,res)=>{
    setTimeout(()=>{
        res.end("<h1>Hello World</h1>");
    },5000)
})
app.get("/hanzala",(req,res)=>{
    res.end("<h1>Hello i am hanzala</h1>")
})
app.get("/db",(req,res)=>{
    res.json(strtoobj)
})

//app is listeing 

app.listen(PORT,()=>{
    console.log(`Server is Running ${PORT}`);
    
})