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
    