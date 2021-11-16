// Resultados de Películas

let qs1 = location.search; // obtener la qs de la url
let qsto1 = new URLSearchParams(qs1); // Transformar la qs en un objeto literal
let queryS = qsto1.get('search'); //Obtener el dato de id del objeto literal

let tituloPrincipal = document.querySelector('.tituloBusqueda');
tituloPrincipal.innerText = `El término buscado es: ${queryS}`


let urlMovies = `https://api.themoviedb.org/3/search/movie?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US&query=${queryS}`;
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
                                    <h3>${infoSearchMovies[i].original_title}</h3>
                                    <div class="photo-container">
                                    <a href="./detailMovie.html?id=${infoSearchMovies[i].id}""><img src="https://image.tmdb.org/t/p/original${infoSearchMovies[i].poster_path}" class=  alt=" "></a>
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



// // Resultados de Series
// let qs2 = location.search; // obtener la qs de la url
// let qsto2 = new URLSearchParams(qs1); // Transformar la qs en un objeto literal
// let queryP= qsto1.get('search'); //Obtener el dato de id del objeto literal


// let urlSeries = `https://api.themoviedb.org/3/search/tv?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&query=${queryP}`;
// console.log(urlSeries);

// fetch(urlSeries)
// .then(function(response){
//     return response.json()
// })
// .then(function(data){
//     console.log(data);
//     let infoSearchSeries = data.results;
//     let articulosPeliculasEncontradas = ('');
//     let peliculasEncontradas = document.querySelector('.peliculasEncontradas')

//     for(let i=0; i<5; i++) {
//         articulosPeliculasEncontradas += `<article>
//                                     <h3>${infoSearchMovies[i].original_name}</h3>
//                                     <div class="photo-container">
//                                     <a href="./detailMovie.html?id=${infoSearchMovies[i].id}""><img src="https://image.tmdb.org/t/p/original${infoSearchMovies[i].poster_path}" class=  alt=" "></a>
//                                     </div>
//                                     <p>Estreno: ${infoSearchMovies[i].first_air_date}</p>
//                                     </article>`

        
//         peliculasEncontradas.innerHTML = articulosPeliculasEncontradas;
//     }
// })
// .catch(function(error){
//     console.log(error)
// })