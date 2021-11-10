let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = `https://api.themoviedb.org/3/tv/${id}?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);

        let imagen = document.querySelector('.fotoDetail');
        let original_name = document.querySelector('.tituloDetail');
        let rating =  document.querySelector('.rating');
        let first_air_date = document.querySelector('.first_air_date');
        let overview =  document.querySelector('.overview');
        // let genero = document.querySelector('.genero');

        imagen.src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
        original_name.innerText = data.original_name;
        rating.innerText = `Calificación: ${data.vote_average}`;
        first_air_date.innerText = `Estreno: ${data.first_air_date}`;
        overview.innerText = `${data.overview}`;
        // genero.innerText = data.genres;

    })
    .catch(function(error){
        console.log(error);
    })