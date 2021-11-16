let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');
let genero = qsto.get('genres')

let titulo = document.querySelector ('.tituloPrincipal')
    titulo.innerText = genero

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&with_genres=${id}`;

console.log (url)

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
    console.log(data);
    let results = data.results;
    let pelicula = document.querySelector ('.generosP')
    let articulo = '';
    
    for (let index = 0; index < results.length; index++) {
        console.log(results [index].poster_path);

        articulo += `<article>
                         <h3>${results[index].title}</h3>
                         <div class="photo-container">
                         <a href="./detailMovie.html?id=${results[index].id}"><img src="https://image.tmdb.org/t/p/original${results[index].poster_path}" alt=""></a>
                         </div>
                         <p>Estreno: ${results[index].release_date}</p>
                         </article>`
        pelicula.innerHTML=articulo
    }

    

    

    })


