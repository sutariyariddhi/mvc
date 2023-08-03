const express=require("express");
const connect = require("./config/db");
const router = require("./routers/students.route");
const app=express();
app.use(express.json());
app.use("/student",router)
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/view");

app.listen(8090,()=>{
    console.log("listening on port");
    connect();
})