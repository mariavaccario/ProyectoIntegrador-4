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

    let titulo = document.querySelector ('.tituloPrincipal')
    titulo.innerText = `${data.name}`

    let pelicula = document.querySelector (".generosP")
    let articulo = `<article>
                    <h3>${infoPP.title}</h3>
                    <div class="photo-container">
                    <a href="./detailMovie.html?id=${infoPP.id}"><img src="https://image.tmdb.org/t/p/original${infoPP.poster_path}" alt=""></a>
                    </div>
                    <p>Estreno: ${infoPP.release_date}</p>
                    </article>`

    pelicula.innerHTML=articulo

    })


