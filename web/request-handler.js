var path = require('path');
var archive = require('../helpers/archive-helpers');
var headers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  
  if (req.method === 'GET' && req.url === '/') {
    fs.readFile(archive.paths.siteAssets + '/index.html', 'utf8', (err, data) => {
      res.statusCode = 200;
      res.end(data);
      
    });
  }
  
  if (archive.paths.archivedSites + req.url && req.method === 'GET' ) {
    fs.readFile (archive.paths.archivedSites + req.url, 'utf8', (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end();
      }
      res.statusCode = 200;
      res.end(data);
    });
  }
  
  if (req.method === 'POST') {      
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    }).on('end', () => {
      console.log(body.slice(4));
      fs.appendFile(archive.paths.list, body.slice(4) + '\n', (err) => {
        res.type = 'form';
        res.statusCode = 302;
        res.end();    
      });
    });
  }
      

  
  // res.end(archive.paths.list);
//archive.paths.list
///Users/student/code/hrsf95-web-historian/archives/sites.txt
};
