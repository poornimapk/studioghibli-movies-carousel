function Movie() {
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
}


window.onload = (event) => {
    console.log('This page is fully loaded!');
    serviceLayer();
  }

function serviceLayer() {
    let movies = [];
    let url = `https://ghibliapi.herokuapp.com/films`;
    fetch(url)
        .then(res => res.json()) // parse response as JSON
          .then(data => {
            console.log(data);           
            movies = data;
            //console.log('Movies: ' + JSON.stringify(movies));
            console.log(movies[0]);
          })
          .catch(err => {
              console.log(`error ${err}`)
          });
    
    
}