// LEVEL 1: PART 1
// Assign the data from data.js to a descriptive variable & console log the UFO data
var allegedSightings = data;
console.log(allegedSightings);

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

//  Step 1: Loop Through `data` and console.log each alleged sighting object
allegedSightings.forEach(function(ufoClaim) {
  console.log(ufoClaim);

  // Step 2:  Use d3 to append one table row `tr` for each alleged sighting object
    var row = tbody.append("tr");

  // Step 3: Use `Object.entries` to console.log each alleged sighting value
  Object.entries(ufoClaim).forEach(function([key, value]) {
    console.log(key, value);

    // Step 4: Use d3 to append 1 cell per alleged sighting value (datetime, city, state, country, shape, durationMinutes, comments)
    var cell = row.append("td");
    cell.text(value);
  });
});
    

// LEVEL 1: PART 2
// Date/Time Filter
// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select date input by user get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element (datetime, city, state, country, shape, durationMinutes, comments)
    var inputValue = inputElement.property("value");
    // Filter for data that matches the input value
    var filteredData = allegedSightings.filter(claim => claim.datetime === inputValue);


    filteredData.forEach(function(matches) {

      console.log(matches);
      // Append one table row `tr` for each alleged sighting object
      var row = tbody.append("tr");
      // Use `Object.entries` to console.log each alleged sighting value
      Object.entries(matches).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
      });
    });
});
  

// LEVEL 1: PART 3 ... my extra touch ;)
// Date/Time Filter Refresh
// Select the button
var button = d3.select("#refresh-btn");
button.on("click", function() {

    tbody.html("");

    //  Step 1: Loop Through `data` and console.log each alleged sighting object
    allegedSightings.forEach(function(ufoClaim) {
      console.log(ufoClaim);

      // Step 2:  Use d3 to append one table row `tr` for each alleged sighting object
        var row = tbody.append("tr");

      // Step 3: Use `Object.entries` to console.log each alleged sighting value
      Object.entries(ufoClaim).forEach(function([key, value]) {
        console.log(key, value);

        // Step 4: Use d3 to append 1 cell per alleged sighting value (datetime, city, state, country, shape, durationMinutes, comments)
        var cell = row.append("td");
        cell.text(value);
      });
    });
});
