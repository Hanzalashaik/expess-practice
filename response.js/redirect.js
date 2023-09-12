import express from 'express';

const PORT = 5200;
const app = express();

app.get('/hanzala',(req,res)=>{
    res.redirect("https://expressjs.com")
})
//when client access with /hanzala it redirects to the express.js webiste


app.listen(PORT,()=>{
    console.log(`Server Runing at ${PORT}`)
})