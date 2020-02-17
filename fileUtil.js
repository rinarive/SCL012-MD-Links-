//learnyounode #6 haciendolo modular
/*'use strict'
let fs = require('fs')
let path = require('path')

function FileList(directorio, extension, callback){

      fs.readdir(directorio, function(err, list){
        if (err)
            return callback(err)

        list = list.filter(function(file){
            return path.extname(file) === '.md' + extension
        })
              
       return callback (null, list)
    });
}
module.exports = FileList;*/