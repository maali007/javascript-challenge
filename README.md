# javascript-challenge
<hr>
<h2>Level 1: Automatic Table and Date Search (Required)</h4>
<hr>
<h3>Part 1: Populate table with UFO data</h5>
<ul>
  <li>Used the index.html file provided.</li>
  <li>Wrote code that does the following:
    <ul>
      <li>Assign the data from data.js to a descriptive variable</li>
      <li>Uses d3 to select the table element in index.html</li>
      <li>Uses d3 to add the class "table table-striped" to the table element.</li>
      <li>Uses d3 to select the table body</li>
      <li>Loops through the data and console.log each alleged sighting object</li>
      <li>Uses d3 to append one table row `tr` for each alleged sighting object</li>
      <li>Uses `Object.entries` to console.log each alleged sighting value</li>
      <li>Use d3 to append 1 cell per alleged sighting value (datetime, city, state, country, shape, durationMinutes, comments).</li>
    </ul>    
  </li>
</ul>
    
<hr>

<h3>Part 2: Date Filter Feature</h5>
<ul>
  <li>Wrote code that does the following:
    <ul>
      <li>Uses d3 to select the element that captures user date input. Store as a variable.</li>
      <li>Gets the value property of the input element. Store as variable.</li>
      <li>Stores matching records as a variable.</li>
      <li>Loops through the matches and: 
        <ul>
          <li>Appends a row for each matched record.</li>
          <li>Uses `Object.entries` to console.log each alleged sighting value (state, shape etc).</li>
          <li>Appends a cell to the row for each value.</li>
        </ul>         
      </li>
   </ul>
 </li>
 <li>Filter executed on clicking <b>Filter Table</b> button.</li>
</ul>

<hr>

<h3>Part 3: Date Filter Clear</h5>
<ul>
  <li>Wrote code that does the following:
    <ul>
      <li>Removes filter results.</li>
      <li>Re-appends original UFO data (all rows).</li>
   </ul>
 </li>
 <li>Reset executed on clicking <b>Reset Table</b> button.</li>
</ul>

<hr>

<h1>I DID NOT ATTEMPT LEVEL 2 [OPTIONAL]. I HOWEVER ADDED A FILTER CLEAR FUNCTIONALITY TO MY CODE ... WORTH SOME CREDIT :)</h1>
