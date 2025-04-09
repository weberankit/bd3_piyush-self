const http = require("http")
const fs=require("fs")
const url=require("url")

const myServer=http.createServer((req,res)=>{
//-1console.log("New req rec")
//req.headers
//2-console.log(req.headers)
const log=`${Date.now()} this is date
lets check url ${req.url}
`;
const Multiurl=url.parse(req.url)
console.log(Multiurl)
fs.appendFile("tt.txt",log,(err,data)=>{
 //   res.end("Helo from server again")

  /*  switch(req.url){
          case "/":res.end("Homepage")
          break;
          case "/about":res.end("aboitpage") 
          break;
          default:
            res.end("404notfound")
    }

*/


//after url package
switch(Multiurl.pathname){
    case "/":res.end("Homepage")
    break;
    case "/about":res.end("aboitpage") 
    break;
    default:
      res.end("404notfound")
}


})


//3 res.end("joker hu mai")
})


myServer.listen(8000,()=>{
    console.log("everything is okay")
})