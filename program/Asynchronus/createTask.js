import readlineSync from "readline-sync";
import fs from "fs";
let taskname = readlineSync.question("Enter the Task : ");

let fileData;

fs.readFile("tasks.json", (err,data) => 
{
    if (err) throw err;
    console.log(data);
    fileData = JSON.parse(data);
    console.log(taskname);
    fileData.push(taskname);
    console.log(fileData);
    console.table(fileData);
    fileData = JSON.stringify(fileData);
    fs.writeFile("tasks.json", fileData, (err)=> {
        if(err) throw err
        console.log("Task added Successfully");

    })
}

)