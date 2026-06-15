/* =====================================================
MAPS
===================================================== */

const map =
  L.map('map').setView(
    [22.5726,88.3639],
    12
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution:'© OpenStreetMap'
  }
).addTo(map);

L.marker([22.5726,88.3639])
  .addTo(map)
  .bindPopup("UIverse Map")
  .openPopup();

/* SECOND MAP */

const map2 =
  L.map('map2').setView(
    [19.0760,72.8777],
    11
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map2);

/* THIRD MAP */

const map3 =
  L.map('map3').setView(
    [28.7041,77.1025],
    10
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map3);

/* FOURTH MAP - MINI MARKER */

const map4 =
  L.map('map4').setView(
    [13.0827,80.2707],
    12
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map4);

L.marker([13.0827,80.2707])
  .addTo(map4)
  .bindPopup('Mini Marker - Chennai')
  .openPopup();

/* FIFTH MAP - ROUTE / POLYLINE */

const map5 =
  L.map('map5').setView(
    [12.9716,77.5946],
    6
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map5);

const route = [
  [12.9716,77.5946],
  [13.0827,80.2707],
  [19.0760,72.8777]
];

L.polyline(route, { color: '#ff7a3d', weight: 4 }).addTo(map5);

map5.fitBounds(route);

/* SIXTH MAP - HOTSPOTS (simple heat effect using circles) */

const map6 =
  L.map('map6').setView(
    [21.1458,79.0882],
    5
  );

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map6);

const hotspots = [
  [19.0760,72.8777,20000],
  [22.5726,88.3639,20000],
  [28.7041,77.1025,20000],
  [13.0827,80.2707,20000]
];

hotspots.forEach(h => {
  L.circle([h[0], h[1]], {
    radius: h[2],
    color: '#7b61ff',
    fillColor: '#7b61ff',
    fillOpacity: 0.12,
    weight: 0
  }).addTo(map6);
});

/* =====================================================
SEARCH DEMO
===================================================== */

const searchBtn =
  document.querySelector(
    ".search-location button"
  );

searchBtn.addEventListener(
  "click",
  ()=>{

    searchBtn.innerHTML =
      "Searching...";

    setTimeout(()=>{

      searchBtn.innerHTML =
        "Found";

    },1200);

  }
);

/* =====================================================
NAVBAR SCROLL
===================================================== */

window.addEventListener(
  "scroll",
  ()=>{

    const navbar =
      document.querySelector(".navbar");

    if(window.scrollY > 20){

      navbar.style.background =
        "rgba(5,8,22,.95)";

    }else{

      navbar.style.background =
        "rgba(5,8,22,.8)";
    }

  }
);