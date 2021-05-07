const http = require("http");

const server = http.createServer((req, res) => 
{
    if (req.url == "/")
    {
        res.write("<h1>This is BASE url.</h1>");
        res.end();
    }
    else if(req.url == "/home")
    {
        res.write("<h1>This is HOME page</h1>");
        res.end();   
    }
    else
    {
        res.write("<h1>This page does not exist.</h1><br><a href = '/'>Go to BASE</a>");
        res.end();
    }
});

module.exports = { server };