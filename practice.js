import express from "express";

let PORT=5000;
const app = express();
app.use(express.json());

//get method
app.get("/",(req,res)=>{
    res.send("Hello i am hanzala");
})

//post method 

app.post("/post",(req,res)=>{
    const {name}=req.body

    if(name){
        return res.status(200).json({ message: `Hello, ${name}!` });
        
    }
    else {
        return res.status(500).json({ error: "Name parameter is missing in the request body." });
    }
    
})
//.email bhi daal sakhte 
app.put("/update/:id",(req,res)=>{
    let id = req.params.id
    
    console.log("updated",id);
    let userdata=req.body;
    console.log(userdata);
    
    res.status(200).json({"message":id})
    
})

// app.delete()

app.delete("/",(req,res)=>{
    //mongodb method
    res.send("Hello i am hanzala");
})

app.listen(PORT,()=>{
    console.log(`Server is Running at port ${PORT}`);
    
})