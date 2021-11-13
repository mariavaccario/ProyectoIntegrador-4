// Resultados de Series
let urlSearchMovies = `https://api.themoviedb.org/3/search/tv?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US&page=1&${busqueda}include_adult=false`;
fetch(urlSearchMovies)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error)
})


// Resultados de Películas
let urlSearchSeries = `https://api.themoviedb.org/3/search/movie?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US&page=1&${busqueda}include_adult=false`;
fetch(urlSearchSeries)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error)
})