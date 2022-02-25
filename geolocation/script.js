// lokalizowanie wlaczone na urzadzeniu
// urzadzenie zezwala na korzystanie z uslug lokalizujacych
// uzytkownik zezwolil na pobranie lokalizacji

let map = L.map("map");

const startTracking = () => {
  if (!navigator.geolocation) {
    console.log("Brak uslugi geolokalizacji");
  } else {
    navigator.geolocation.getCurrentPosition((pos) => {
      map.setView([pos.coords.latitude, pos.coords.longitude], 13);
      L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamJ1c2tpZXdpY3oiLCJhIjoiY2wwMXJjczN5MDM5YjNkcjI2NHVnZHdobyJ9.HKiK9gCOtpe5TtGYEr-pig",
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: "mapbox/streets-v11",
          tileSize: 512,
          zoomOffset: -1,
          accessToken: "your.mapbox.access.token",
        }
      ).addTo(map);
    });
    navigator.geolocation.watchPosition(getUserPosition, handleErrors, {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 450000,
    });
  }
};

const getUserPosition = (position) => {
  L.circle([position.coords.latitude, position.coords.longitude], {
    color: "red",
    fillColor: "#f03",
    fillOpacity: 0.5,
    radius: 500,
  }).addTo(map);
};

const handleErrors = (error) => {
  console.log(error);
};

startTracking();
