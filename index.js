let demo=require('./demo');
let fs= require('fs');

fs.writeFileSync("demo.txt","Demo file created using File System module.");

console.log("Hey!! I am here, Whatsuppp");

let a=7;
let b=17;
let c=45;
let d=a+b+c;

console.log(d)
console.warn(d);
console.log(demo.x + demo.y);
demo.z();

