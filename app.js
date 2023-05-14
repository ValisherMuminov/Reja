
console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();   

const fs = require("fs");

// MongoDB connect
const db = require("./server").db();

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1 Kirish code

app.use(express.static("public")); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// 2 Session code

// 3 Views code

app.set("views", "views"); 
app.set("view engine", "ejs"); 

// 4 Routing

app.post("/create-item", (req, res) => {
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end('Something went wrong');
    }
    else {
      res.end('Successfully added');
    }
  });
});

app.get("/author", function (req, res) {
  res.render("author", { user: user });
});
app.get("/", function (req, res) {
  console.log('User entered /create-item');
  db.collection("plans").find().toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        // console.log(data);
        res.render("reja", {items: data});
    }
  })
});




module.exports = app;
