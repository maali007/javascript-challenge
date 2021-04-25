// Assign the data from data.js to a descriptive variable & console log the UFO data
var allegedSightings = data;
console.log(allegedSightings);

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
table.attr("class", "table table-striped");

//  Step 1: Loop Through `data` and console.log each alleged sighting object
allegedSightings.forEach(function(ufoClaim) {
  console.log(ufoClaim);
