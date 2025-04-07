/*const fs =require('fs')

fs.writeFileSync('example.txt',"Helloddqd")

fs.writeFile("text.txt",'hellow',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file created")
    }
})

fs.readFile('example.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})


const synreadFile= fs.readFileSync("example.txt","utf8")
console.log(synreadFile)

fs.appendFile("example.text",'\n this is appended text',(err)=>{
    if(err){    
        console.log(err)
    }else{
        console.log("file appended")
    }
})

fs.unlinkSync("example.txt")

 const readafterdelete=fs.readFileSync("example.text","utf8")
 console.log(readafterdelete,"deleted")
*/
const fs = require('fs');

// Create a file and write content
fs.writeFileSync('example.txt', "Helloddqd");

// Read the file asynchronously and delete it only after reading
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Read error:", err);
    } else {
        console.log("Async Read:", data);

        // Delete the file after reading
        fs.unlink('example.txt', (err) => {
            if (err) {
                console.log("Deletion error:", err);
            } else {
                console.log("File deleted successfully");
            }
        });
    }
});

// Read the file synchronously before deletion
try {
    const syncData = fs.readFileSync('example.txt', 'utf8');
    console.log("Sync Read:", syncData);
} catch (err) {
    console.log("Sync Read error:", err.message);
}

// Attempt to read after deletion (this should throw an error)
setTimeout(() => {
    try {
        const readAfterDelete = fs.readFileSync("example.txt", "utf8");
        console.log(readAfterDelete, "deleted");
    } catch (err) {
        console.log("Read after delete error:", err.message);
    }
}, 100); // Wait for deletion
