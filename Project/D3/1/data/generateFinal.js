fs = require('fs')
fs.readFile('datajson.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  var json = JSON.parse(data);
  //console.log(json);


   var xColumn="Country Name";
   var yColumn="Population (Millions) - 2013"
   var results,
       data = [],

   results = json;
   //console.log(results);

   results.forEach( function( key, val ) {

       var result = {};

       result.country = key[xColumn];
       result.population = key[yColumn]; //parseInt( val.Population.replace( /,/g, '' ), 10 );
     //  console.log(result);
       data.push( result );
   } );

  console.log(JSON.stringify(data, null, 2));
});



function visualize(data) {
//use data
 }
