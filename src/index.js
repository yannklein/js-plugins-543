// 1. Select the input, the button, and the list
const input = document.querySelector("#keyword");
const submit = document.querySelector("#submit");
const results = document.querySelector("#results");

// 2. Listen to a click on button
submit.addEventListener("click", (event) => {
  event.preventDefault();
  // 3. Fetch the movie data through OmdbAPI
  // for GET request, the fecth is taking 1 argument
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      results.innerHTML = "";
      // 4. Change the DOM
      // console.log(data.Search);
      data.Search.forEach((movie) => {
        results.insertAdjacentHTML(
          "beforeend",
          `<li class='list-inline-item'>
            <img src="${movie.Poster}" alt="">
            <p>${movie.Title}</p>
          </li>`
        );
      });
    });
});
