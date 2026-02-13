// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/



/* Challenge 2:  Create the function for Challenge 1 scenario */

function Area(){
  let L = parseFloat(document.getElementById(Length).value);
  let W = parseFloat(document.getElementById(Width).value);
  let output = document.getElementById(output);
  let A = L * W;
  msg = "";
  if (L <= 0 || W <= 0){
    msg = "Inapropriate Measurments";
  }else{
    msg = `The area of the rectangle is ${A}`;
  }
  output.innerHTML = `${msg}`;

}

/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let emo = document.getElementById(emotion).value;
  let ani = document.getElementById(animal).value;
  let output = document.getElementById(output);
  if (emo == "Sad" && ani == "Bear"){
    msg = "sadBear.jpg";
  }
  if (emo == "Sad" && ani == "Cat"){
    msg = "sadCat.jpg";
  }
  if (emo == "Sad" && ani == "Dog"){
    msg = "sadDog.jpg";
  }
  if (emo == "Funny" && ani == "Bear"){
    msg = "funnyBear.jpg";
  }
  if (emo == "Funny" && ani == "Cat"){
    msg = "funnyCat.jpg";
  }
  if (emo == "Funny" && ani == "Dog"){
    msg = "funnyDog.jpg";
  }
  output.innerHTML = `<img src="${msg}">`;
}