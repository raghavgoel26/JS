
    var json = [ { country: 'Argentina', population: '41.49' },
  { country: 'Australia', population: '23.05' },
  { country: 'Brazil', population: '199.88' },
  { country: 'Canada', population: '35.21' },
  { country: 'China', population: '1360.76' },
  { country: 'France', population: '63.70' },
  { country: 'Germany', population: '81.75' },
  { country: 'India', population: '1239.26' },
  { country: 'Indonesia', population: '247.95' },
  { country: 'Italy', population: '61.00' },
  { country: 'Japan', population: '127.34' },
  { country: 'Mexico', population: '116.02' },
  { country: 'Russia', population: '141.44' },
  { country: 'Saudi Arabia', population: '26.93' },
  { country: 'South Africa', population: '51.81' },
  { country: 'Republic of Korea', population: '50.24' },
  { country: 'Turkey', population: '75.81' },
  { country: 'United Kingdom', population: '63.76' },
  { country: 'USA', population: '316.85' },
  { country: 'European Union', population: '504.89' } ];

  var l=json.length;
  for(i=0;i<l;++i)
  {
    for(j=i+1;j<l;++j)
    {
      if((parseFloat(json[i].population))<(parseFloat(json[j].population)))
      {
        var temp=json[i];
        json[i]=json[j];
        json[j]=temp;
      }
    }
  }

  console.log(json);
