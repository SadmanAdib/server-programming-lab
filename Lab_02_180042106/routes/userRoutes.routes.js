const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
    res.send("<H1>Login Page</H1>");
});

router.get("/register", (req, res) => {
    res.send("<H1>Register Page</H1>");
});

module.exports = router;