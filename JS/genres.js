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
    lista += `<li class="listaGeneros"><a href=detailGenres.html?id=${info[i].id}&genres=${info[i].name}>
            <span> ${info[i].name} </span> 
            </a> </li>`
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
    lista += `<li class="listaGeneros"><a href= detailGenres.html?id=${info[i].id}>
            <h3> ${info[i].name} </h3> 
            </a> </li>`
    console.log (lista)
    generosTV.innerHTML = lista

})

.catch(function(error){
    console.log(error);
}) 
