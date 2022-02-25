// 'caches' in self
(async () => {
  const cache = await caches.open("myCache");
  //   console.log(cache);

  let req = new Request("https://jsonplaceholder.typicode.com/users/1");
  cache.add(req);

  if (await cache.match(req)) {
    const data = await cache.match(req);
    const json = await data.json();
    console.log(json);
    // printData(json)
    return;
  } else {
    req = new Request("https://jsonplaceholder.typicode.com/users/1");
  }
})();

// dodajemy przykladowy request = new Request(url)
// cache.add(req)

// cache.match(req) => zapisujemy wynik do zmiennej (await)
const printData = (element) => {
  document.appendChild;
};
