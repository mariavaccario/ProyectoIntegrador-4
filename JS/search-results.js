// Resultados de Películas

let qs1 = location.search; // obtener la qs de la url
let qsto1 = new URLSearchParams(qs1); // Transformar la qs en un objeto literal
let queryS = qsto1.get('search'); //Obtener el dato de id del objeto literal

let tituloPrincipal = document.querySelector('.tituloBusqueda');
tituloPrincipal.innerText = `El término buscado es: ${queryS}`


let urlMovies = `https://api.themoviedb.org/3/search/tv?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US&query=${queryS}`;
console.log(urlMovies);

fetch(urlMovies)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data);
    let infoSearchMovies = data.results;
    let articulosPeliculasEncontradas = ('');
    let peliculasEncontradas = document.querySelector('.peliculasEncontradas')

    for(let i=0; i<5; i++) {
        articulosPeliculasEncontradas += `<article>
                                    <h3>${infoSearchMovies[i].original_name}</h3>
                                    <div class="photo.container">
                                    <a href="./detailMovie.html?id=${infoSearchMovies[i].id}""><img src="https://image.tmdb.org/t/p/original${infoSearchMovies[i].poster_path}" class=  alt=" "></a>
                                    </div>
                                    <p>Estreno: ${infoSearchMovies[i].first_air_date}</p>
                                    </article>`

        
        peliculasEncontradas.innerHTML = articulosPeliculasEncontradas;
    }
})
.catch(function(error){
    console.log(error)
})

// // Resultados de Series
// let urlSearchSeries = `https://api.themoviedb.org/3/search/movie?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US&page=1&${busqueda}include_adult=false`;
// fetch(urlSearchSeries)
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error)
// })