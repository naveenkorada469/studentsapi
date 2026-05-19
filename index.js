const User = require("./models/User");
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hi");
});

mongoose.connect("mongodb+srv://naveenkorada469_db_user:koradanaveen@cluster0.vothkqw.mongodb.net/?appName=Cluster0")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.log(err);
});



app.get("/about", (req, res) => {
    res.send("about page");
});

app.post("/students/add",async(req,res)=>{
try{

const user = new User(req.body);

await user.save();

res.send(user);
 
}catch(err){
res.send(err)
}
})

app.get("/students",async(req,res)=>{
try{

    const user = await User.find();

    res.send(user);

}catch(err){
    console.log(err);
    res.status(500).send("Error");
}
})
app.get("/students/:id",async(req,res)=>{

    try{
   

        const user = await User.findById(req.params.id);
       res.send(user);



    }catch(err){
    console.log(err)
}
})
app.put("/students/update/:id",async(req,res)=>{
  
     try{

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}

        )

        res.send(user);

     }catch(err){

     }

})

app.delete("/students/:id",async(req,res)=>{


    }catch(err){
    console.log(err)
}
})

app.listen(4000, () => {
    console.log("server started");
});
