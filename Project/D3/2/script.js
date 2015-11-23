$( function() {

  var json;
  d3.json("data/datajsonfinal.json", function(error, data) {
  if (error) return console.warn(error);
  console.log("Some Data"+data);
  visualize(data);
  });

function visualize(data) {
    var chart,
        bars,
        margin = 100,
        w = 8,
        h = 500,
        x, y,
        xAxis, yAxis;

    var l=data.length;
    for(i=0;i<l;++i)
    {
      for(j=i+1;j<l;++j)
      {
        if((parseFloat(data[i].gdp))<(parseFloat(data[j].gdp)))
        {
          var temp=data[i];
          data[i]=data[j];
          data[j]=temp;
        }
      }
    }

    chart = d3.select( 'body' ).append( 'svg' )
        .attr( 'class', 'chart' )
        .attr( 'width', 1350 )
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
        .domain( [0,20000] )
        .rangeRound( [0, h - margin] );

    // Bars
    bars = chart.append('g')
        .attr('class', 'bars');

    bars.selectAll( 'rect' )
        .data( data )
      .enter().append( 'rect' )
        .attr( 'x', function( d, i ) { return x( d.country ) +88; } )
        .attr( 'y', function( d ) { return (h - margin) - y( d.gdp ) + .5 } )
        .attr( 'width', w )
        .attr( 'height', function( d ) { return y( d.gdp ) } )
        .append('g');

    // Axis
    xAxis = d3.svg.axis()
        .scale(x)
        .ticks(20)
        .tickSize(6, 3, 1);

    yAxis = d3.svg.axis()
        .scale(d3.scale.linear().domain( [0, d3.max( data, function( d ) { return d.gdp; } )] ).rangeRound( [h - margin, 0] ))
        .tickSize(6, 3, 1)
        .orient('left');

    chart.append('g')
        .attr('class', 'x axis')
        .attr('transform', 'translate(60, ' + (h - margin) + ')')
        .call(xAxis);

    chart.append('g')
        .attr('class', 'y axis')
        .attr('transform', 'translate(' + x.range()[1] + ')')
        .call(yAxis);

    }

} );
