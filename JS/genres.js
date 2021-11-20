//* generos pelicula *//

let generosP = document.querySelector (".generosP")

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US`)
.then(function(response){
    return (response.json());
})

.then(function(dataGenerosP){
    console.log(dataGenerosP);
    let info = dataGenerosP.genres
   

    let lista = ``
    for (let i=0; i<info.length; i++)

    lista += `<a href= detailGenres.html?id=${info[i].id}&genres=${info[i].name}  class="padreG">
        <section>
            <span class="listaGeneros"> ${info[i].name} </span> 
            </section></a>`
    console.log (lista)
    generosP.innerHTML = lista

})

.catch(function(error){
    console.log(error);
}) 


//* generos series *//

let generosTV = document.querySelector (".generosTV")

fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US`)
.then(function(response){
    return (response.json());
})

.then(function(dataGenerosTV){
    console.log(dataGenerosTV);
    let info = dataGenerosTV.genres;
   

    let lista = ``
    for (let i=0; i<info.length; i++)
    lista += `<a href= detailGenres.html?id=${info[i].id}&genres=${info[i].name}  class="padreG">
        <section>
            <span class="listaGeneros"> ${info[i].name} </span> 
            </section></a>`
    console.log (lista)
    generosTV.innerHTML = lista

})

.catch(function(error){
    console.log(error);
}) 


    // validación formulario de búsqueda 
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