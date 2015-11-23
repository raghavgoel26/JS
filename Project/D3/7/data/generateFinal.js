fs = require('fs')
fs.readFile('datajson.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  //console.log(data);
  var json = JSON.parse(data);
  //console.log(json);

   var json2=[];

   var column1="GDP Billions (US$) - 2013";

   for(i=0;i<6;++i)
   {
   json2[i]={};
   json2[i].gdp=0;
   }
   json2[0].conti="North America";

   for(i=0;i<json.length;++i)
   {
   if(json[i]["Country Name"]=="Canada"||json[i]["Country Name"]=="Mexico" ||json[i]["Country Name"]=="USA")
   {
   json2[0].gdp+=parseFloat(json[i][column1]);
   }
   }

   json2[1].conti="South America";

   for(i=0;i<json.length;++i)
   {
   if(json[i]["Country Name"]=="Argentina"||json[i]["Country Name"]=="Brazil")
   {
   json2[1].gdp+=parseFloat(json[i][column1]);
   }
   }


   json2[2].conti="Asia";

   for(i=0;i<json.length;++i)
   {
   if(json[i]["Country Name"]=="China"||json[i]["Country Name"]=="India" ||json[i]["Country Name"]=="Indonesia"||json[i]["Country Name"]=="Japan" ||json[i]["Country Name"]=="Russia"||json[i]["Country Name"]=="Saudi Arabia" ||json[i]["Country Name"]=="Republic of Korea" )
   {
   json2[2].gdp+=parseFloat(json[i][column1]);
   }
   }

   json2[3].conti="Europe";

   for(i=0;i<json.length;++i)
   {
   if(json[i]["Country Name"]=="France"||json[i]["Country Name"]=="Germany" ||json[i]["Country Name"]=="Italy"||json[i]["Country Name"]=="Turkey" ||json[i]["Country Name"]=="United Kingdom")
   {
   json2[3].gdp+=parseFloat(json[i][column1]);
   }
   }

   json2[4].conti="Africa";

   for(i=0;i<json.length;++i)
   {
   if(json[i]["Country Name"]=="South Africa")
   {
   json2[4].gdp+=parseFloat(json[i][column1]);
   }
   }

   json2[5].conti="Australia";

   for(i=0;i<json.length;++i)
   {
    if(json[i]["Country Name"]=="Australia")
    {
    json2[5].gdp+=parseFloat(json[i][column1]);
    }
   }

  console.log(JSON.stringify(json2, null, 2));
});



function visualize(data) {
//use data
 }
