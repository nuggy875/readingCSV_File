var fs = require("fs");

module.exports = function(filePath){
  var data = fs.readFileSync(filePath, {encoding: "utf8"});
  var rows = data.split("\n");
  var result = [];

  for (var rowIndex in rows){
    if (rowIndex === "0"){
      var colData = rows[0].split(",");
    }else if (rowIndex == rows.length-1){
      break;
    }else{
      var data = {};
      var row = rows[rowIndex].split(",");
      for (var colIndex in colData){
        if (colIndex==colData.length-1){
          break;
        }
        var info = colData[colIndex];
        data[info] = row[colIndex];
      }
      result.push(data);
    }
  }
  return result;
}
