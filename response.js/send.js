import express from 'express';

const PORT = 5200;
const app = express();

app.get('/',(req,res)=>{
   res.send('hii')//res.send can send texts and html elements
})

app.listen(PORT,()=>{ 
    console.log(`Server Runing at ${PORT}`)
})