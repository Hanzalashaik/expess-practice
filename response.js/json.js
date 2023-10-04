import express from 'express';

const PORT = 5502;
const app = express();

app.get('/',(req,res)=>{
    res.json({name : 'hanzala'}) //prints objects in json format
})

app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})