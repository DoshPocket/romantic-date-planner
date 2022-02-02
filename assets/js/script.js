//  generate choice for date
var generateBtn = document.querySelector(".btn");
// var dateText = document.querySelector("#generate");
var madeChoice =document.querySelector("#choiceMade");
var options = ["walk", "meal", "movie"]; // Array of options for computer to pick from


function getChoice() {
        var choice = generateDate();
        madeChoice.innerHTML = choice;
      }

generateBtn.addEventListener("click", getChoice);

 function generateDate(){
 // Get random index from array of options

 var index = Math.floor(Math.random() * options.length);
 var randomChoice = options[index];

 console.log(randomChoice);
 return randomChoice;
 }
 
  
// display random choice we need to use getElementById or querySelector
// Write options into upcoming date as input from random generator

 
