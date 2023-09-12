import express from 'express';

const PORT = 5200;
const app = express();

app.get('/',(req,res)=>{
    // res.status(200).send("Error from server") // it send custom status code 
    res.sendStatus(400)
})

app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})