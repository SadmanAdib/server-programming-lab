const express = require("express");
const app = express();

//Static Resources
app.use(express.static("public"));
//View engine notified that ejs being used
app.set("view engine", "ejs");

//Routes
const indexRoutes = require("./routes/index.routes");
app.use(indexRoutes);

module.exports = app;
