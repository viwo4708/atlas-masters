const keyNames = [
  "C", "C♯/D♭", "D", "D♯/E♭", "E", "F",
  "F♯/G♭", "G", "G♯/A♭", "A", "A♯/B♭", "B"
]; //names for the 12 keys

const fullwidth = 800;
const fullheight = 500;

const margin = { top: 40, right: 30, bottom: 80, left: 60 }; //need these to reserve space for axes and labels
const innerwidth = fullwidth - margin.left - margin.right; //inner area that the bars take up, so subtract margins
const innerheight = fullheight - margin.top - margin.bottom;

const svg = d3.select("#chart") //select div element from HTML file with "chart" id
  .append("svg")//put an svg inside it
    .attr("width", fullwidth) //full width
    .attr("height", fullheight)//full height
  .append("g") //append group that will hold chart content (g is an svg element)
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");//move group left and down by left and top margins. accesses css transform property, in svg translate is from top to bottom

let keycounts = [0,0,0,0,0,0,0,0,0,0,0,0]; //blank array to hold count of times each key appears in database

d3.csv("spotify_data.csv").then(data => { //load csv in async function. runs following code only when file is fully loaded. "data" becomes an array of rows from the csv

  for (let datarow of data) { //for each row in dataset

      let keyval = Number(datarow.key); //change value of "key" to a number, and assign to keyval

      if (keyval >= 0 && keyval <= 11) { //if keyval is from 0-11 (ie a valid key)
          keycounts[keyval]++; //increment the corresponding index in keycounts array
      }
  }

const maxkey = d3.max(keycounts); //identify maximum value in keycount array

const x = d3.scaleBand() //creates x scale and assigns it to variable x. NOTE: saves as a function, not output! can be used again as functio later
.domain(keyNames) //domain is all possible discrete values of x, in this case, key names
.range([0,innerwidth]) //where leftmost and rightmost bar go, calculates even bar width based on this
.padding(0.1); //adds this much space between each bar

const y = d3.scaleLinear()//creats y scale and assigns it to variable y. NOTE: saves as funtion, not output! can be used again as function later
.domain([0, maxkey]) //values from 0 to key with most songs
.nice() //rounds to a "nice" value
.range([innerheight, 0]); //sets height to match inner height 

svg.append("g")//append a group to the bottom of inner area
  .attr("transform", "translate(0," + innerheight + ")")//moves group to bottom of inner area. 
  .call(d3.axisBottom(x))//d3 function that creates axis ticks an labels from x scale, defined and assigned to x above
  .selectAll("text")//selects all text in group, in this case, the labels
    .style("text-anchor", "center");//center aligns labels to bars

svg.append("g")
  .call(d3.axisLeft(y)); //create y axis based on y scale defined and assigned to y above

svg.selectAll("rect") //select all rectangles, the bars in the chart/ rect is an svg element. at this point in the code it is a placeholder
  .data(keycounts) //bind values from keycounts to data propert of rects
  .enter() //causes new rects to "enter" for each data point. accesses data points without rects
  .append("rect")//append new rect
    .attr("x", (_, i) => x(keyNames[i])) //sets x offset of each rect from left, based on output from x scale function
    .attr("y", d => y(d)) //sets y offset of each rect from top based on y scale function
    .attr("width", x.bandwidth()) //accesses bandwidth attribute from x scale created earlier
    .attr("height", d => innerheight - y(d)) //height is full inner height minus output of y function
    .attr("fill", "#1DB954"); //fill bars with spotify green

});