// from data.js
var tableData = data;
console.log(tableData)
// add data
var tbody = d3.select("tbody");
console.log(data);
// loop through data with forEach
data.forEach(sighting => {
    console.log(sighting);
    // append
    var trow = tbody.append("tr");
    // Object.entries forEach sighting
    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
        // append to each row
        var tcell = trow.append("td");
        // each cell gets a text value
        tcell.text(value)
    })
})

// reference button
var click = d3.select("#filter-btn");