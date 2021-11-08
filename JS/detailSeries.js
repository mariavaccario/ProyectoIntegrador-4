let qs = location.search;
let qsto = new URLSearchParams(qs);
let id = qsto.get('id');

let url = `https://api.themoviedb.org/3/tv/popular/{tv_${id}}?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);

        let poster_path = document.querySelector('fotoDetail');
        let original_name = document.querySelector('.tituloDetail');
        let vote_average =  document.querySelector('.rating');
        let first_air_date = document.querySelector('.first_air_date');
        let overview =  document.querySelector('.overview');

        poster_path.src = data.poster_path;
        original_name.innerText = data.original_name;
        rating.innerText = data.vote_average;
        first_air_date.innerText = data.first_air_date;
        overview.innerText = data.overview;

    })
    .catch(function(error){
        console.log(error);
    })