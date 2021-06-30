const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("users/welcome.ejs");
});

module.exports = router;