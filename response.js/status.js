import express from 'express';

const PORT = 5200;
const app = express();

app.get('/',(req,res)=>{
    res.status(200) //it shows the status of code 
 
})

app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})