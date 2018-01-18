#! /usr/bin/env node

const merge = require('merge-package-json');
const fs = require('fs');

const classic = require('../packages/base/package.json');
const electron = require('../src/electron/package.electron.json');

dst = merge(classic, electron);

// create updated package.json
console.log('Will Update package.json for integrating electron');
fs.writeFile("./package.json", dst);
