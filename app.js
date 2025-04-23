const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');  
const path = require('path');

const app = express();
const PORT = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.set("views","../src/views");
app.set("view engine","ejs")

productRouter.router("/").get((req,res) =>{
    res.render("products");
});

productRouter.router("/1").get((req,res) =>{
    res.send("hello 1");
});

app.use("/products", productRouter)

app.get("/", (req,res) =>{

    res.render('index',{username: 'weeraphat', customers: ["weera","phat","kamlang"]});

})

app.listen(PORT, ()=>{
    console.log("Listening On Port %d " + chalk.green (" : "+ PORT));
})