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
        let genero = document.querySelector('.genero');

        let generos = '';
        for (let i=0; i<data.genres.length; i++){
            generos += `<span> ${data.genres[i].name}, </span>`
            console.log(generos);
        }

        imagen.src = `https://image.tmdb.org/t/p/original${data.poster_path}`;
        original_name.innerText = data.original_name;
        rating.innerText = `Calificación: ${data.vote_average}`;
        first_air_date.innerText = `Estreno: ${data.first_air_date}`;
        overview.innerText = `${data.overview}`;
        genero.innerHTML = `Genero: ${generos}`;

    })
    .catch(function(error){
        console.log(error);
    })

    //BOTON FAVORITOS

    let favoritos = [];
    let recuperoStorage = localStorage.getItem('favoritos');
    
    if (recuperoStorage != null) {
        favoritos = JSON.parse(recuperoStorage);
    }

    let botonFav = document.querySelector('.agregarFavoritos');

    if (favoritos.includes(id)){
        botonFav.innerText = "Quitar de favoritos";
    }
    
    botonFav.addEventListener ('click', function (e){
        e.preventDefault();

        if (favoritos.includes(id)){
            let indice = favoritos.indexOf(id);
            favoritos.splice(indice,1)
            botonFav.innerText='Agregar a favoritos';
        }
        else {
            favoritos.push (id);
            botonFav.innerText='Quitar de favoritos'
        }

        let favsToString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favsToString);
        console.log (localStorage)
    })