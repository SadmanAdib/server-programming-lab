const HelloFunction = require("./helloWorld");

console.log(HelloFunction.Hello);
console.log(HelloFunction.name);

setInterval(()=>
{
    HelloFunction.Hello();
}, 1000); //Runs continuously but periodically with the specified time interval

setTimeout(()=>
{
    console.log(HelloFunction.name);
}, 5000);  //Runs only once after the specified time.