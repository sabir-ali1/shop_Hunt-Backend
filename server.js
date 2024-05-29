require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require("./routes/auth-routes");
const serviceRoutes = require("./routes/service-routes");
const adminRoutes = require("./routes/adim-routes");
const connectDb = require("./utils/db");
const errorMiddelware = require("./middelware/error-middelware");
const cors = require("cors");


const corsOption = {
    origin: 'https://6656ece31575547901c0dec5--precious-pastelito-fe55a0.netlify.app',
    methods :"GET, POST, PUT, DELETE, PATCH, HEAD",
    Credentials : true
}

app.use(cors(corsOption));

app.use(express.json());

app.use("/api/product",serviceRoutes);
app.use("/api/auth",authRoutes);
app.use(errorMiddelware);


//lets define for admie route

app.use("/api/admin",adminRoutes);

const port = 5000;

connectDb().then(()=>{
    app.listen(port,()=>{
        console.log(`server is running on http://localhost:${port}`);
    });
})


