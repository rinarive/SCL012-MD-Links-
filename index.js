
const fs = require('fs');

const path = require('path');

let filename = process.argv[2];

filename = path.resolve(filename); 
filename = path.normalize(filename);


const readFile = ()=>{
  return new Promise((rej, res)=>{
    fs.readFile(filename, "utf8",(err, data)=>{
      if(err){
        rej(err);
      }else{
        res(console.log(data))
      }    
    });    
  })
}

// Función que llama a la promesa
if (path.extname(filename) === '.md') {

 readFile(filename)
    .then(fileData => {
      codeLinkStatus(fileData);
    })
    .catch(error => {
      console.error(error);
    });
} else {
  console.log('Por favor, introduce un archivo .md');
}

const codeLinkStatus = links =>{
  links.map(element => {
    fetch(element.href)
      .then(response => {
        if (response.ok) {
          console.log("los links son OK" );
        } else {
          console.log("ESTOS LINKS NO FUNCIONAN");
        }
      })
      .catch(error =>{
        console.log("OOPSS HUBO UN");
  });
});
}

