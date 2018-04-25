const myApp = {
  movieGenres(data, genres) {
    genres.forEach((genre, index) => {
      myApp.vm.genres.push({
        name : genre,
        movies : data.filter(movie => movie.genre_name === genre)
      })
    })
  },

  vm : new Vue({
    el : "#app",

    data : {
      message : "Preview Your Favourite Movies!",
      genres : [],

      overriddenNetworks: {
        "test" : {
          "sharer" : "https://google.com",
          "type" : "popup"
        }
      }
    },

    methods : {

    },

    delimiters : ["${", "}"]
  })
}
// console.log(appData.movies);
myApp.movieGenres(appData.movies, ["family", "drama", "adventure"]);

Vue.use(SocialSharing);