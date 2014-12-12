// d3 heartbeat
window.onload = function () {

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });
 
    cb(matches);
  };
};

var searchInput = function () {

    var toCheck = document.getElementsByClassName('tt-input')[0].value;
    
    if (toCheck != '') {
    
    for (var i = 0; i < schools.length; i++) {
    
        if (toCheck === schools[i]) {
        
            schoolNow = schools[i];
            transitionHandle(i)
            document.getElementById('schoolName').textContent = schoolNow; 
            document.getElementsByClassName('tt-input')[0].value = ''; 
            document.getElementById('notFound').textContent = '';
            break; 
        
        }
        
        else {
        
            document.getElementById('notFound').textContent = '"' + toCheck + '"' + " not found. Search again.";
            document.getElementsByClassName('tt-input')[0].value = ''; 
        
        } 
    
    }
    }

}

// event listener on enter not yet working
// document.addEventListener('keypress', function (e) {
//     var key = e.which || e.keyCode;
//     if (key == 13) { // 13 is enter
//       searchInput()
//     }
// });

var schools = ["P.S. 015 Roberto Clemente", "P.S. 019 Asher Levy", "P.S. 020 Anna Silver", "P.S. 034 Franklin D. Roosevelt", "The STAR Academy - P.S.63"];
  
var schoolNow = '  ';
document.getElementById('schoolName').textContent = schoolNow; 

var holidays = [
  {
    "holidayName":"Yom Kippur",
    "startDate":"9/13/13",
    "endDate":"9/13/13"
  },
  {
    "holidayName":"Sukkot",
    "startDate":"9/20/13",
    "endDate":"9/20/13"
  },
  {
    "holidayName":"Columbus Day",
    "startDate":"10/14/13",
    "endDate":"10/14/13"
  },
  {
    "holidayName":"Eid-ul-Adha",
    "startDate":"10/15/13",
    "endDate":"10/15/13"
  },
  {
    "holidayName":"Parent-Teacher Conferences (HS)",
    "startDate":"10/24/13",
    "endDate":"10/25/13"
  },
  {
    "holidayName":"Halloween, Diwali",
    "startDate":"10/31/13",
    "endDate":"10/31/13"
  },
  {
    "holidayName":"Election Day",
    "startDate":"11/5/13",
    "endDate":"11/5/13"
  },
  {
    "holidayName":"Veterans Day",
    "startDate":"11/11/13",
    "endDate":"11/11/13"
  },
  {
    "holidayName":"Parent-Teacher Conferences (ES)",
    "startDate":"11/13/13",
    "endDate":"11/14/13"
  },
  {
    "holidayName":"Parent-Teacher Conferences (MS)",
    "startDate":"11/18/13",
    "endDate":"11/19/13"
  },
  {
    "holidayName":"Hanukkah",
    "startDate":"11/26/13",
    "endDate":"11/26/13"
  },
  {
    "holidayName":"Thanksgiving",
    "startDate":"11/28/13",
    "endDate":"11/29/13"
  },
  {
    "holidayName":"Winter Recess",
    "startDate":"12/23/13",
    "endDate":"1/1/14"
  },
  {
    "holidayName":"Official Snow Day",
    "startDate":"1/3/14",
    "endDate":"1/3/14"
  },
  {
    "holidayName":"MLK Day",
    "startDate":"1/20/14",
    "endDate":"1/20/14"
  },
  {
    "holidayName":"Regents Exams (HS only)",
    "startDate":"1/27/14",
    "endDate":"1/30/14"
  },
  {
    "holidayName":"Scoring Day (HS only)",
    "startDate":"1/31/14",
    "endDate":"1/31/14"
  },
  {
    "holidayName":"Staff Development Day (HS only)",
    "startDate":"2/3/14",
    "endDate":"2/3/14"
  },
  {
    "holidayName":"Mid-Winter Recess",
    "startDate":"2/17/14",
    "endDate":"2/21/14"
  },
  {
    "holidayName":"Parent-Teacher Conferences (MS)",
    "startDate":"2/26/14",
    "endDate":"2/27/14"
  },
  {
    "holidayName":"Parent-Teacher Conferences (HS)",
    "startDate":"2/27/14",
    "endDate":"2/28/14"
  },
  {
    "holidayName":"Parent-Teacher Conferences (ES)",
    "startDate":"3/11/14",
    "endDate":"3/12/14"
  },
  {
    "holidayName":"St. Patrick's Day",
    "startDate":"3/17/14",
    "endDate":"3/17/14"
  },
  {
    "holidayName":"State ELA Tests (grades 3-8)",
    "startDate":"4/1/14",
    "endDate":"4/3/14"
  },
  {
    "holidayName":"Spring Recess",
    "startDate":"4/14/14",
    "endDate":"4/22/14"
  },
  {
    "holidayName":"State Math Tests (grades 3-8)",
    "startDate":"4/30/14",
    "endDate":"5/2/14"
  },
  {
    "holidayName":"Memorial Day",
    "startDate":"5/26/14",
    "endDate":"5/26/14"
  },
  {
    "holidayName":"Clerical Half Day",
    "startDate":"6/3/14",
    "endDate":"6/3/14"
  },
  {
    "holidayName":"Anniversary Day",
    "startDate":"6/5/14",
    "endDate":"6/5/14"
  },
  {
    "holidayName":"Clerical Half Day",
    "startDate":"6/9/14",
    "endDate":"6/9/14"
  },
  {
    "holidayName":"Regents Exams (HS only)",
    "startDate":"6/17/14",
    "endDate":"6/25/14"
  }
];

for (var i = 0; i < holidays.length; i++) {
    holidays[i].startDate = new Date(Date.parse(holidays[i].startDate));
    holidays[i].endDate = new Date(Date.parse(holidays[i].endDate));
}

var weather = [
  {
    "startDate":"12/6/13",
    "endDate":"12/10/13"
  },
  {
    "startDate":"12/16/13",
    "endDate":"12/18/13"
  },
  {
    "startDate":"1/2/14",
    "endDate":"1/8/14"
  },
  {
    "startDate":"1/21/14",
    "endDate":"1/23/14"
  },
  {
    "startDate":"1/31/14",
    "endDate":"2/6/14"
  },
  {
    "startDate":"2/12/14",
    "endDate":"2/14/14"
  },
  {
    "startDate":"4/29/14",
    "endDate":"5/1/14"
  },
  {
    "startDate":"5/15/14",
    "endDate":"5/19/14"
  }
];

for (var i = 0; i < weather.length; i++) {
    weather[i].startDate = new Date(Date.parse(weather[i].startDate));
    weather[i].endDate = new Date(Date.parse(weather[i].endDate));
}

$('#schoolSearch .typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
},
{
  name: 'schools',
  displayKey: 'value',
  source: substringMatcher(schools)
});

var searchButton = document.getElementById('button'); 
searchButton.addEventListener('click', searchInput);

// date format: 9/11/13
var parseDate = d3.time.format("%Y-%m-%d").parse;

var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.time.scale()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickFormat(d3.format("%"))
    ;

var line = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.value); });

var lineGroup = d3.svg.line()
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.group); });
    
var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/999.csv", function(d) {
    return {
        date: parseDate(d.date),
        value: +d.value,
        group: +d.group
    };
}, function(error, data) {

x.domain(d3.extent(data, function(d) { return d.date; }));
// y.domain(d3.extent(data, function(d) { return d.value; }));
y.domain([0.4, 1]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .attr("x", -310)
      .style("text-anchor", "end")
      .text("Percentage of Students Present");
    

  svg.append("g")
      .attr("class", "weatherRect");

  svg.select(".weatherRect").selectAll("rect")
      .data(weather)
      .enter()
      .append("rect")
      .attr("x", function (d) {return x(d.startDate)})
      .attr("y", 0)
      .attr("width", function (d) {return x(d.endDate) - x(d.startDate)})
      .attr("height", height)
      .attr("fill", "blue")
      .attr("fill-opacity", 0.15)
      ;
      
  svg.append("g")
      .attr("class", "holidayRect");

  svg.select(".holidayRect").selectAll("rect")
      .data(holidays)
      .enter()
      .append("rect")
      .attr("x", function (d) {return x(d.startDate)})
      .attr("y", 0)
      .attr("width", function (d) {return x(d.endDate) + 3.06896551724139 - x(d.startDate)})
      .attr("height", height)
      .attr("fill", "grey")
      .attr("fill-opacity", 0.15)
      .on("mouseover", function(d) {
      
      //Get this bar's x/y values, then augment for the tooltip
        var xPosition = parseFloat(d3.select(this).attr("x"));
        var yPosition = parseFloat(d3.select(this).attr("y")) +500;
      
        d3.select(this)
          .attr("fill", "orange");
          
        //Update the tooltip position and value
        d3.select("#tooltip")
          .style("left", xPosition + "px")
          .style("top", yPosition + "px")
          .select("#value")
          .text(d.holidayName);

        //Show the tooltip
        d3.select("#tooltip").classed("hidden", false);

        })
      .on("mouseout", function() {
        d3.select(this)
          .attr("fill", "grey");
        
        //Hide the tooltip
        d3.select("#tooltip").classed("hidden", true);
        });
      ;
  
  svg.append("line")
      .attr("x1", 50)
      .attr("x2", 75)
      .attr("y1", 375)
      .attr("y2", 375)
      .attr("stroke", "red")
      .attr("stroke-width", 3); 

  svg.append("line")
      .attr("x1", 50)
      .attr("x2", 75)
      .attr("y1", 400)
      .attr("y2", 400)
      .attr("stroke", "steelblue")
      .attr("stroke-width", 3); 
      
  svg.append("text")
      .attr("x", 80)
      .attr("y", 375)
      .attr("alignment-baseline", "middle")
      .text("current selection"); 
      
  svg.append("text")
      .attr("x", 80)
      .attr("y", 400)
      .attr("alignment-baseline", "middle")
      .text("group average"); 

  svg.append("text")
      .attr("x", 80)
      .attr("y", 425)
      .attr("alignment-baseline", "middle")
      .text("inclement weather"); 
      
  svg.append("rect")
      .attr("x", 50)
      .attr("y", 425 - (15/2))
      .attr("width", 25)
      .attr("height", 15)
      .attr("fill", "blue")
      .attr("fill-opacity", 0.15);

  svg.append("g")
      .attr("class", "line1")
      .append("path")
      .datum(data)
      .attr("class", "lineGroup")
      .attr("d", lineGroup);

  svg.append("g")
      .attr("class", "line2")
      .append("path")
      .datum(data)
      .attr("class", "line")
      .attr("d", line);

});

// HANDLE TRANSITIONS
var transitionHandle = function (dsn) {d3.csv("data/" + dsn + ".csv", function(d) {
    return {
        date: parseDate(d.date),
        value: +d.value,
        group: +d.group
    };
}, function(error, data) {

d3.select('svg').select('g.line1').selectAll("path")
      .datum(data)
      .transition()
      .duration(1000)
      .attr("d", lineGroup);
      
d3.select('svg').select('g.line2').selectAll("path")
      .datum(data)
      .transition()
      .duration(1000)
      .attr("d", line);

}
)};

}

