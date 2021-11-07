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
                                    <a href="./detailMovie.html"><img src="${infoPP[i].poster_path}" alt=""></a>
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
                            <h3>${infoSP[i].title}</h3>
                            <div class="photo-container">
                                <a href="./detailMovie.html"><img src="${infoSP[i].poster_path}" alt=""></a>
                            </div>
                            <p>Estreno: ${infoSP[i].release_date}</p>
                        </article>`
  }
  peliculasSeriesSP.innerHTML = articulosSeriesP;
})
.catch(function(error) {
  console.log("Error: " + error);
})
