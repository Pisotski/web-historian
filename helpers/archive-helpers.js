var fs = require('fs');
var path = require('path');
var _ = require('underscore');

/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function(callback) {
  // var urlList = [];
  // fs.readFile(this.paths.list, (err, data) => {
  //   if (err) {
  //   console.log('err');
  //   callback(err, null)
  //   } else {
  //   var parsedData = data + '';
  //   callback(parsedData.split('\n'));
  //   }

  // });
  fs.readFile(exports.paths.list, function(err, sites) {
    sites = sites.toString().split('\n');
    if ( callback ) {
      callback(sites);
    }
  });
};

exports.isUrlInList = function(url, callback) {
  // this.readListOfUrls((err, data) => callback(_.contains(data, url)));
  // var path = this.paths.list
  // this.readListOfUrls((err, data) => {
  //   if (err) {
  //     console.log('error in isUrlInList')
  //     callback(err, null);
  //     console.log('error in isUrlInList')
  //     throw('error');
  //   } else {
  //     console.log(data)
  //     var check = _.contains(data, url);
  //     console.log(check);
  //     callback(null, check);
  //   }
  // });
  exports.readListOfUrls(function(sites) {
    var found = _.any(sites, function(site, i) {
      return site.match(url);
    });
    callback(found);
  });
};

exports.addUrlToList = function(url, callback) {
  
  // this.isUrlInList(url, (err, data) => {
  //   if (err) {
  //     throw('error');
  //   } else {
  //     if (!data) {
  //       callback(fs.appendFile(this.paths.list, url + '\n'));
  //     }
  //   }
  // })
  
  // this.isUrlInList(url, (boolean) => boolean === false ? callback(fs.appendFile(this.paths.list, url + '\n')) : null);
};

exports.isUrlArchived = function(url, callback) {
  //
  // var path = this.paths.archivedSites + '/' + url;
  // console.log(path);
  // fs.access(path, (err, data) => callback(!!err === true))
  
  //fs.access(path, function(err, data) {
  // if(err) {
  // dome some stuff with error; 
  // callback(err, null); 
  //} else {
  // do some stuff with data FROM THE READ;
  // callback(null, data);
  //}
  //});

  //check is Url is inside of and archive folder
};

exports.downloadUrls = function(urls) {
  // let urls = ['www.google.com', ....]
  // urls.forEach(function(url) {
  //isUrlArchvided(url, function(err, data) {
  // if(err) throw error(err);
  // console.log('Hello World, I got ', data);     
  //});
  //});
};















