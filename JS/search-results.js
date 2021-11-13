// Resultados de Series

let qs1 = location.search; // obtener la qs de la url
let qsto1 = new URLSearchParams(qs1); // Transformar la qs en un objeto literal
let idS = qsto1.get('id'); //Obtener el dato de id del objeto literal


let urlSearchMovies = `https://api.themoviedb.org/3/search/tv?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US&page=1&${busqueda}include_adult=false`;
fetch(urlSearchMovies)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    let infoSearchMovies = data.results;
    let seriesEncontradas = document.querySelector('.peliculasSeries');
    let articulosSeriesEncontradas = ('');

    for(let i=0; i<5; i++) {
        articulosSeriesEncontradas += `<article>
                                    <h3>${infoSearchMovies[i].original_title}</h3>
                                    <div class="photo.container">
                                    <a href="./detailMovie.html?id=${infoSearchMovies[i].id}""><img src="ttps://image.tmdb.org/t/p/original${infoSearchMovies[i].poster_path} alt=""></a>
                                    </div>
                                    <p>Estreno: ${infoSearchMovies[i].release_date}</p>
                                    </article>`
        seriesEncontradas.innerHTML = articulosSeriesEncontradas;
    }
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