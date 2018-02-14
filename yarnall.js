#!/usr/bin/env node

/* eslint-disable no-var */
/* eslint-disable flowtype/require-valid-file-annotation */
'use strict';

var path = require('path'), fs=require('fs');

const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());

var currentPath = path.resolve(process.cwd(), '.');

var folders = dirs(currentPath);

var exec = require('child_process').execSync;

folders.forEach(function(value){
    if(value[0] == '.'){return;}
    console.log('cd ' + value);
    console.log('yarn');
    console.log('cd ..');
    exec('cd '+value+'  &&  yarn  &&  cd ..', {stdio:[0,1,2]})
});
