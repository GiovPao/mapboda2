// Load Leaflet from CDN
const leafletScript = document.createElement("script");
leafletScript.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
leafletScript.onload = initMap;
document.head.appendChild(leafletScript);

function initMap() {
  // Create the map
  const map = L.map("map").setView([43.317, -1], 16);

  // Add OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);
  
const funiIcon = L.divIcon({
  className: "custom-div-icon",
  html: `<div class="marker-pin blue"></div>
         <img src="assets/icons/tranvia.png" class="marker-icon" />`,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
const parkIcon = L.divIcon({
  className: "custom-div-icon",
  html: `<div class="marker-pin blue"></div>
         <img src="assets/icons/roller-coaster.png" class="marker-icon" />`,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
  // Example locations
  const locations = [
    {
      name: "Funicolar",
      lng: -2.0062,
      lat: 43.3190980,
      address: "Funikular Plaza, 4, 200h m908, 20008 Donostia, Gipuzkoa",
      website:
        "https://www.monteigueldo.es/funicular",
      icon: funiIcon
    },
    {
      name: "Parque de Atracciones Monte Igueldo",
      lat: 43.32155,
      lng: -2.0092,
      address: "De Igeldo Ibilbidea, 183, 20008 Donostia-San Sebastian, Gipuzkoa",
      website:
        "https://www.monteigueldo.es/organize-your-visit",
      icon: parkIcon
    }
  ];

  // Add markers with Google Maps arrow link in popup
  locations.forEach((loc) => {
    const popupContent =
      `<strong>${loc.name}</strong><br>` +
      (loc.address ? loc.address + "<br>" : "") +
      `<a href="${loc.website}" target="_blank" style="text-decoration:none; font-size:14px;">➡️ Website</a>`;
    L.marker([loc.lat, loc.lng], { icon: loc.icon }).addTo(map).bindPopup(popupContent);
  });
  
  const carpopupContent = `
  <div class="route-popup">
    🚗 6 min</div>
    <div class="small-text">2,7 km</div>
    <div><a href="https://www.google.com/maps/dir/Funicular+Monte+Igueldo,+Funikular+Plaza,+4,+200h+m908,+20008+Donostia,+Gipuzkoa/Parque+de+Atracciones+Monte+Igueldo/@43.3163627,-2.0077324,1750m/data=!3m1!1e3!4m14!4m13!1m5!1m1!1s0xd51baa2f58f1d79:0xa579d1c1231ad79!2m2!1d-2.006307!2d43.319196!1m5!1m1!1s0xd51ba982e67aaf7:0xa8e29ca9856dc8c2!2m2!1d-2.0098019!2d43.321319!3e0?hl=es&entry=ttu&g_ep=EgoyMDI1MDkyOS4wIKXMDSoASAFQAw%3D%3D" 
           target="_blank">Google Maps</a></div>
  </div>
`;
  const funicolarpopupContent = `<div class="route-popup">
    <div>🚋 every 15 minutes</div>
    </div>
  </div>`;
      
  // GeoJSON line content
  const geojsonLine = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.00628,43.31907],[-2.0063,43.31906],[-2.00631,43.31903],[-2.0063,43.31898],[-2.0063,43.31895],[-2.0063,43.31895],[-2.00629,43.31891],[-2.00629,43.31891],[-2.00622,43.3189],[-2.00616,43.31889],[-2.00607,43.31885],[-2.00602,43.31878],[-2.006,43.31874],[-2.00596,43.31858],[-2.0059,43.31829],[-2.00586,43.31802],[-2.00581,43.3176],[-2.00576,43.31719],[-2.00564,43.31687],[-2.00564,43.31687],[-2.00568,43.31671],[-2.00577,43.3166],[-2.00596,43.31615],[-2.00612,43.31585],[-2.00618,43.31576],[-2.00639,43.31557],[-2.00659,43.3154],[-2.00678,43.31529],[-2.00697,43.31519],[-2.00718,43.31506],[-2.00741,43.31491],[-2.00761,43.31473],[-2.00793,43.31433],[-2.00805,43.31425],[-2.00821,43.3142],[-2.00918,43.31416],[-2.00948,43.31414],[-2.00966,43.31407],[-2.00981,43.31399],[-2.01066,43.31333],[-2.01077,43.31326],[-2.01091,43.31321],[-2.01106,43.31321],[-2.0113,43.31329],[-2.0116,43.31347],[-2.01194,43.3138],[-2.01235,43.31445],[-2.01258,43.31482],[-2.01297,43.31542],[-2.01304,43.31548],[-2.01331,43.3157],[-2.01413,43.31637],[-2.01447,43.31659],[-2.01472,43.31669],[-2.0151,43.3168],[-2.01541,43.31686],[-2.01605,43.31693],[-2.01636,43.31695],[-2.01667,43.31693],[-2.01837,43.31668],[-2.01845,43.31669],[-2.01851,43.31671],[-2.01854,43.31677],[-2.01854,43.31684],[-2.01849,43.3169],[-2.01839,43.31695],[-2.01679,43.31746],[-2.01679,43.31746],[-2.01604,43.31771],[-2.01578,43.31779],[-2.01549,43.31789],[-2.01481,43.31808],[-2.01455,43.31813],[-2.01425,43.31815],[-2.01358,43.31813],[-2.01335,43.31815],[-2.01311,43.31816],[-2.01301,43.31817],[-2.01227,43.31821],[-2.01202,43.31824],[-2.01187,43.31829],[-2.01173,43.31836],[-2.01159,43.31844],[-2.01149,43.31852],[-2.01134,43.31863],[-2.01119,43.31877],[-2.01112,43.31886],[-2.01093,43.31917],[-2.01088,43.31927],[-2.0107,43.31962],[-2.01066,43.31972],[-2.01064,43.31991],[-2.01064,43.32004],[-2.01065,43.32026],[-2.01065,43.32041],[-2.01067,43.32049],[-2.01077,43.32058],[-2.01077,43.32058],[-2.01041,43.32074],[-2.01006,43.3209],[-2.00974,43.32103],[-2.00927,43.32122],[-2.0092,43.32123],[-2.0092,43.32123]
      ]
    }
  };
  
  const geojsonLine2 = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [-2.00628,43.31907],[-2.0088,43.3214]
      ]
    }
  };

  // Add GeoJSON line to map
  L.geoJSON(geojsonLine2, {
    style: { color: "red", weight: 5, opacity: 0.6}
  }).addTo(map).bindPopup(funicolarpopupContent, {     permanent: true,   // always visible
    autoClose: false,  // don't auto-close when opening another popup
    closeOnClick: false,
    className: 'route-popup-container',
    direction: 'center'}).openPopup();


L.geoJSON(geojsonLine, {
    style: { color: "blue", weight: 3, opacity: 0.6}
  }).addTo(map).bindPopup(carpopupContent, {     permanent: true,   // always visible
    autoClose: false,  // don't auto-close when opening another popup
    closeOnClick: false,
    className: 'route-popup-container',
    direction: 'center'}).openPopup();
  
  
  // Zoom map to fit both markers and the line
  const group = new L.featureGroup([
    L.marker([locations[0].lat, locations[0].lng]),
    L.marker([locations[1].lat, locations[1].lng]),
    //L.marker([43.3158,-2]),
  ]);
  map.fitBounds(group.getBounds().pad(0.5));
}
