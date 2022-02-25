const xhr = new XMLHttpRequest();
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

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
    console.log(xhr.response);
  }
});

xhr.send(null);
