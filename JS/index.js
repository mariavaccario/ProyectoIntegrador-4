
//PELICULAS POPULARES
fetch('https://api.themoviedb.org/3/movie/popular?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let infoPP = data.results;
  let peliculasSeries = document.querySelector('.peliculasSeries');
  let articulosPeliculasP = ('');

  for (let i=0; i<5; i++){
      articulosPeliculasP+=`<article>
                                <h3>${infoPP[i].title}</h3>
                                <div class="photo-container">
                                    <a href="./detailMovie.html"><img src="https://image.tmdb.org/t/p/original${infoPP[i].poster_path}" alt=""></a>
                                </div>
                                <p>Estreno: ${infoPP[i].release_date}</p>
                            </article>`
  }
  peliculasSeries.innerHTML = articulosPeliculasP;
})
.catch(function(error) {
  console.log("Error: " + error);
})

//SERIES POPULARES
fetch('https://api.themoviedb.org/3/tv/popular?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let infoSP = data.results;
  let peliculasSeriesSP = document.querySelector('.seriesP');
  let articulosSeriesP = ('');

  for (let i=0; i<5; i++){
      articulosSeriesP+=`<article>
                            <h3>${infoSP[i].name}</h3>
                            <div class="photo-container">
                                <a href="./detailSeries.html?id=${infoSP[i].id}"><img src="https://image.tmdb.org/t/p/original${infoSP[i].poster_path}"alt=""></a>
                            </div>
                            <p>Estreno: ${infoSP[i].first_air_date}</p>
                        </article>`
  }
  peliculasSeriesSP.innerHTML = articulosSeriesP;
})
.catch(function(error) {
  console.log("Error: " + error);
})

//PELICULAS MAS VISTAS
fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=c7d8a8e4054747c2b47d0f7ebafc99e6')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let infoPV = data.results;
  let peliculasV = document.querySelector('.peliculasV');
  let articulosPeliculasV = ('');

  for (let i=0; i<5; i++){
      articulosPeliculasV+=`<article>
                            <h3>${infoPV[i].title}</h3>
                            <div class="photo-container">
                                <a href="./detailMovie.html?id=${infoPV[i].id}"><img src="https://image.tmdb.org/t/p/original${infoPV[i].poster_path}"alt=""></a>
                            </div>
                            <p>Estreno: ${infoPV[i].release_date}</p>
                        </article>`
  }
  peliculasV.innerHTML = articulosPeliculasV;
})
.catch(function(error) {
  console.log("Error: " + error);
})