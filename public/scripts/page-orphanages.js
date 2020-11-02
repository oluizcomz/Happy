// criate map
const map = L.map('mapid').setView([-18.9184679,-48.260365], 14);
// criando title layes
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// criete icon

const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

// creat popup
function addMarker({id, name, lat, lng}){

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight:240
}).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="./images/arrow-white.svg"></a>`)

//create marker and add marker
L.marker([lat,lng],{icon}).addTo(map)
    .bindPopup(popup)
   

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach(span =>{
 const orphanage = {
     id: span.dataset.id,
     name: span.dataset.name,
     lat: span.dataset.lat,
     lng: span.dataset.lng,

 }

 addMarker(orphanage)

})