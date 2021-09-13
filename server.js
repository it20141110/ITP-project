const express = require("express");
const mongoose = require("mongoose");
const bodyParser=require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");

require("dotenv").config();

const PORT=process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

URL=process.env.MONGODB_URL;

mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
    
});


const connection=mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb Connection Success!");

})

const seedRouter=require("./routes/seedroute.js");
const plantRouter=require("./routes/plantroute.js");
const cropRouter=require("./routes/croproute.js");
const equipRouter=require("./routes/equipmentroute.js");
const fertRouter=require("./routes/fertilizerroute.js");
const otherRouter=require("./routes/otherroute.js");

app.use("/otherroute",otherRouter)

app.use("/fertroute",fertRouter)

app.use("/equiproute",equipRouter)

app.use("/croproute",cropRouter)

app.use("/plantroute",plantRouter)

app.use("/seedroute",seedRouter)

app.listen(PORT, () => {
    console.log(`Server is up and running on port number ${PORT}`)
})