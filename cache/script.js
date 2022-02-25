(async () => {
  const cache = await caches.open("myCache");
  console.log(cache);

  const req = new Request("https://jsonplaceholder.typicode.com/users/1");

  fetch(req)
    .then((data) => data.json())
    .then(console.log);
})();

// dodajemy przykladowy request = new Request(url)
// cache.add(req)

// cache.match(req) => zapisujemy wynik do zmiennej (await)
