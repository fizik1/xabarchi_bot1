const express = require("express")
const app = express()
const {engine} = require("express-handlebars")
const connectDB = require("./config/db")
require("dotenv").config()

//Connecting database
connectDB()

const PORT = process.env.PORT

//Initialize Handlebars
app.engine(
    "hbs",
    engine({
      extname: "hbs",
      layoutsDir: "views/layouts/"
    })
  );
app.set('view engine', '.hbs');
app.set('views', './views');

//Initialize routes
app.use("/", require("./routes"))

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT);
})