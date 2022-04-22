/* function Movie() {
    this.originalTitle;
    this.title;
    this.img;
    this.bannerImg;
    this.director;
    this.produucer;
    this.runningTime;
    this.description;
    this.getMovieDetailsFromAPI = function() {
        
    }
} */

let movies = [];
let previousMovieIndex;
let currentMovieIndex = 0;
let nIntervId;

window.onload = async (event) => {
    console.log('This page is fully loaded!');
    await serviceLayer();    
  }

function serviceLayer() {
    
    let url = `https://ghibliapi.herokuapp.com/films`;
    return fetch(url)
        .then(res => res.json()) // parse response as JSON
          .then(data => {
            //console.log(data);           
            movies = data;
            //console.log('Movies: ' + JSON.stringify(movies));
            //console.log(movies[0].image);
            currentMovieIndex = 0;
            displayMovie();
            if(!nIntervId) {
                nIntervId = setInterval(displayMovie, 3000);                
            }
          })
          .catch(err => {
              console.log(`error ${err}`)
          });   
    
}

function displayMovie() {
    console.log('Before ' + currentMovieIndex);
    if(currentMovieIndex >= movies.length) {
        currentMovieIndex = 0;
    }
    let movieImg = document.getElementsByClassName('movie-img');
    let originalTitle = document.getElementsByClassName('original-title');
    let title = document.getElementsByClassName('title-value');
    let director = document.getElementsByClassName('director-value');
    let producer = document.getElementsByClassName('producer-value');
    let runningTime = document.getElementsByClassName('running-time-value');
    let description = document.getElementsByClassName('description-value');
    let movieImgBanner = document.getElementsByClassName('footer');
    movieImg[0].src = movies[currentMovieIndex].image;
    originalTitle[0].innerText = movies[currentMovieIndex].original_title;
    title[0].innerText = movies[currentMovieIndex].title;  
    director[0].innerText = movies[currentMovieIndex].director;
    producer[0].innerText = movies[currentMovieIndex].producer;
    runningTime[0].innerText = movies[currentMovieIndex].running_time + ' minutes';
    description[0].innerText = movies[currentMovieIndex].description;
    /* movieImgBanner.style.backgroundImage = movies[currentMovieIndex].movie_banner;
    movieImgBanner.style.backgroundRepeat = "no-repeat";
    movieImgBanner.style.backgroundPosition = "center";
    movieImgBanner.style.backgroundSize = "300px 150px";
    movieImgBanner.style.backgroundColor = "black"; */    
    currentMovieIndex++;       
    console.log('After ' + currentMovieIndex);
}