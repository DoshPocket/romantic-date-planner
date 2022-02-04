var randomGenerateBtn = document.querySelector("#generateBtn");
var madeChoice =document.querySelector("#choiceMade");
var options = ["walk", "meal", "movie"]; // Array of options for computer to pick from
let mainContent = document.querySelector("#main-content");
let secondContent = document.querySelector("#secondary-content");
let searchResultList = document.querySelector(".list-group");
let dateActivityButton = document.querySelector("#date-activity-button");
let activitySearchInput = document.querySelector("#activitySearch")
let upcomingDatesList = document.querySelector("#upcoming-dates-list")
// let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

let walkApi = "3ec9ebfa550c41947096967b17d132e7";

let dateSavedList = [];

let savedMovie1;
let savedMovie2;
let savedMovie3;
let savedMovie4;
let savedMovie5;

let savedMeal1;
let savedMeal2;
let savedMeal3;
let savedMeal4;
let savedMeal5;

let savedWalk1;
let savedWalk2;
let savedWalk3;
let savedWalk4;
let savedWalk5;


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
      } else {
      getMealApi();

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
        //   for (i = 0; i < forecastEl.length; i++) {
            // let forecastDate = moment().add(i + 1, "days").format("ll");
            // weatherDaily = data.list[i].weather[0].description;
            // console.log(data.list[i].weather[0].description);




let forecastDate1 = moment().add(0, "days").format("ll");
let forecastDate2 = moment().add(1, "days").format("ll");
let forecastDate3 = moment().add(2, "days").format("ll");
let forecastDate4 = moment().add(3, "days").format("ll");
let forecastDate5 = moment().add(4, "days").format("ll");

weatherDaily1 = data.list[0].weather[0].description;
weatherDaily2 = data.list[1].weather[0].description;
weatherDaily3 = data.list[2].weather[0].description;
weatherDaily4 = data.list[3].weather[0].description;
weatherDaily5 = data.list[4].weather[0].description;





            forecastEl[0].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-1 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Date:</b> ${forecastDate1} <hr><b>Forecast:</b> ${weatherDaily1}</li>`;
            forecastEl[1].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-2 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Date:</b> ${forecastDate2} <hr><b>Forecast:</b> ${weatherDaily2}</li>`;
            forecastEl[2].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-3 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Date:</b> ${forecastDate3} <hr><b>Forecast:</b> ${weatherDaily3}</li>`;
            forecastEl[3].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-4 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Date:</b> ${forecastDate4} <hr><b>Forecast:</b> ${weatherDaily4}</li>`;
            forecastEl[4].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-5 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Date:</b> ${forecastDate5} <hr><b>Forecast:</b> ${weatherDaily5}</li>`;



            savedWalk1 = forecastDate1;
            savedWalk2 = forecastDate2;
            savedWalk3 = forecastDate3;
            savedWalk4 = forecastDate4;
            savedWalk5 = forecastDate5;
            
                  ////////////////////////////////////////
                 saveButtonsWalk();
      



        //   }
        });
      });
 }



 function saveButtonsWalk() {
    let saveButton1 = document.querySelector(".save-button-1")
    saveButton1.addEventListener("click", function(event) {
    console.log("hi working1");
    renderSavedWalk1();
    renderSearch();
    })
    
    let saveButton2 = document.querySelector(".save-button-2")
    saveButton2.addEventListener("click", function(event) {
    console.log("hi working2");
    renderSavedWalk2();
    renderSearch();
    })
    
    let saveButton3 = document.querySelector(".save-button-3")
    saveButton3.addEventListener("click", function(event) {
    console.log("hi working3");
    renderSavedWalk3();
    renderSearch();
    })
    
    let saveButton4 = document.querySelector(".save-button-4")
    saveButton4.addEventListener("click", function(event) {
    console.log("hi working4");
    renderSavedWalk4();
    renderSearch();
    })
    
    let saveButton5 = document.querySelector(".save-button-5")
    saveButton5.addEventListener("click", function(event) {
    console.log("hi working5");
    renderSavedWalk5();
    renderSearch();
    })
    
    }

    function renderSavedWalk1(){
        localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
        console.log("rbs1");
        console.log(JSON.stringify(dateSavedList));
      
        dateSavedList.push(savedWalk1);
        console.log(JSON.stringify(dateSavedList));
      }
      
      function renderSavedWalk2(){
        localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
        console.log("rbs2");
        console.log(JSON.stringify(dateSavedList));
      
        dateSavedList.push(savedWalk2);
        console.log(JSON.stringify(dateSavedList));
      }
    
      function renderSavedWalk3(){
        localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
        console.log("rbs1");
        console.log(JSON.stringify(dateSavedList));
      
        dateSavedList.push(savedWalk3);
        console.log(JSON.stringify(dateSavedList));
      }
      
      function renderSavedWalk4(){
        localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
        console.log("rbs2");
        console.log(JSON.stringify(dateSavedList));
      
        dateSavedList.push(savedWalk4);
        console.log(JSON.stringify(dateSavedList));
      }
      function renderSavedWalk5(){
        localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
        console.log("rbs2");
        console.log(JSON.stringify(dateSavedList));
      
        dateSavedList.push(savedWalk5);
        console.log(JSON.stringify(dateSavedList));
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
      // for(i=0; i < movieEl.length; i++) {
        // var movietitle = data.results[i].title;
        // var movievoteavr = data.results[i].vote_average;
        // var movieoverview = data.results[i].overview;

        var movietitle1 = data.results[0].title;
        var movievoteavr1 = data.results[0].vote_average;
        var movieoverview1 = data.results[0].overview;

        var movietitle2 = data.results[1].title;
        var movievoteavr2 = data.results[1].vote_average;
        var movieoverview2 = data.results[1].overview;

        var movietitle3 = data.results[2].title;
        var movievoteavr3 = data.results[2].vote_average;
        var movieoverview3 = data.results[2].overview;

        var movietitle4 = data.results[3].title;
        var movievoteavr4 = data.results[3].vote_average;
        var movieoverview4 = data.results[3].overview;

        var movietitle5 = data.results[4].title;
        var movievoteavr5 = data.results[4].vote_average;
        var movieoverview5 = data.results[4].overview;




        // movieEl[i].innerHTML = `
        //   <li class="list-group-item result-bg"><button class="btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button> 
        //   <b>${movietitle}</b>  
        //   <span class="${votecolor(movievoteavr)}">${movievoteavr}</span>
        //   <hr> <b>OverView:</b> ${movieoverview}
        //   </li>
        // `

        movieEl[0].innerHTML = `
        <li class="list-group-item"><button class="save-button-1 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button> 
        <b>${movietitle1}</b>  
        <span class="${votecolor(movievoteavr1)}">${movievoteavr1}</span>
        <hr> <b>OverView:</b> ${movieoverview1}
        </li>
        `

        movieEl[1].innerHTML = `
        <li class="list-group-item"><button class="save-button-2 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button> 
        <b>${movietitle2}</b>  
        <span class="${votecolor(movievoteavr2)}">${movievoteavr2}</span>
        <hr> <b>OverView:</b> ${movieoverview2}
        </li>
      `

      movieEl[2].innerHTML = `
        <li class="list-group-item"><button class="save-button-3 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button> 
        <b>${movietitle3}</b>  
        <span class="${votecolor(movievoteavr3)}">${movievoteavr3}</span>
        <hr> <b>OverView:</b> ${movieoverview3}
        </li>
      `

      movieEl[3].innerHTML = `
        <li class="list-group-item"><button class="save-button-4 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button> 
        <b>${movietitle4}</b>  
        <span class="${votecolor(movievoteavr4)}">${movievoteavr4}</span>
        <hr> <b>OverView:</b> ${movieoverview4}
        </li>
      `

      movieEl[4].innerHTML = `
        <li class="list-group-item"><button class="save-button-5 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button> 
        <b>${movietitle5}</b>  
        <span class="${votecolor(movievoteavr5)}">${movievoteavr5}</span>
        <hr> <b>OverView:</b> ${movieoverview5}
        </li>
      `
   

      savedMovie1 = movietitle1;
      savedMovie2 = movietitle2;
      savedMovie3 = movietitle3;
      savedMovie4 = movietitle4;
      savedMovie5 = movietitle5;
            ////////////////////////////////////////
           saveButtonsMovie();



      // }
    })      
}



function saveButtonsMovie() {
  let saveButton1 = document.querySelector(".save-button-1")
  saveButton1.addEventListener("click", function(event) {
  console.log("hi working1");
  renderSavedMovie1();
  renderSearch();
  })
  
  let saveButton2 = document.querySelector(".save-button-2")
  saveButton2.addEventListener("click", function(event) {
  console.log("hi working2");
  renderSavedMovie2();
  renderSearch();
  })
  
  let saveButton3 = document.querySelector(".save-button-3")
  saveButton3.addEventListener("click", function(event) {
  console.log("hi working3");
  renderSavedMovie3();
  renderSearch();
  })
  
  let saveButton4 = document.querySelector(".save-button-4")
  saveButton4.addEventListener("click", function(event) {
  console.log("hi working4");
  renderSavedMovie4();
  renderSearch();
  })
  
  let saveButton5 = document.querySelector(".save-button-5")
  saveButton5.addEventListener("click", function(event) {
  console.log("hi working5");
  renderSavedMovie5();
  renderSearch();
  })
  
  }
  

  function renderSavedMovie1(){
    localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
    console.log("rbs1");
    console.log(JSON.stringify(dateSavedList));
  
    dateSavedList.push(savedMovie1);
    console.log(JSON.stringify(dateSavedList));
  }
  
  function renderSavedMovie2(){
    localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
    console.log("rbs2");
    console.log(JSON.stringify(dateSavedList));
  
    dateSavedList.push(savedMovie2);
    console.log(JSON.stringify(dateSavedList));
  }

  function renderSavedMovie3(){
    localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
    console.log("rbs1");
    console.log(JSON.stringify(dateSavedList));
  
    dateSavedList.push(savedMovie3);
    console.log(JSON.stringify(dateSavedList));
  }
  
  function renderSavedMovie4(){
    localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
    console.log("rbs2");
    console.log(JSON.stringify(dateSavedList));
  
    dateSavedList.push(savedMovie4);
    console.log(JSON.stringify(dateSavedList));
  }
  function renderSavedMovie5(){
    localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
    console.log("rbs2");
    console.log(JSON.stringify(dateSavedList));
  
    dateSavedList.push(savedMovie5);
    console.log(JSON.stringify(dateSavedList));
  }





function getMealApi() {

  let mealName = activitySearchInput.value.trim();
  var url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + mealName;

  fetch(url)
  .then(function (response) {
      return response.json();
  })

  .then(function (data) {
    console.log(data);
    let mealEl = document.querySelectorAll(".list-group-item");
    // for (i = 0; i < mealEl.length; i++) {

      // let urlText = data.meals[i].strMeal;
      let urlText1 = data.meals[0].strMeal;
      let urlText2 = data.meals[1].strMeal;
      let urlText3 = data.meals[2].strMeal;
      let urlText4 = data.meals[3].strMeal;
      let urlText5 = data.meals[4].strMeal;




      mealEl[0].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-1 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Meal: </b>${urlText1}</li>`;
      mealEl[1].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-2 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Meal: </b>${urlText2}</li>`;
      mealEl[2].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-3 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Meal: </b>${urlText3}</li>`;
      mealEl[3].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-4 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Meal: </b>${urlText4}</li>`;
      mealEl[4].innerHTML = `<li class="list-group-item result-bg"><button class="save-button-5 btn-sm btn-success mr-1" type="submit"><i class="far fa-save"></i></button><b>Meal: </b>${urlText5}</li>`;
    // }

savedMeal1 = urlText1
savedMeal2 = urlText2
savedMeal3 = urlText3
savedMeal4 = urlText4
savedMeal5 = urlText5
saveButtonsMeal();

  })
}


function saveButtonsMeal() {
  let saveButton1 = document.querySelector(".save-button-1")
  saveButton1.addEventListener("click", function(event) {
  console.log("hi working1");
  renderSavedMeal1();
  renderSearch();
  })
  
  let saveButton2 = document.querySelector(".save-button-2")
  saveButton2.addEventListener("click", function(event) {
  console.log("hi working2");
  renderSavedMeal2();
  renderSearch();
  })
  
  let saveButton3 = document.querySelector(".save-button-3")
  saveButton3.addEventListener("click", function(event) {
  console.log("hi working3");
  renderSavedMeal3();
  renderSearch();
  })
  
  let saveButton4 = document.querySelector(".save-button-4")
  saveButton4.addEventListener("click", function(event) {
  console.log("hi working4");
  renderSavedMeal4();
  renderSearch();
  })
  
  let saveButton5 = document.querySelector(".save-button-5")
  saveButton5.addEventListener("click", function(event) {
  console.log("hi working5");
  renderSavedMeal5();
  renderSearch();
  })
  
  }


function renderSavedMeal1(){
  localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
  console.log("rbs1");
  console.log(JSON.stringify(dateSavedList));

  dateSavedList.push(savedMeal1);
  console.log(JSON.stringify(dateSavedList));
}

function renderSavedMeal2(){
  localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
  console.log("rbs2");
  console.log(JSON.stringify(dateSavedList));

  dateSavedList.push(savedMeal2);
  console.log(JSON.stringify(dateSavedList));
}

function renderSavedMeal3(){
    localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
    console.log("rbs2");
    console.log(JSON.stringify(dateSavedList));
  
    dateSavedList.push(savedMeal3);
    console.log(JSON.stringify(dateSavedList));
  }
  function renderSavedMeal4(){
    localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
    console.log("rbs2");
    console.log(JSON.stringify(dateSavedList));
  
    dateSavedList.push(savedMeal4);
    console.log(JSON.stringify(dateSavedList));
  }
  function renderSavedMeal5(){
    localStorage.setItem("date-saved-list", JSON.stringify(dateSavedList));
    console.log("rbs2");
    console.log(JSON.stringify(dateSavedList));
  
    dateSavedList.push(savedMeal5);
    console.log(JSON.stringify(dateSavedList));
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


//////////////////////////////////////////////////////////////////


function init() {
  let storedDates = JSON.parse(localStorage.getItem("date-saved-list"));
  if (storedDates !==null){
    dateSavedList = storedDates;
  }
  renderAll();
}

function renderAll() {
  for (var i = 0; i < dateSavedList.length; i++) {
    var dateString = dateSavedList[i]
    var li = document.createElement("li");
    li.textContent = dateString;
    li.setAttribute("data-index", i);
    upcomingDatesList.appendChild(li);
    }
  }



function renderSearch() {
  var dateString = dateSavedList[dateSavedList.length - 1]
  var li = document.createElement("li");
  li.textContent = dateString;
  li.setAttribute("data-index", dateSavedList.length - 1);
  upcomingDatesList.appendChild(li);
}

init();