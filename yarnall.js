#!/usr/bin/env node

/* eslint-disable no-var */
/* eslint-disable flowtype/require-valid-file-annotation */
'use strict';

var path = require('path'), fs=require('fs');

const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());

var currentPath = path.resolve(process.cwd(), '.');

var folders = dirs(currentPath);

var exec = require('child_process').execSync;

//folders.forEach(function(value){
    //if(value[0] == '.'){return;}
    //console.log('cd ' + value);
    //console.log('yarn');
    //console.log('cd ..');
    //exec('cd '+value+'  &&  yarn  &&  cd ..', {stdio:[0,1,2]})
//});
//

var glob = require("glob");
var dirname = require('path').dirname;
var path = require('path');
console.log(path.sep);


// options is optional
glob("**/package.json", function (er, files) {
  files.forEach(function(f){
    var newPath = dirname(f);
      if(newPath.indexOf("node") < 0 ){
        console.log(newPath);

	      exec('cd '+newPath, {stdio:[0,1,2]})
        // delete file 
        fs.unlink('yarn.lock', function(err) {
            if(err && err.code == 'ENOENT') {
                // file doens't exist
                console.info("File doesn't exist, won't remove it.");
            } else if (err) {
                // other errors, e.g. maybe we don't have enough permission
                console.error("Error occurred while trying to remove file");
            } else {
                console.info(`removed`);
            }
        });




	      exec('cd '+newPath+'  &&  yarn  &&  cd ..', {stdio:[0,1,2]})





      }
  });
})

