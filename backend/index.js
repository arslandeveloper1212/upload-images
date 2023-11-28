const env = require('dotenv');
const express = require("express")
const app = express();
const cors = require("cors");
const path = require("path");
const bodyParser = require('body-parser');



app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
env.config({path:"./config.env"})



const port = process.env.PORT;

app.use("/uploads",express.static(path.join(__dirname, 'uploads')));

require("./db/conn");
require("./models/singlefile");
require("./models/multiplefile");
const fileRoutes = require("./routes/file-upload-routes");

app.get("/", (req,res)=>{
    res.send("home page");
})


app.use("/api", fileRoutes.routes);

app.listen(port, (req,res)=>{
    console.log(`listen to the port of ${port}`)
})