// Resultados de Películas

let qs1 = location.search; // obtener la qs de la url
let qsto1 = new URLSearchParams(qs1); // Transformar la qs en un objeto literal
let queryP = qsto1.get('search'); //Obtener el dato de id del objeto literal

let tituloPrincipal = document.querySelector('.tituloBusqueda');
tituloPrincipal.innerText = `El término buscado es: ${queryP}`


let urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US&query=${queryP}`;
console.log(urlMovies);

fetch(urlMovies)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let infoSearchMovies = data.results;
    let articulosPeliculasEncontradas = ('');
    let peliculasEncontradas = document.querySelector('.peliculasEncontradas')

    if (articulosPeliculasEncontradas.length == 0) {
        let moviesNotFound = document.querySelector('.moviesNotFound')
        moviesNotFound.innerText = `No se han encontrado películas que coincidan con: ${queryP}`
    } else (articulosPeliculasEncontradas.length > 0)
        for(let i=0; i<5; i++) {
            articulosPeliculasEncontradas += `<article>
                                        <h3>${infoSearchMovies[i].original_title}</h3>
                                        <div class="photo-container">
                                        <a href="./detailMovie.html?id=${infoSearchMovies[i].id}""><img src="https://image.tmdb.org/t/p/original${infoSearchMovies[i].poster_path}" alt=" "></a>
                                        </div>
                                        <p>Estreno: ${infoSearchMovies[i].release_date}</p>
                                        </article>`
            console.log(infoSearchMovies[i].poster_path);
    
            peliculasEncontradas.innerHTML = articulosPeliculasEncontradas;
        }

})

.catch(function(error){
    console.log(error)
})



// Resultado de series

let qs2 = location.search // obtener la qs de la url
let qsto2 = new URLSearchParams(qs2); // Transformar la qs en un objeto literal
let queryS = qsto2.get('search'); // obetener el dato de id del objeto literal

let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&query=${queryS}`

fetch(urlSeries)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let infoSearchSeries = data.results;
    let articulosSeriesEncontradas = ('');
    let seriesEncontradas = document.querySelector('.seriesEncontradas')

    if (articulosSeriesEncontradas.length == 0) {
        let seriesNotFound = document.querySelector('.seriesNotFound')
        seriesNotFound.innerText = `No se han encontrado series que coincidan con: ${queryS}`
    } else (articulosSeriesEncontradas.length > 0) 
        for (let i=0; i<5; i++) {
        articulosSeriesEncontradas += `<article>
                                    <h3>${infoSearchSeries[i].original_name}</h3>
                                    <div class="photo-container">
                                    <a href="./detailSeries.html?id=${infoSearchSeries[i].id}""><img src="https://image.tmdb.org/t/p/original${infoSearchSeries[i].poster_path}" alt=" "></a>
                                    </div>
                                    <p>Estreno: ${infoSearchSeries[i].first_air_date}</p>
                                    </article>`

        console.log(infoSearchSeries[i].poster_path);

        seriesEncontradas.innerHTML = articulosSeriesEncontradas;
    }
})
.catch(function(error){
    console.log(error);
})

// }