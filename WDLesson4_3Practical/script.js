/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

function bmi(){
   let w = parseFloat(document.getElementById("weight").value);
   let h = parseFloat(document.getElementById("height").value);
   let op = document.getElementById("output");
   let b = (w / h**2) * 703;
   msg = "";
   filename = "";
   if (18.5 > b){
       msg = "You are underweight";
       filename = "underweight.png";
   }else if (18.5 <= b && b <= 24.9){
       msg = "You have a healthy weight";
       filename = "healthyweight.png";
   }else if (25 <= b && b <= 29.9){
       msg = "You are overweight";
       filename = "overweight.png";
   }else if (30 <= b){
       msg = "You are obese";
       filename = "obeseweight.png";
   }
   op.innerHTML=`BMI is ${b}, ${msg} <img src="${filename}">`;
}

