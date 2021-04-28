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

// select button input
var button = d3.select("#filter-btn");
// button on
button.on("click", function (event) {
    //prevent function
    d3.event.preventDefault();
    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filterData = tableData.filter(tableData => tableData.datetime === inputValue);
    filterData.forEach(function (ufoDate) {
        var trow = tbody.append("tr");
        Object.entries(ufoDate).forEach(function ([key, value]) {
            var cell = trow.append("td");
            cell.text(value);
        });
    });
});