const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const router = require('./routes/auth.route.js')
const { connectDB } = require("./lib/db.js");
dotenv.config();
connectDB();
const PORT=process.env.PORT || 8080
const app=express()
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://restaurants-pbd2.onrender.com",
    credentials: true,
  })
);

app.use("/api/auth", router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../frontend/build/index.html"));
  });
}
app.listen(PORT,()=>{
    console.log(`App is running on Port ${PORT}`);
})
