/* create map */
const map = L.map("mapid").setView([-23.19, -46.92], 14);

/* create and add tile layer */
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

/* create icon */
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create an add makers
map.on("click", (event) => {
  const { lat, lng } = event.latlng;

    document.querySelector("[name=lat]").value = lat;
    document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  // add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});


// photos upload
function addPhotoField(){
  // pegar o container de fotos #images
  const container = document.querySelector("#images");

  // container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");

  // clone da ultima imagem
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  // verificar se o input esta vazio
  if (newFieldContainer.children[0].value === "") return;

  // limpar o campo
  newFieldContainer.children[0].value = ""

  // adicionar o clone ao container #images
  container.appendChild(newFieldContainer);
}

function deleteField(event){
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1){
    span.parentNode.children[0].value = "";
    return;
  } 
    
  span.parentNode.remove();
}

function toggleSelect(event) {
  document.querySelectorAll(".button-select button").forEach( b => b.classList.remove("active") );

  const button = event.currentTarget;
  button.classList.add("active");

  const input = document.querySelector('[name="open-on-weekends"]');
  input.value = button.dataset.value;
}