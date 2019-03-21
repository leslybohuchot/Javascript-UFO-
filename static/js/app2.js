// from data.js
var tableData = data;


// refer to the tbody element and set columns
var column = ["datetime","city", "state", "country", "shape", "durationMinutes", "comments"]
var tbody = d3.select("tbody");

//loop through the array given and append it  
var UFOtable = (userInput) => {
  userInput.forEach(ufo_sightings => {
    var row = tbody.append("tr");
    column.forEach(column => row.append("td").text(ufo_sightings[column])
    )
  });
}
//print the data 
UFOtable(data);

// Select the submit button
var submit = d3.select("#submit");

submit.on("click", function() {
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#filter-btn");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(tableData);
//filter the data to collect the datetime
  var filteredData = tableData.filter(data => data.datetime === inputValue);
//print the filtered data
  console.log(filteredData);
});