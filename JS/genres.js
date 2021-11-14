//* generos pelicula *//

let generosP = document.querySelector (".generosP")

fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6&language=en-US`)
.then(function(response){
    return (response.json());
})

.then(function(dataGenerosP){
    console.log(dataGenerosP);
    let info = dataGenerosP.genres
   

for (let i=0; i<dataGenerosP.length; i++)
generosP.innerHTML += 
`<li> <a href= detailGenres.html?id=${dataGenerosP.data[id].id}">${dataGenerosP.data[i].name}</a> </li>`
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
   

for (let i=0; i<dataGenerosTV.length; i++)
generosTV.innerHTML += `<li> <a href= detailGenres.html?id=${dataGenerosTV.data[id].id}">${dataGenerosTV.data[i].name}</a> </li>`
})


.catch(function(error){
    console.log(error);
}) 
