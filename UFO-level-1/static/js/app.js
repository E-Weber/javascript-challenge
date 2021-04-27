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

// select button form input
var click = d3.select("#filter-btn");
var form = d3.select("form");
// form and click on
form.on('submit', runEnter);
click.on("click", runEnter);

function runEnter() {

    //prevent function
    d3.runEnter.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value")

    var filterData = data.filter(sighting => sighting.datetime === inputValue);
    console.log(filterData)

    List.html("");

};