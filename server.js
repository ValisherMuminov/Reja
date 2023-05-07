
console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();   //intance yani expressni obj ni yuboradi
const http = require("http"); //http core module

//app orqali server quramiz 4 bosqich
// 1 Kirish code
// expressga kirib kelayot~kod /
app.use(express.static("public")); //har qande browser= kirib kelayot~ zapros/ un (clientlgs) public ochiq dma
// public ichiga css va imeglar joylanadi
app.use(express.json()); // kirib kelayot~ Json formatdagi datani obj holatida ogirib beradi
app.use(express.urlencoded({ extended: true })); // htmldadgi formdan request qilingan postni qabul qilish

// 2 Session code

// 3 Views code
//  Frontend yasaymiz backend ichida inBSSR va bunda ejs kerak boladi uni ochib olamiz
app.set("views", "views"); //views Folder  ekanligi folder ozgarsa views ham ozg
app.set("view engine", "ejs"); //view engine ejs ekanligini korsatyabmiz// Traditional usulda frontendni qurish
// 4 Routing
// Rooterlar shakllantirish
//bunda biz browserdagi link/ni yonaltirish, yani browser= boshqa oynaga olib otishni boshqarish
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});
app.get("/", function (req, res) {
  res.render("harid");
  
});

// localhost:3000 shunde qib bir necha adress/ hosilqilish m/n
// Serverga appni Path qilish
const server = http.createServer(app);  // server hosil qilish  http orqali
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});
// Expressni 4 ta bolimda shakllantirdik va serverga yukladik!