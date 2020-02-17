const fs = require('fs');
const path = require('path');
const Marked = require('marked');
const myPath = process.argv[2];
if(process.argv.length < 3) {
  console.log('Por favor ingrese un archivo .md');
  return;
};

let mdLinks = {

  validatePath : myPath => {
    try {
      const isAbsolute = mdLinks.isAbsolute(myPath);
      if (isAbsolute === false) {
        return mdLinks.convertToAbsolutePath(myPath); 
      } else if (isAbsolute === true) {
        return myPath.send({
          message : "soy el archivo"
        });
      }
    } catch (error) {
      console.error(error, 'No se puede verificar el archivo');
    }
  },
  isAbsolute : myPath => {
    const checkPath = path.resolve(myPath) === path.normalize(myPath).replace(/[\/|\\]$/, '');
    if (checkPath === false) {
      return false;
    } else {
      return true;
    }
  },

  convertToAbsolutePath : myPath => path.resolve(myPath),

  isFileOrFolder : (myPath) => {
    const fsStats = fs.lstatSync(myPath);
    if (fsStats.isFile()) {
      return 'file';
    } else if (fsStats.isDirectory()) {
      return 'folder';
    }
  },

  isFolder : myPath => {
    return new Promise((resolve, reject) => {
      fs.readdir(myPath, 'utf8', function(err, files) {
        const filePromises = files.map((aFile) => {
          let filePath = myPath + '/' + aFile;
          return mdLinks.isFile(filePath);
        });
        Promise.all(filePromises).then((filesData) => {
          filesData = filesData.reduce((value1, value2) => value1.concat(value2));
          resolve(filesData);
        }).catch((error) => {
          console.error('Error > ' + error);
        });
      });
    });
  },
  isFile : (file) => {
    return new Promise((resolve, reject) => {
      const fileExt = mdLinks.checkExtName(file);
      if (fileExt === '.md') {
        fs.readFile(file, 'utf8', (err, data) => {
          if (err) reject(err);
          data = data.split('\n').map((element, index) => mdLinks.markdownLinkExtractor(file, element, index + 1)).filter(element => element.length !== 0).reduce((value1, value2) => value1.concat(value2));
          
          resolve(console.log(data));
  
        }); 
      }
    });
  },
  checkExtName : file => path.extname(file),
  markdownLinkExtractor : (file, markdown, line) => {
    const links = [];
    const renderer = new Marked.Renderer();
   
    renderer.link = function(href, title, text) {
      links.push({
        href: href,
        text: text,
        file: file,
       
      });
    };
  
    Marked(markdown, {renderer: renderer});

    return links;
  }
};
mdLinks.isFile ( myPath) ;

module.exports = mdLinks;
