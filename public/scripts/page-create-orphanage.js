// criate map
import L from "leaflet";
const map = L.map('mapid').setView([-18.9184679,-48.260365], 16);
// criando title layes
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// criete icon

const icon = L.icon({
    iconUrl: "./images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor: [29,68],
})

//create marker and add marke
let marker;
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;
    //remove icon
    document.querySelector('[name=lat]').value=lat;
    document.querySelector('[name=lng]').value=lng;
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat,lng],{icon}).addTo(map)
})

//adicionar fotos

function addPhotoField(){
    //pegar o contaner de fotos #images
   const container =  document.querySelector('#images')
   //pegar todos oscontein er de imagens
   const fieldsContainer = document.querySelectorAll('.new-upload')
  //dpegar so o ultimo container
   const newFieldsContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true)
   
   //verificar se o usuario escreveu antes de adcionar outra imagem
    const input =  newFieldsContainer.children[0]

    if(input.value==""){
        return

    }
   
   
   //impar o campo escritos (input) que e o primeiro (0) filho 
    newFieldsContainer.children[0].value = ""

   //adicionar no conteiner de fotos 
   container.appendChild(newFieldsContainer)


}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

   if( fieldsContainer.length <2){
    span.parentNode.children[0].value = ""
    return
   }
   span.parentNode.remove();
}
   
//selecionando o sim ou nao
function toggleSelect(event){
    //pegar todos os botoes
    document.querySelectorAll('.button-select button').forEach((button)=>{
        button.classList.remove('active')
    })
    const button = event.currentTarget
    button.classList.add('active')
    const input =  document.querySelector('[name= "open_on_weekends"]')
  
    input.value = button.dataset.value
}

function validade(event){
    // PROCUERAR O SPAN ESCONDIDO SE FOR VAZIO FAÇA ISSO
    // SE FOR VAZIO CAI NESTE SPAN
// if(Object.values(fields).includes('')){
    // return res.send('Todos os campos devem ser preenchidos!')

    // event.preventDefault()
    // alert('Selecione um ponto no mapa!')
}