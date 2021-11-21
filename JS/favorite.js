//PELICULAS FAVORITAS
let recuperoPelis = localStorage.getItem('favoritosP');
let favoritosP = JSON.parse (recuperoPelis);

let listaP = document.querySelector ('.peliculasFav');
let pFavoritas = '';

if (favoritosP == null || favoritosP.length == 0){
    listaP.innerHTML='<p>No tiene seleccionada ninguna pelicula favorita</p>'
}
else {
    for (let i=0; i<favoritosP.length; i++){
        pfavs (favoritosP[i])
    }
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

    //SERIES FAVORITAS
let recuperoSeries = localStorage.getItem('favoritosS');
let favoritosS = JSON.parse (recuperoSeries);
console.log (favoritosS);

let lista = document.querySelector('.seriesFav');
let sFavoritas = '';

if (favoritosS == null || favoritosS.length == 0){
    lista.innerHTML='<p>No tiene seleccionada ninguna serie favorita</p>'
}
else {
    for (let i=0; i<favoritosS.length; i++){
        tusFav (favoritosS[i])
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

// formulario de búsqueda 
let formulario = document.querySelector('form');
let inputField = document.querySelector('.search');
let message = document.querySelector('.message');

formulario.addEventListener('submit', function(evento){
  evento.preventDefault();
  console.log('No se envió')

  if(inputField.value == ""){
    message.innerText = "No has ingresado ningún término";
  } else if (inputField.value.length < 3) {
    message.innerText = "Debes ingresar al menos 3 caracteres"
  } else {
    this.submit();
  }
})

// validacion formulario de búsqueda mobile
let formularioM = document.querySelector('.formBusquedaMobile');
let inputFieldM = document.querySelector('.searchM');
let messageM = document.querySelector('.messageM');

formularioM.addEventListener('submit', function(evento){
  evento.preventDefault();
  console.log('No se envió')

  if(inputFieldM.value == ""){
    messageM.innerText = "No has ingresado ningún término";
    messageM.style.textAlign= "center"
  } else if (inputFieldM.value.length < 3) {
    messageM.innerText = "Debes ingresar al menos 3 caracteres"
    messageM.style.textAlign= "center"
  } else {
    this.submit();
  }
})







