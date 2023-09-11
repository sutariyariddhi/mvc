const express=require("express");
const connect = require("./config/db");
const router = require("./routers/students.route");
const cookiesparser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const localization = require("./middleware/login-middleware");
const productroute = require("./routers/product-route");



const app = express();
app.use(cookiesparser());
app.use(session({ secret: "secret-key" }));
localization(passport)
app.use(passport.initialize());
app.use(passport.session());


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("views", __dirname + "/view");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/student", router);
app.use("/product",productroute)
app.listen(8090,()=>{
    console.log("listening on port");
    connect();
})