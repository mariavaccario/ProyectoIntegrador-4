let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = `https://api.themoviedb.org/3/discover/movie?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&with_genres=${id}`;

console.log (url)

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);

let pelicula = document.querySelector (".generosP")

// let articulo = `<article>
// <h3>${[i].title}</h3>
// <div class="photo-container">
//     <a href="./detailMovie.html?id=${infoPP[i].id}"><img src="https://image.tmdb.org/t/p/original${infoPP[i].poster_path}" alt=""></a>
// </div>
// <p>Estreno: ${infoPP[i].release_date}</p>
// </article>`






    })


