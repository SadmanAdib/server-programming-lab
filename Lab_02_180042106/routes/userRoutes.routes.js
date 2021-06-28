const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("<H1>Login Page</H1>");
});

router.get("/register", (req, res) => {
    res.sendFile("register.html", { root: "./views/users"});
});

module.exports = router;