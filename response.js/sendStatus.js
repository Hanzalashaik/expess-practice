import express from 'express';

const PORT = 5200;
const app = express();

app.get('/',(req,res)=>{
    // res.status(200).send("Error from server") // it send custom status code 
    res.sendStatus(400)//bad request
    // res.sendStatus(200)//OK
    // res.sendStatus(201)//Created
    // res.sendStatus(202)//Accepted
    // res.sendStatus(204)//No response
    // res.sendStatus(401)//Unauthorized
    // res.sendStatus(403)//Forbidden
    // res.sendStatus(404)//Not Found
    // res.sendStatus(302)//Found
    // res.sendStatus(301)//Moved Permanently
    // res.sendStatus(303)//See Other
    // res.sendStatus(304)//Not modified
    // res.sendStatus(500)//Internal Server Error
   
})

app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})