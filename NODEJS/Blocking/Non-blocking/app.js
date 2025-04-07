
//to check core of machine

const os = require("os")
console.log(os.cpus().length)

const fs = require('fs');


//blocing code
console.log("Start");
const data = fs.readFileSync('file.txt', 'utf8'); // Blocking operation
console.log(data);
console.log("End");


//non blocking coe 
console.log("Start");
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
console.log("End");
