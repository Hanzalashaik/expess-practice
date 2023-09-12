import express from "express";

const PORT=5000;
let app=express();


app.use(express.json())//post put


    app.post("/post",(req,res)=>{
        // console.log(req.hostname);//show clinet ip 
        console.log(req.method);
        console.log(req.body);
        
    })

// app.get("/get",(req,res)=>{
//      console.log(req.hostname);
//      console.log(req.ip);//access ip
//      console.log(req.method);
//      console.log(req.url);
//      console.log(req.headers);
//     //  console.log(req.params);
     
     
    
// })


app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})