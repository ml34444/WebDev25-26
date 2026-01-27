/* Challenge 2: Create a function to serve as the event handler for the distance UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function Distance(){
      let x1 = parseFloat(document.getElementById("X1").value);
      let x2 = parseFloat(document.getElementById("X2").value);
      let y1 = parseFloat(document.getElementById("Y1").value);
      let y2 = parseFloat(document.getElementById("Y2").value);
      let output1 = document.getElementById("out1");
      let D = Math.sqrt(Math.pow(x2 - x1 , 2) + Math.pow(y2 - y1 , 2));
      output1.innerHTML = `The distance between the two points is ${D}`;
}

/* Challenge 4: Create a function to serve as the event handler for the compound interest UI. Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/

function Comp(){
      let P = parseFloat(document.getElementById("P").value);
      let R = parseFloat(document.getElementById("R").value);
      let N = parseFloat(document.getElementById("N").value);
      let T = parseFloat(document.getElementById("T").value);
      let output2 = document.getElementById("out2");
      let C = P*(1 + (R/N)) ** (N*T);
      output2.innerHTML = `The final amount is ${C}`;
}

