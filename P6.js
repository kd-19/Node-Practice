
//getting argument from Command Line
console.log(process.argv);

const fs = require('fs');

//creating file by command line
const input = process.argv;

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}

else if(input[2]=='remove'){
    fs.unlinkSync(input[3]);
}
else{
    console.log("Invalid input");
}
