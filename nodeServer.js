import fs from "fs"
import http from "http" //web protocol port no:8080

const PORT=80;

let httpServer=http.createServer((req,res)=>{
    res.end("<h1>Hello My Name is Hanzala</h1>")
})

httpServer.listen(PORT,()=>{
    console.log(`Server Running at ${PORT}`);
    
})