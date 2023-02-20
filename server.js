const express = require("express")
const app = express()
const {engine} = require("express-handlebars")
const connectDB = require("./config/db")
const session = require("express-session")
const MongoStore = require("connect-mongodb-session")(session)
require("dotenv").config()

//Connecting database
connectDB()

const store =new MongoStore({
  collection:"sessions",
  uri:process.env.DB_URI
})

app.use(session({
  secret:process.env.SECRET_SESSION,
  resave:false,
  saveUninitialized:false,
  store
}))

const PORT = process.env.PORT

//Initialize public folder
app.use(express.static('public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))

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