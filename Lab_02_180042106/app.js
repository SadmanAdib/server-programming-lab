const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.routes");

app.use(userRoutes); 
app.get("/", (req, res) => {
    res.sendFile("home.html", {root: "./views"});
});

module.exports = app;