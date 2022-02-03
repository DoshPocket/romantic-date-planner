//  generate choice for date
var randomGenerateBtn = document.querySelector("#generateBtn");
// var dateText = document.querySelector("#generate");
var madeChoice =document.querySelector("#choiceMade");
var options = ["walk", "meal", "movie"]; // Array of options for computer to pick from
let mainContent = document.querySelector("#main-content");
let secondContent = document.querySelector("#secondary-content");
let searchResultList = document.querySelector('.list-group');
let walkButton = document.querySelector('#date-activity-button');


function getChoice() {
        var choice = generateDate();
        madeChoice.innerHTML = choice;
      }

  randomGenerateBtn.addEventListener("click", getChoice);

 function generateDate(){
 // Get random index from array of options

 var index = Math.floor(Math.random() * options.length);
 var randomChoice = options[index];

 console.log(randomChoice);
  mainContent.setAttribute("class", "d-none");
  madeChoice.append(randomChoice);
  secondContent.setAttribute("class", "float-right");

 return randomChoice;
 }
 // walk api

 
//  function getWalk() {
//    let requestUrl = 'https://cors-anywhere.herokuapp.com/https://www.benbrougher.tech/hiker/v1/trails/';
    
//    fetch(requestUrl)
//      .then(function (response) {
//        console.log(response);
//        return response.json();
//          })
//      .then(function (data) {
//        console.log(data);
//        for (let i = 0; i < data.length; i++) {
//          let searchResultWalk = document.createElement('list-group-item');
//          searchResultWalk.textContent = data[i].html_url;
//          searchResultList.appendChild(searchResultWalk);
//        }
//      });
//  }
//  walkButton.addEventListener('click', getWalk);