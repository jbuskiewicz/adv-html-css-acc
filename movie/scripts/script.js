jQuery(document).ready(() => {
  const xhr = new XMLHttpRequest();
  const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

  const IMG_URL = "https://image.tmdb.org/t/p/w1280";

  // najpierw otwieramy polaczenie - konfigurujemy endpoint, metode i sposob (sync/async)

  xhr.open("GET", API_URL, true);

  // error
  // load

  // progress

  xhr.addEventListener("error", (e) => {
    console.error("Request failed. Details: ", e);
  });

  // ustawiamy oczekiwany typ odpowiedzi
  xhr.responseType = "json";

  xhr.addEventListener("load", () => {
    // console.log(xhr.statusText);
    if (xhr.status === 200) {
      // console.log(JSON.parse(xhr.response));
      const { results } = xhr.response;

      for (const movie of results) {
        const { title, vote_average, overview, poster_path } = movie;
        $("#main").append(
          createMovieTile(poster_path, title, vote_average, overview)
        );
      }

      // document.getElementById('main');
      // const p = document.createElement("p");
      // p.innerText = "lorem ipsum";

      // append, prepend, after, before
      // remove()
      // $("#main").before(p);
    }
  });

  xhr.send(null);

  const getRatingClassName = (ratingAvg) => {
    if (ratingAvg >= 8) {
      return "green";
    } else if (ratingAvg >= 5) {
      return "orange";
    } else {
      return "red";
    }
  };

  const createMovieTile = (poster_path, title, vote_average, overview) => {
    const container = $('<div class="movie"></div>');
    container.append(`<img src="${IMG_URL}${poster_path}" alt="${title}" />`);
    container.append(`
    <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getRatingClassName(vote_average)}">${vote_average}</span>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
    </div>`);
    $(container).click(function () {
      console.log(this);
      $(this).children().find(".overview").toggleClass("active");
    });
    return container;
  };
});
