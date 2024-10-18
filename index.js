const express = require("express");
const app = express();
const port = 5555;
const seederRoute = require('./routes/seederRoute');
const connectDB = require("./db/db");


connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',seederRoute);

app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
    
})