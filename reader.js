var fs = require("fs");
var path = require("path");
var csv = require("./csv");

// $ node reader.js students.csv
var fileName = process.argv[2];
var filePath = path.join(__dirname, fileName);

var data = csv(filePath);
console.log(data);
