/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg","brisket.jpg","steak.jpg","ribeye.jpg"];
let meat_prices = [14, 32, 24, 36];
let meat_titles = ["Beef Tips","Brisket","Steak","Ribeye"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg", "tuna.jpg"];
let seafood_prices = [6, 12, 16, 7, 6, 12];
let seafood_titles = ["Clams", "Crabs", "Lobster", "Scallops", "Shrimp", "Tuna"];

let dessert_images = ["flan.jpg", "passionberry.jpeg", "oreocup.jpg"];
let dessert_prices = [12, 8, 10];
let dessert_titles = ["Flan", "Passion Berry", "Oreo Cup"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let buildm = ``;
  let builds = ``;
  let buildd = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  for (i = 0; i <= 3; i++){
    buildm += `<div class = "card">
    <h2> ${meat_titles[i]} </h2>
    <img src = "images/${meat_images[i]}" class = "food">
    <p> $${meat_prices[i]} </p>
    </div>`
  }
  m.innerHTML = buildm
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  for (i = 0; i <= 5; i++){
    builds += `<div class = "card">
    <h2> ${seafood_titles[i]} </h2>
    <img src = "images/${seafood_images[i]}" class = "food">
    <p> $${seafood_prices[i]} </p>
    </div>`
  }
  s.innerHTML = builds
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  for (i = 0; i <= 2; i++){
    buildd += `<div class = "card">
    <h2> ${dessert_titles[i]} </h2>
    <img src = "images/${dessert_images[i]}" class = "food">
    <p> $${dessert_prices[i]} </p>
    </div>`
  }
  d.innerHTML = buildd
}
