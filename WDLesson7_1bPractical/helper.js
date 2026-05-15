//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.

function card(info){
  let build = "";
  build = `<div class="fitted card">
  <h3>Summons Number : ${info.summons_number}</h3>
  <h4>Issued on : ${info.issue_date}</h4>
  <br>
  <p>Plate Number : ${info.plate}</p>
  <p>Plate Number : ${info.license_type}</p>
  <p>${info.violation}</p>
  </div>`;
}