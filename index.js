const fs = require('fs')



fs.writeFile("current date-time.txt",JSON.stringify(new Date().toString()),function(err,data){
    if(err) throw err;
    console.log(data)
})
fs.readdir('./',function(err,data){
    if(err) throw err;
    console.log(data)
})