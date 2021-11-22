const express = require("express");
const ejs = require("ejs");
const fileUpload = require("express-fileupload");
const methodOverride = require('method-override')

const PhotoRouters = require("./routes/photos")
const connectDataBase = require("./Db/DataBase")

const app = express();

//use template ejs 
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(methodOverride('_method',{
  methods:["POST", "GET"]
}))

//connect DataBase
connectDataBase()

app.use(express.static("public"));


app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});





app.use("/", PhotoRouters)

  

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running, PORT:${PORT}`);
});
