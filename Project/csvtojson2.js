fs = require('fs')
fs.readFile('datafile.csv', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  var csv=data;
  var lines=csv.split("\n");
  //console.log(lines);
  var result = [];
  var headers=lines[0].split(",");
  //console.log(headers);
    for(var i=1;i<lines.length-1;i++){
    var obj = {};
    var currentline=lines[i].split(",");
    //console.log(currentline);
    for(var j=0;j<headers.length;j++){
    obj[headers[j]] = currentline[j];
      //console.log(obj[headers[j]]);
    }
    //console.log(obj);
    result.push(obj);
  }
  //return result; //JavaScript object
console.log(result); //JSON
});
