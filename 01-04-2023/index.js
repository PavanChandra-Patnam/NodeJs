const fs=require("fs");

console.log("start");
fs.readFile("./num1.txt","utf-8", (err,data) => {
    console.log("we are inside callback function",data);
})
fs.readFile("./num2.txt","utf-8",(err,data)=>{
    console.log("we are inside callback function",data);
})
fs.readFile("./num3.txt","utf-8",(err,data)=>{
    console.log("we are inside callback function",data);
})
console.log("end");
