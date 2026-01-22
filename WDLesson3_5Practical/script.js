/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let rlen = parseFloat(document.getElementById("rl").value);
      let rwid = parseFloat(document.getElementById("rw").value);
      let op = document.getElementById("output");
      let rA = rlen*rwid;
      raoutput.innerHTML = rA;

}

function recPer(){
      let rlen = parseFloat(document.getElementById("rl").value);
      let rwid = parseFloat(document.getElementById("rw").value);
      let op = document.getElementById("output");
      let rP = 2*(rlen + rwid);
      rpoutput.innerHTML = rP;
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
      let crad = parseFloat(document.getElementById("cr").value);
      let op = document.getElementById("output");
      let cA = pi * (crad ** 2);
      op.innerHTML = cA;
}

function cirPerimeter(){
      let crad = parseFloat( document.getElementById("cr").value);
      let op = document.getElementById("output");
      let cper = 2*pi*crad;
      op.innerHTML = cper;
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}