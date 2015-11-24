fs = require('fs')
fs.readFile('datajson.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  var json = JSON.parse(data);
  //console.log(json);

   var json2=[];

   var column1="Population (Millions) - 2013";

   for(i=0;i<6;++i)
   {
     json2[i]={};
     json2[i].pop=0;
   }


  var countryToContinent={


      "Argentina":"South America",
      "Australia":"Australia",
      "Brazil" : "South America",
      "Canada": "North America",
      "China":"Asia",
      "France":"Europe",
      "Germany":"Europe",
      "India":"Asia",
      "Indonesia":"Asia",
      "Italy":"Europe",
      "Japan":"Asia",
      "Mexico":"North America",
      "Republic of Korea":"Asia",
      "Russia":"Europe",
      "Saudi Arabia":"Asia",
      "South Africa":"Africa",
      "Turkey":"Asia",
      "United Kingdom":"Europe",
      "USA":"North America"

  };

  var contiToPop={
    "Africa":0,
    "North America":0,
    "South America":0,
    "Asia":0,
    "Europe":0,
    "Australia":0
  };


  for(i=0;i<json.length;++i)
  {
    var conti=countryToContinent[json[i]["Country Name"]];
    contiToPop[conti]+=parseFloat(json[i][column1]);
  }



   json2[0].conti="North America";

   json2[1].conti="South America";

   json2[2].conti="Asia";

   json2[3].conti="Europe";

   json2[4].conti="Africa";

   json2[5].conti="Australia";


  for(i=0;i<6;++i)
  {
    json2[i].pop=contiToPop[json2[i].conti];
  }


  console.log(JSON.stringify(json2, null, 2));
});
