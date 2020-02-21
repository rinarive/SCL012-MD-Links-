const mdLinks = require('./index');
const myPath = process.argv[2];
let options = {
  validate: false,
  stats : false
}
if(process.argv.length < 3) {
  
  console.log('Por favor ingrese un archivo .md');
  return;
};

const mdlinks = (myPath, options) => {
  return new Promise((resolve, reject) => {
      if (error){
          reject(error)
    }
    if (options.validate) validate = true;
    if (options.stats) stats = true;
    if (!myPath) console.log('Debe ingresar un archivo directorio');
    let resolvedPath = mdLinks.validatePath(myPath);
    let validateTypeOfPath = mdLinks.isFileOrFolder(resolvedPath);
    if (validateTypeOfPath === 'folder') {
      mdLinks.isFolder(resolvedPath).then(data => resolve(data));
    } else if (validateTypeOfPath === 'file') {
      mdLinks.isFile(resolvedPath).then(data => resolve(data));   
    }
  });
};

mdlinks(myPath, options);