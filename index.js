const express = require("express")
const cors = require("cors")
const products = require("./Page/Products")
const app = express()




app.use(cors());
app.use("/", products)

app.listen(7070,function(){
    console.log("App is running at port : 7070");
})