const input = document.querySelector("#keyword");
const results = document.querySelector("#results");

const displayMovies = (movies) => {
  results.innerHTML = "";
  movies.forEach((movie) => {
    results.insertAdjacentHTML(
      "beforeend",
      `<li class='list-inline-item'>
        <img width="120" src="${movie.Poster}" alt="">
      </li>`
    );
  });
};

const fetchMovies = (keyword) => {
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // 4. Change the DOM
      // console.log(data.Search);
      displayMovies(data.Search);
    });
};

const searchMovies = (event) => {
  event.preventDefault();
  // 3. Fetch the movie data through OmdbAPI
  // for GET request, the fecth is taking 1 argument
  fetchMovies(input.value);
};

export { fetchMovies, searchMovies };
