const fs=require("fs")
fs.writeFileSync("file1.txt","hello hi")

const fn=require("./MathOperation.js")
console.log(fn)
 const a=fn.add(3,4)
 console.log(a)
 const b= fn.sub(3,4)
 console.log(b)


// Open a file and get a file descriptor
fs.open('example.txt', 'w', (err, fd) => {
    if (err) {
      console.error(err);
    } else {
      // Create a buffer with some data
      const buffer = Buffer.from('Hello,hjgkjub world!');
  
      // Write the data to the file descriptor asynchronously
      fs.write(fd, buffer, 0, buffer.length, 0, (err, bytesWritten) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Wrote ${bytesWritten} bytes to the file`);
        }
  
        // Close the file descriptor
        fs.close(fd, (err) => {
          if (err) {
            console.error(err);
          }
        });
      });
    }
  });