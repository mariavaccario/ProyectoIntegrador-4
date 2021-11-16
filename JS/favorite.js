let recuperoSeries = localStorage.getItem('favoritosS');
let favoritosS = JSON.parse (recuperoSeries);
console.log (favoritosS);

let recuperoPelis = localStorage.getItem('favoritosP');
let favoritosP = JSON.parse (recuperoPelis);

//SERIES FAVORITAS
let lista = document.querySelector('.seriesFav');
let sFavoritas = '';
let listaP = document.querySelector ('.peliculasFav');
let pFavoritas = '';
if (favoritosS == null || favoritosS.length == 0){
    lista.innerHTML='<p>No tiene seleccionada ninguna serie favorita</p>'
}
else {
    for (let i=0; i<favoritosS.length; i++){
        tusFav (favoritosS[i])
    }
}

if (favoritosP == null || favoritosP.length == 0){
    listaP.innerHTML='<p>No tiene seleccionada ninguna pelicula favorita</p>'
}
else {
    for (let i=0; i<favoritosP.length; i++){
        pfavs (favoritosP[i])
    }
}


function tusFav(id){
    let urlS = `https://api.themoviedb.org/3/tv/${id}?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US`

    fetch(urlS) 
        .then (function (response){
            return response.json();
        })
        .then (function (data){
            console.log(data);
                sFavoritas += `<article>
                                <h3>${data.name}</h3>
                                <div class="photo-container">
                                    <a href="./detailSeries.html?id=${data.id}"><img src="https://image.tmdb.org/t/p/original${data.poster_path}"alt=""></a>
                                </div>
                                <p>Estreno: ${data.first_air_date}</p>
                                </article>`;

            lista.innerHTML=sFavoritas
        })
        .catch (function(error){
            console.log("Error:" + error);
        })
    }

    function pfavs(id){
    let urlP = `https://api.themoviedb.org/3/movie/${id}?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US`
    fetch (urlP)
        .then (function(response){
            return response.json();
        })
        .then (function(data){
            console.log(data);
                pFavoritas += `<article>
                                <h3>${data.title}</h3>
                                <div class="photo-container">
                                    <a href="./detailMovie.html?id=${data.id}"><img src="https://image.tmdb.org/t/p/original${data.poster_path}"alt=""></a>
                                </div>
                                <p>Estreno: ${data.release_date}</p>
                                </article>`;

            listaP.innerHTML=pFavoritas
        
        })
        .catch (function(error){
            console.log("Error:" + error);
        })
    }






