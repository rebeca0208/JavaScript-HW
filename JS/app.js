// from data.js
var tableData = data;

// YOUR CODE HERE!
// Table
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);
console.log("data");

// Loop through data
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });

// Select the submit button
var submit = d3.select("#filter-btn");

// Complete the click handler for the form
submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select('#datetime')

  // Get the value property of the input element
  var inputValue = inputElement.property('value');

  //append tbody with table data within filter selection
  console.log(inputValue);
  console.log(tableData);

  // Use the form input to filter the data by date
  var filteredData = tableData.filter(table => table.datetime === inputValue);
  console.log(filteredData);
  // Print out date results
  tbody.text(filteredData);
  
  filteredData.forEach((sighting) => {
    console.log("sighting");
    console.log(sighting);
    var row = tbody.append("tr");
    var cell = tbody.append("td");
    cell.text(sighting.datetime);
    var cell = tbody.append("td");
    cell.text(sighting.city);
    var cell = tbody.append("td");
    cell.text(sighting.state);
    var cell = tbody.append("td");
    cell.text(sighting.country);
    var cell = tbody.append("td");
    cell.text(sighting.shape);
    var cell = tbody.append("td");
    cell.text(sighting.durationMinutes);
    var cell = tbody.append("td");
    cell.text(sighting.comments);
});
});