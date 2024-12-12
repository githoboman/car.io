//const express = require('express');
import express from "express"; 


const app = express ();
//request and response
//lets create a data base
app.get("/products", (req, res) => {
    res.send("Server is ready123")
    
});
app.listen(5000, () => {
    console.log("Server started at http://localhost:5000");
});
// now we will install a package that will do this automatically for us
// npm install nodemon - D
//UiRU6kZ8t6BJuYCz