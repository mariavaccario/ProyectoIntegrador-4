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
    }})

    
let urlTV = `https://api.themoviedb.org/3/discover/tv?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&with_genres=${id}`;

console.log (urlTV)

fetch(urlTV)
    .then(function(response){
        return response.json();
    })
    .then (function(data){
    console.log(data);
    let resultsTV = data.results;
    let series = document.querySelector ('.generosTV')
    let articuloTV = '';
    
    for (let index = 0; index < resultsTV.length; index++) {
        console.log(resultsTV [index].poster_path);

        articuloTV += `<article>
                         <h3>${resultsTV[index].name}</h3>
                         <div class="photo-container">
                         <a href="./detailSeries.html?id=${resultsTV[index].id}"><img src="https://image.tmdb.org/t/p/original${resultsTV[index].poster_path}" alt=""></a>
                         </div>
                         <p>Estreno: ${resultsTV[index].first_air_date}</p>
                         </article>`
        series.innerHTML=articuloTV
    
    }})

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
