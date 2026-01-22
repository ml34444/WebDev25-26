// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.

function GradeAverage(){
    let Gr1 = parseFloat(document.getElementById("G1").value);
    let Gr2 = parseFloat(document.getElementById("G2").value);
    let Gr3 = parseFloat(document.getElementById("G3").value);
    let op = document.getElementById("output");
    let avg = (Gr1 + Gr2 + Gr3) / 3;
    op.innerHTML = `The average of the three grades in ${avg}`;
}

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.

function Slope(){
    let y2 = parseFloat(document.getElementById("Y2").value);
    let y1 = parseFloat(document.getElementById("Y1").value);
    let x2 = parseFloat(document.getElementById("X2").value);
    let x1 = parseFloat(document.getElementById("X1").value);
    let Soutput = document.getElementById("Slope");
    let s = (y2 - y1) / (x2 - x1);
    Soutput.innerHTML=`The slope is ${s}`;
}

// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.

function BMI(){
    let W = parseFloat(document.getElementById("Height").value);
    let H = parseFloat(document.getElementById("Weight").value);
    let Boutput = document.getElementById("Boutput");
    let BMI = (703 * W) / (H ** 2);
    Boutput.innerHTML=`The BMI is ${BMI}`;
}