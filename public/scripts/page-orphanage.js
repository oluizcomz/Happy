
const options = {
    dragging : false,
    touchZoom:false,
    doubleClickZoom : false,
    scrollwheelZoom : false,
    zoomControl: false

}


const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng
// criate map
const map = L.map('mapid',options).setView([lat,lng], 16);
// criando title layes
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// criete icon

const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

//create marker and add marker
L.marker([lat,lng],{icon}).addTo(map)
 
// image gallery

function selectImage(event){
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button") 
    buttons.forEach(removeActiveClass)
   
    function removeActiveClass(button) {
        button.classList.remove("active")
        
    }

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src

    button.classList.add('active')



}

   