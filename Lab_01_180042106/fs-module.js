const fs = require("fs");

//fs.writeFileSync("./contents/demoFile.txt", "We are learning JS.");
//fs.appendFileSync("./contents/demoFile.txt", "We are also learning NodeJS");

//fs.rename("./contents/demoFile.txt", "./contents/renamedFile.txt", (err)=>
//{
//    if(err)
//    {
//        console.log(err);
//    }
//    else
//    {
//      console.log("Rename successfull");
//    }
//});

console.log("first");

fs.readFile("./contents/renamedFile.txt", "utf-8", (err)=>
{
    if(err)
    {
        console.log(err);
    }
    else
    {
        fs.appendFile("./contents/renamedFile.txt", "Is this a synchronous process?", (err)=> 
        {
            console.log(err);
        });
        fs.readFile("./contents/renamedFile.txt", "utf-8", (err,data)=>
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log(data);
            }
        });
    }
});

console.log("second");

//fs.unlink("./contents/renamedFile.txt", (err)=>
//{
//    if(err)
//    {
//        console.log(err);
//    }
//    else
//    {
//        console.log("Successfully Deleted");
//    }
//});

