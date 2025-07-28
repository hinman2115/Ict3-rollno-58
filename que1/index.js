const express = require("express");
const app = express();
const path = require("path");

//html diplay q2
app.use(express.static(path.join(__dirname,"pages")));

app.get("/html",(req,res)=>{

res.sendFile(path.join(__dirname,"pages","Hello.html"));

})


//q1 api for get hello world
app.route("/gethello").get((req,res)=>{
    res.send("Hello NodeJS");
});

app.listen(3000,()=>{
    console.log("port is listening")
});

