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