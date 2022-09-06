import fs from "fs";
 /*
 FS Write File Needs
 1)Give File Name
 2)Data that has to be written / File Contents
 3)Call Back Function
 */

 let str = "Hello to file Systems"

 fs.writeFile("task.txt",str,(err)=>{
 if(err) throw err;})
//  {
    //console.log(err);
    //return;
    console.log("Saved!")
 