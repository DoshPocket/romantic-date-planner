var randomGenerateBtn = document.querySelector("#generateBtn");
var madeChoice =document.querySelector("#choiceMade");
var options = ["walk", "meal", "movie"]; // Array of options for computer to pick from
let mainContent = document.querySelector("#main-content");
let secondContent = document.querySelector("#secondary-content");
let searchResultList = document.querySelector(".list-group");
let dateActivityButton = document.querySelector("#date-activity-button");
let activitySearchInput = document.querySelector("#activitySearch")
// let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

let walkApi = "3ec9ebfa550c41947096967b17d132e7";

function getChoice() {
        var choice = generateDate();
        madeChoice.innerHTML = choice;
      }

  randomGenerateBtn.addEventListener("click", getChoice);
//randomly generates an activity
 function generateDate(){
 // Get random index from array of options
 var index = Math.floor(Math.random() * options.length);
 var randomChoice = options[index];

 console.log(randomChoice);
  mainContent.setAttribute("class", "d-none");
  madeChoice.append(randomChoice);
  secondContent.setAttribute("class", "float-right");
//starts matching api with randomly generated activity
  dateActivityButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (randomChoice === "movie" && activitySearchInput !== ("")) {
      getMovie();
      } else if (randomChoice === "walk" && activitySearchInput !== ("")){
      getWalk();
      }
  });
 return randomChoice;
 }
 // walk api 
 function getWalk() {
  // event.preventDefault();
  let cityName = activitySearchInput.value.trim();
      //below may help with local storage integration
      //   let searchTerm = activitySearchInput.value;
      // searchHistory.push(searchTerm);
      console.log("1");
      // localStorage.setItem("search", JSON.stringify(searchHistory));
      // renderSearchHistory();
  let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + walkApi;
  // retrieves data from openweather for user inputted city
  fetch(requestUrl)
  .then(function (response) {
    console.log(response);
    return response.json()
  })
      .then(function (data) {
        console.log(data);
        let lat = data.coord.lat;
        let lon = data.coord.lon;

      let forecastRequestUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + walkApi;
      fetch(forecastRequestUrl)
      .then (function (response) {
        return response.json()
      })
        .then(function (data) {
          console.log(data);
          let forecastEl = document.querySelectorAll(".list-group-item");
          for (i = 0; i < forecastEl.length; i++) {
            let forecastDate = moment().add(i + 1, "days").format("ll");
            weatherDaily = data.list[i].weather[0].description;
            console.log(data.list[i].weather[0].description);
            forecastEl[i].innerHTML = `<li class="list-group-item"><button class="btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Date:</b> ${forecastDate} <hr><b>Forecast:</b> ${weatherDaily}</li>`;
          }
        });
      });
 }
 // movie api
 function getMovie() {
  // event.preventDefault();
  //TMDB Api
  var movieapi_key = 'api_key=7aeb02ecd1dd6cb11cf96a99d9801483';
  var base_url = 'https://api.themoviedb.org/3';
  // var api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + movieapi_key;
  var movieName = activitySearchInput.value.trim();
  var movieurl = base_url + '/search/movie?' + movieapi_key;
  var searchmovieurl = movieurl + '&query=' + movieName;
  
  fetch(searchmovieurl)
    .then(function (response) {
      return response.json();
    })

    .then(function(data){
      var movieEl= document.querySelectorAll(".list-group-item");
      for(i=0; i < movieEl.length; i++) {
        var movietitle = data.results[i].title;
        var movievoteavr = data.results[i].vote_average;
        var movieoverview = data.results[i].overview;
        movieEl[i].innerHTML = `
          <li class="list-group-item"><button class="btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button> 
          <b>${movietitle}</b>  
          <span class="${votecolor(movievoteavr)}">${movievoteavr}</span>
          <hr> <b>OverView:</b> ${movieoverview}
          </li>
        `
      }
    })      
}

 //Text color for the vote average of each movie
function votecolor(vote) {
  if (vote >= 8) {
      return 'green'
  }else if (vote >=4){
      return 'orange'
  }else {
      return 'red'
  }
} 