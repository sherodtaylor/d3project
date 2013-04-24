/*
 * SVG practice using D3.js 
*/
var w = 500; // setting width
var h = 100; // setting height
var dataset =   [[ 5,    20 ],
                 [ 480,  90 ],
                 [ 250,  50 ],
                 [ 100,  33 ],
                 [ 330,  95 ],
                 [ 410,  12 ],
                 [ 475,  44 ],
                 [ 25,   67 ],
                 [ 85,   21 ],
                 [ 220,  88 ]];

 // create svg layout for scatterplot
var svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
// create circle svg object
var circle = svg.selectAll("circle").data(dataset).enter().append("circle");
// create text object
var text = svg.selectAll('text').data(dataset).enter().append("text");
// coordinates text
text.text(function (d){ return d[0] + ", " + d[1];}) // text
.attr("x", function (d){ return d[0]; }) // map text to x coordinate
.attr("y", function (d){ return d[1]; }); // map text to y coordinate


// setting circle svg object attributes

circle.attr("cx", function (d){ return d[0]; }) // seting cx coordinate
.attr("cy",function (d){ return d[1]; }) // setting cy coordinate
.attr("r", function (d){ return Math.sqrt(h - d[1]);}) // radius
.attr("opacity", "0.80"); // opacity setting
