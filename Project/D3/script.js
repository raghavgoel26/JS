$( function() {

    var json = [
      {
        "Country Name": "Argentina",
        "Area - (Sq. Km.) 2010": "2766890.00",
        "Population (Millions) - 2010": "40.12",
        "Population (Millions) - 2011": "40.57",
        "Population (Millions) - 2012": "41.03",
        "Population (Millions) - 2013": "41.49",
        "GDP Billions (US$) - 2010": "367.57",
        "GDP Billions (US$) - 2011": "444.61",
        "GDP Billions (US$) - 2012": "474.95",
        "GDP Billions (US$) - 2013": "498.70",
        "Domestic Product Per Capita Income (US$) - 2010": "9162.30",
        "Domestic Product Per Capita Income (US$) - 2011": "10959.08",
        "Domestic Product Per Capita Income (US$) - 2012": "11576.21",
        "Domestic Product Per Capita Income (US$) - 2013": "12019.18",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "644.35",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "716.45",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "743.12",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "776.28"
      },
      {
        "Country Name": "Australia",
        "Area - (Sq. Km.) 2010": "7686850.00",
        "Population (Millions) - 2010": "22.18",
        "Population (Millions) - 2011": "22.49",
        "Population (Millions) - 2012": "22.77",
        "Population (Millions) - 2013": "23.05",
        "GDP Billions (US$) - 2010": "1247.11",
        "GDP Billions (US$) - 2011": "1490.52",
        "GDP Billions (US$) - 2012": "1541.80",
        "GDP Billions (US$) - 2013": "1589.12",
        "Domestic Product Per Capita Income (US$) - 2010": "56219.82",
        "Domestic Product Per Capita Income (US$) - 2011": "66288.70",
        "Domestic Product Per Capita Income (US$) - 2012": "67722.59",
        "Domestic Product Per Capita Income (US$) - 2013": "68939.33",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "880.09",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "920.75",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "970.76",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "1015.94"
      },
      {
        "Country Name": "Brazil",
        "Area - (Sq. Km.) 2010": "8511965.00",
        "Population (Millions) - 2010": "194.95",
        "Population (Millions) - 2011": "196.66",
        "Population (Millions) - 2012": "198.36",
        "Population (Millions) - 2013": "199.88",
        "GDP Billions (US$) - 2010": "2142.93",
        "GDP Billions (US$) - 2011": "2492.91",
        "GDP Billions (US$) - 2012": "2395.97",
        "GDP Billions (US$) - 2013": "2456.66",
        "Domestic Product Per Capita Income (US$) - 2010": "10992.38",
        "Domestic Product Per Capita Income (US$) - 2011": "12676.55",
        "Domestic Product Per Capita Income (US$) - 2012": "12078.83",
        "Domestic Product Per Capita Income (US$) - 2013": "12290.64",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "2186.54",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "2294.18",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "2355.59",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "2466.57"
      },
      {
        "Country Name": "Canada",
        "Area - (Sq. Km.) 2010": "9976140.00",
        "Population (Millions) - 2010": "34.08",
        "Population (Millions) - 2011": "34.44",
        "Population (Millions) - 2012": "34.83",
        "Population (Millions) - 2013": "35.21",
        "GDP Billions (US$) - 2010": "1616.02",
        "GDP Billions (US$) - 2011": "1781.08",
        "GDP Billions (US$) - 2012": "1819.08",
        "GDP Billions (US$) - 2013": "1843.75",
        "Domestic Product Per Capita Income (US$) - 2010": "47424.50",
        "Domestic Product Per Capita Income (US$) - 2011": "51716.26",
        "Domestic Product Per Capita Income (US$) - 2012": "52231.86",
        "Domestic Product Per Capita Income (US$) - 2013": "52364.36",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "1370.64",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "1435.78",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "1488.31",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "1534.94"
      },
      {
        "Country Name": "China",
        "Area - (Sq. Km.) 2010": "9596960.00",
        "Population (Millions) - 2010": "1340.91",
        "Population (Millions) - 2011": "1347.35",
        "Population (Millions) - 2012": "1354.04",
        "Population (Millions) - 2013": "1360.76",
        "GDP Billions (US$) - 2010": "5930.39",
        "GDP Billions (US$) - 2011": "7321.99",
        "GDP Billions (US$) - 2012": "8227.04",
        "GDP Billions (US$) - 2013": "9020.31",
        "Domestic Product Per Capita Income (US$) - 2010": "4422.66",
        "Domestic Product Per Capita Income (US$) - 2011": "5434.36",
        "Domestic Product Per Capita Income (US$) - 2012": "6075.92",
        "Domestic Product Per Capita Income (US$) - 2013": "6628.86",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "10128.40",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "11305.77",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "12405.67",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "13623.26"
      },
      {
        "Country Name": "France",
        "Area - (Sq. Km.) 2010": "547030.00",
        "Population (Millions) - 2010": "62.77",
        "Population (Millions) - 2011": "63.09",
        "Population (Millions) - 2012": "63.41",
        "Population (Millions) - 2013": "63.70",
        "GDP Billions (US$) - 2010": "2570.59",
        "GDP Billions (US$) - 2011": "2778.09",
        "GDP Billions (US$) - 2012": "2608.70",
        "GDP Billions (US$) - 2013": "2739.27",
        "Domestic Product Per Capita Income (US$) - 2010": "40955.56",
        "Domestic Product Per Capita Income (US$) - 2011": "44034.38",
        "Domestic Product Per Capita Income (US$) - 2012": "41140.71",
        "Domestic Product Per Capita Income (US$) - 2013": "42999.97",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "2131.48",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "2213.78",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "2254.07",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "2289.92"
      },
      {
        "Country Name": "Germany",
        "Area - (Sq. Km.) 2010": "357021.00",
        "Population (Millions) - 2010": "81.76",
        "Population (Millions) - 2011": "81.78",
        "Population (Millions) - 2012": "81.92",
        "Population (Millions) - 2013": "81.75",
        "GDP Billions (US$) - 2010": "3312.19",
        "GDP Billions (US$) - 2011": "3607.36",
        "GDP Billions (US$) - 2012": "3400.58",
        "GDP Billions (US$) - 2013": "3597.97",
        "Domestic Product Per Capita Income (US$) - 2010": "40512.53",
        "Domestic Product Per Capita Income (US$) - 2011": "44110.99",
        "Domestic Product Per Capita Income (US$) - 2012": "41512.75",
        "Domestic Product Per Capita Income (US$) - 2013": "44010.37",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "2957.38",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "3113.93",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "3197.07",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "3269.56"
      },
      {
        "Country Name": "India",
        "Area - (Sq. Km.) 2010": "3287590.00",
        "Population (Millions) - 2010": "1190.52",
        "Population (Millions) - 2011": "1206.92",
        "Population (Millions) - 2012": "1223.17",
        "Population (Millions) - 2013": "1239.26",
        "GDP Billions (US$) - 2010": "1614.83",
        "GDP Billions (US$) - 2011": "1838.17",
        "GDP Billions (US$) - 2012": "1824.83",
        "GDP Billions (US$) - 2013": "1972.84",
        "Domestic Product Per Capita Income (US$) - 2010": "1356.41",
        "Domestic Product Per Capita Income (US$) - 2011": "1523.03",
        "Domestic Product Per Capita Income (US$) - 2012": "1491.89",
        "Domestic Product Per Capita Income (US$) - 2013": "1591.95",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "4021.77",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "4425.64",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "4684.37",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "5031.68"
      },
      {
        "Country Name": "Indonesia",
        "Area - (Sq. Km.) 2010": "1919440.00",
        "Population (Millions) - 2010": "237.64",
        "Population (Millions) - 2011": "241.03",
        "Population (Millions) - 2012": "244.47",
        "Population (Millions) - 2013": "247.95",
        "GDP Billions (US$) - 2010": "709.54",
        "GDP Billions (US$) - 2011": "846.16",
        "GDP Billions (US$) - 2012": "878.20",
        "GDP Billions (US$) - 2013": "946.39",
        "Domestic Product Per Capita Income (US$) - 2010": "2985.77",
        "Domestic Product Per Capita Income (US$) - 2011": "3510.59",
        "Domestic Product Per Capita Income (US$) - 2012": "3592.29",
        "Domestic Product Per Capita Income (US$) - 2013": "3816.80",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "1034.65",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "1125.29",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "1216.74",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "1314.66"
      },
      {
        "Country Name": "Italy",
        "Area - (Sq. Km.) 2010": "301230.00",
        "Population (Millions) - 2010": "60.34",
        "Population (Millions) - 2011": "60.63",
        "Population (Millions) - 2012": "60.82",
        "Population (Millions) - 2013": "61.00",
        "GDP Billions (US$) - 2010": "2059.19",
        "GDP Billions (US$) - 2011": "2196.33",
        "GDP Billions (US$) - 2012": "2014.08",
        "GDP Billions (US$) - 2013": "2076.01",
        "Domestic Product Per Capita Income (US$) - 2010": "34126.21",
        "Domestic Product Per Capita Income (US$) - 2011": "36227.33",
        "Domestic Product Per Capita Income (US$) - 2012": "33115.03",
        "Domestic Product Per Capita Income (US$) - 2013": "34034.39",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "1799.17",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "1844.39",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "1832.92",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "1835.66"
      },
      {
        "Country Name": "Japan",
        "Area - (Sq. Km.) 2010": "377835.00",
        "Population (Millions) - 2010": "128.05",
        "Population (Millions) - 2011": "127.90",
        "Population (Millions) - 2012": "127.61",
        "Population (Millions) - 2013": "127.34",
        "GDP Billions (US$) - 2010": "5495.39",
        "GDP Billions (US$) - 2011": "5897.02",
        "GDP Billions (US$) - 2012": "5963.97",
        "GDP Billions (US$) - 2013": "5149.90",
        "Domestic Product Per Capita Income (US$) - 2010": "42916.74",
        "Domestic Product Per Capita Income (US$) - 2011": "46108.00",
        "Domestic Product Per Capita Income (US$) - 2012": "46735.72",
        "Domestic Product Per Capita Income (US$) - 2013": "40441.75",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "4389.48",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "4457.56",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "4627.89",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "4778.52"
      },
      {
        "Country Name": "Mexico",
        "Area - (Sq. Km.) 2010": "1972550.00",
        "Population (Millions) - 2010": "112.32",
        "Population (Millions) - 2011": "113.74",
        "Population (Millions) - 2012": "114.87",
        "Population (Millions) - 2013": "116.02",
        "GDP Billions (US$) - 2010": "1034.15",
        "GDP Billions (US$) - 2011": "1158.30",
        "GDP Billions (US$) - 2012": "1177.12",
        "GDP Billions (US$) - 2013": "1274.97",
        "Domestic Product Per Capita Income (US$) - 2010": "9207.36",
        "Domestic Product Per Capita Income (US$) - 2011": "10184.24",
        "Domestic Product Per Capita Income (US$) - 2012": "10247.18",
        "Domestic Product Per Capita Income (US$) - 2013": "10989.10",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "1566.31",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "1662.36",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "1758.90",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "1848.42"
      },
      {
        "Country Name": "Russia",
        "Area - (Sq. Km.) 2010": "17075200.00",
        "Population (Millions) - 2010": "142.90",
        "Population (Millions) - 2011": "142.41",
        "Population (Millions) - 2012": "141.92",
        "Population (Millions) - 2013": "141.44",
        "GDP Billions (US$) - 2010": "1525.35",
        "GDP Billions (US$) - 2011": "1899.06",
        "GDP Billions (US$) - 2012": "2021.96",
        "GDP Billions (US$) - 2013": "2213.57",
        "Domestic Product Per Capita Income (US$) - 2010": "10674.27",
        "Domestic Product Per Capita Income (US$) - 2011": "13335.01",
        "Domestic Product Per Capita Income (US$) - 2012": "14246.76",
        "Domestic Product Per Capita Income (US$) - 2013": "15650.36",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "2241.70",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "2387.93",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "2513.30",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "2640.74"
      },
      {
        "Country Name": "Saudi Arabia",
        "Area - (Sq. Km.) 2010": "1960582.00",
        "Population (Millions) - 2010": "27.56",
        "Population (Millions) - 2011": "28.37",
        "Population (Millions) - 2012": "28.99",
        "Population (Millions) - 2013": "26.93",
        "GDP Billions (US$) - 2010": "526.81",
        "GDP Billions (US$) - 2011": "669.51",
        "GDP Billions (US$) - 2012": "727.31",
        "GDP Billions (US$) - 2013": "745.62",
        "Domestic Product Per Capita Income (US$) - 2010": "19112.99",
        "Domestic Product Per Capita Income (US$) - 2011": "23599.11",
        "Domestic Product Per Capita Income (US$) - 2012": "25084.61",
        "Domestic Product Per Capita Income (US$) - 2013": "25162.54",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "619.83",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "656.23",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "694.01",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "735.82"
      },
      {
        "Country Name": "South Africa",
        "Area - (Sq. Km.) 2010": "1219912.00",
        "Population (Millions) - 2010": "49.99",
        "Population (Millions) - 2011": "50.59",
        "Population (Millions) - 2012": "51.20",
        "Population (Millions) - 2013": "51.81",
        "GDP Billions (US$) - 2010": "363.20",
        "GDP Billions (US$) - 2011": "402.25",
        "GDP Billions (US$) - 2012": "384.32",
        "GDP Billions (US$) - 2013": "375.99",
        "Domestic Product Per Capita Income (US$) - 2010": "7265.27",
        "Domestic Product Per Capita Income (US$) - 2011": "7951.14",
        "Domestic Product Per Capita Income (US$) - 2012": "7506.58",
        "Domestic Product Per Capita Income (US$) - 2013": "7256.98",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "528.04",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "557.94",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "582.39",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "608.80"
      },
      {
        "Country Name": "Republic of Korea",
        "Area - (Sq. Km.) 2010": "98480.00",
        "Population (Millions) - 2010": "49.41",
        "Population (Millions) - 2011": "49.78",
        "Population (Millions) - 2012": "50.01",
        "Population (Millions) - 2013": "50.24",
        "GDP Billions (US$) - 2010": "1014.89",
        "GDP Billions (US$) - 2011": "1116.25",
        "GDP Billions (US$) - 2012": "1155.87",
        "GDP Billions (US$) - 2013": "1258.59",
        "Domestic Product Per Capita Income (US$) - 2010": "20540.18",
        "Domestic Product Per Capita Income (US$) - 2011": "22424.06",
        "Domestic Product Per Capita Income (US$) - 2012": "23112.93",
        "Domestic Product Per Capita Income (US$) - 2013": "25050.68",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "1468.33",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "1554.12",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "1613.92",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "1687.14"
      },
      {
        "Country Name": "Turkey",
        "Area - (Sq. Km.) 2010": "780580.00",
        "Population (Millions) - 2010": "73.00",
        "Population (Millions) - 2011": "73.95",
        "Population (Millions) - 2012": "74.89",
        "Population (Millions) - 2013": "75.81",
        "GDP Billions (US$) - 2010": "731.29",
        "GDP Billions (US$) - 2011": "774.34",
        "GDP Billions (US$) - 2012": "794.47",
        "GDP Billions (US$) - 2013": "851.82",
        "Domestic Product Per Capita Income (US$) - 2010": "10017.30",
        "Domestic Product Per Capita Income (US$) - 2011": "10471.07",
        "Domestic Product Per Capita Income (US$) - 2012": "10609.18",
        "Domestic Product Per Capita Income (US$) - 2013": "11236.06",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "970.50",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "1075.47",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "1123.38",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "1181.01"
      },
      {
        "Country Name": "United Kingdom",
        "Area - (Sq. Km.) 2010": "244820.00",
        "Population (Millions) - 2010": "62.26",
        "Population (Millions) - 2011": "62.74",
        "Population (Millions) - 2012": "63.24",
        "Population (Millions) - 2013": "63.76",
        "GDP Billions (US$) - 2010": "2267.48",
        "GDP Billions (US$) - 2011": "2431.53",
        "GDP Billions (US$) - 2012": "2440.51",
        "GDP Billions (US$) - 2013": "2422.92",
        "Domestic Product Per Capita Income (US$) - 2010": "36418.42",
        "Domestic Product Per Capita Income (US$) - 2011": "38758.58",
        "Domestic Product Per Capita Income (US$) - 2012": "38588.81",
        "Domestic Product Per Capita Income (US$) - 2013": "38001.69",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "2223.25",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "2291.43",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "2336.30",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "2391.04"
      },
      {
        "Country Name": "USA",
        "Area - (Sq. Km.) 2010": "9629091.00",
        "Population (Millions) - 2010": "309.73",
        "Population (Millions) - 2011": "311.94",
        "Population (Millions) - 2012": "314.18",
        "Population (Millions) - 2013": "316.85",
        "GDP Billions (US$) - 2010": "14498.93",
        "GDP Billions (US$) - 2011": "15075.68",
        "GDP Billions (US$) - 2012": "15684.75",
        "GDP Billions (US$) - 2013": "16237.75",
        "Domestic Product Per Capita Income (US$) - 2010": "46811.06",
        "Domestic Product Per Capita Income (US$) - 2011": "48328.25",
        "Domestic Product Per Capita Income (US$) - 2012": "49922.11",
        "Domestic Product Per Capita Income (US$) - 2013": "51248.21",
        "Purchasing Power in Billions ( Current International Dollar) - 2010": "14498.93",
        "Purchasing Power in Billions ( Current International Dollar) - 2011": "15075.68",
        "Purchasing Power in Billions ( Current International Dollar) - 2012": "15684.75",
        "Purchasing Power in Billions ( Current International Dollar) - 2013": "16237.75"
      },
    ];

    var xColumn="Country Name";
    var yColumn="Population (Millions) - 2013"
    var results,
        data = [],
        chart,
        bars,
        margin = 100,
        w = 8,
        h = 500,
        x, y,
        xAxis, yAxis;

    results = d3.map( json );

    results.forEach( function( key, val ) {
        var result = {};

        result.country = val[xColumn];
        result.population = val[yColumn]; //parseInt( val.Population.replace( /,/g, '' ), 10 );
      //  console.log(result);
        data.push( result );
    } );

    console.log(data);

    var l=data.length;
    for(i=0;i<l;++i)
    {
      for(j=i+1;j<l;++j)
      {
        if((parseFloat(data[i].population))<(parseFloat(data[j].population)))
        {
          var temp=data[i];
          data[i]=data[j];
          data[j]=temp;
        }
      }
    }

    chart = d3.select( 'body' ).append( 'svg' )
        .attr( 'class', 'chart' )
        .attr( 'width', 1100 )
        .attr( 'height', h )
        .append('g');

    d3.select('svg g')
        .attr('transform', 'translate(50, 50)');

    x = d3.scale.ordinal()
        .rangeRoundBands( [0, w * 150] )

    x.domain(data.map(function(d) {
      return d.country;
    }));

    y = d3.scale.linear()
        .domain( [0,2000] )
        .rangeRound( [0, h - margin] );

    // Bars
    bars = chart.append('g')
        .attr('class', 'bars');

    bars.selectAll( 'rect' )
        .data( data )
      .enter().append( 'rect' )
        .attr( 'x', function( d, i ) { return x( d.country ) -0.5; } )
        .attr( 'y', function( d ) { return (h - margin) - y( d.population ) + .5 } )
        .attr( 'width', w )
        .attr( 'height', function( d ) { return y( d.population ) } )
        .append('g');

    // Axis
    xAxis = d3.svg.axis()
        .scale(x)
        .ticks(20)
        .tickSize(6, 3, 1);

    yAxis = d3.svg.axis()
        .scale(d3.scale.linear().domain( [0, d3.max( data, function( d ) { return d.population; } )] ).rangeRound( [h - margin, 0] ))
        .tickSize(6, 3, 1)
        .orient('right');

    chart.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(0, ' + (h - margin) + ')')
        .call(xAxis);

    chart.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + x.range()[1] + ')')
        .call(yAxis);

} );
