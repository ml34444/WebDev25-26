/* Challenge 2: Complete the function generateProblem by ,
       1) Create a variable for the <span> with id of problem
       2) Generate two random numbers between 0 and 20
       3) Store the correct answer in the variable correct.  This will be used in checkProblem( )
       4) Using string interpolation, display an addition problem like "2 + 2 =" except using the random numbers generated. 
*/
let correct;
function generateProblem(){
       let num1 = Math.floor(Math.random() * (20)+1);
       let num2 = Math.floor(Math.random() * (20)+1);
       correct = num1 + num2;
       out = document.getElementById("problem");
       out.innerHTML = `${num1} + ${num2} = `;
}

/* Challenge 3: Complete the function checkResponse by ,
       1) Create a variable for the users response
       2) Create a variable for the <div> with id of output
       3) Create a variable msg for the output
       4) Using an if / else statement check to see if the user response is correct. 
           a) if the reponse is correct, set msg to "Correct!" along with the correct image
           b) otherwise set msg to "Incorrect. The answer is " followed by the correct answer.  Also include incorrect image
       4) Display msg in the output
*/
function checkResponse(){
       ans = parseInt(document.getElementById("response").value);
       msg = ``
       img = ""
       let output = document.getElementById("output");
       if (ans == correct){
              img = "correct.webp";
              msg = `Correct! <br> <img src="${img}">`;
       }else{
              img = "incorrect.avif";
              msg = `Incorrect, the answer is ${correct}. <br> <img src="${img}">`;
       }
       output.innerHTML = `${msg}`;
}


