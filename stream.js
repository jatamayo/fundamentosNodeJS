const fs = require('fs');

let data = '';

let readableStream = fs.createReadStream(__dirname + ' /inpust.txt');