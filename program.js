//learnyounode #3 
/*'use strict'
const fs = require('fs');
let contents = fs.readFileSync(process.argv[2])
let lines = contents.toString().split('\n').length -1;
console.log(lines);*/


//learnyounode #4 callback
/*'use strict'
let fs = require('fs')
let file = process.argv[2]
 fs.readFile(file ,  (err, contents) =>{
     if (err){
         return console.log(err)
     }
     let lines = contents.toString().split('\n').length-1
     console.log(lines)

})*/

//learnyounode #5 filtrado de extension 
/*'use strict'
const fs = require('fs')
let path = require('path')

let temp = process.argv[2]

fs.readdir(temp, (error,list)=>{
   list.forEach(function(file){
    if(path.extname(file) ==='.md'+ process.argv[3])
    console.log(file)
   })
})*/

//learnyounode #6 haciendolo modular
/*'use strict'

let FileList = require('./fileUtil.js');
let dir = process.argv[2]
let ext = process.argv[3]

FileList(dir ,ext,function(error, data){
    if (error)
        return console.log('error en el listado de archivos', error)
    
    data.forEach(function (file)  {
        console.log(file)
    });
});*/


//solucion #7 http client
/*'use strict'
var http = require ('http')
http.get(process.argv[2], function(response) {
    response.setEncoding('utf8')
    response.on('data', console.log)
    response.on('error', console.error)
 
}).on('error', console.error)*/

// solution #8 collect http

/*'use strict'
const bl = require('bl');
var http = require ('http');

http.get(process.argv[2], function(response) {
    response.setEncoding('utf8');
    
    response.pipe(bl(function(error, data){
        let ans = data.toString();
        console.log(ans.length);
        console.log(ans);
    }));
 
});
*/

// solucion #9 juggling async 
/*'use strict'
const bl = require('bl');
var http = require ('http');
let results = [];
let count = 0;

function httpGet(index){
    http.get(process.argv[2 + index], function(response) {
        response.pipe(bl(function(error, data){
            if(error)
            return console.error(error)

            results[index] = data.toString();
            count++
          
            if (count == 3)
            console.log(results.join('\n'))
            
        }));
     
    });

}
for (let i = 0 ; i < 3 ; i++)
httpGet(i)
*/
//time server  solucion learnyounode #10
/*'use strict'
const net = require('net')
function formato(dato){
    return Number(dato)<10?"0"+dato:dato; 
}
function fechaActual(){
    let fecha = new Date();
    let ans = "";
    ans+=fecha.getFullYear()+"-";
    ans+=formato(fecha.getMonth()+1)+"-";
    ans+=formato(fecha.getDate())+" ";
    ans+=formato(fecha.getHours())+":";
    ans+=formato(fecha.getMinutes())+"\n";
    return ans;
}
const server = net.createServer(function (socket) {
       socket.write(fechaActual());
       socket.end();

     })
     server.listen(process.argv[2])*/

//HTTP FILE SERVER (Exercise 11 of 13) 
/*"use strict"
let http = require("http")
let fs = require("fs");
let server = http.createServer(function(req,res){
    let file = fs.createReadStream(process.argv[3]);
    file.pipe(res)

})
server.listen(process.argv[2]);*/

// HTTP UPPERCASERER (Exercise 12 of 13)
/*"use strict"

let http = require("http");
const map = require('through2-map');

let server = http.createServer(function(req,res){

    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
      })).pipe(res);

})
server.listen(process.argv[2]);*/

// ## HTTP JSON API SERVER (Exercise 13 of 13)
//'use strict'
/*let http = require("http");
let url = require('url');
function parsetime(time){
    return{
        hour : time.getHours(),
        minute : time.getMinutes(),
        second : time.getSeconds(),      
    }
   
}
function formatoUnix(time){
   return{ unixtime : time.getTime() }
}

let server = http.createServer(function(req,res){
    let obj = url.parse(req.url, true);
    let time = new Date (obj.query.iso);
    let result 

    res.writeHead(200, { 'Content-Type': 'application/json' }) 
    if( obj.pathname == '/api/parsetime')
        result = parsetime(time)
  

    else if(obj.pathname=='/api/unixtime')
        result = formatoUnix(time);
        if(result){
            res.writeHead(200,{ 'Content-Type': 'application/json'})
            res.end(JSON.stringify(result))

        }else{
            res.writeHead(404)
            res.end()
        }

})


server.listen(process.argv[2])*/