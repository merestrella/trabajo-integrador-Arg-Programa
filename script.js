const form = document.getElementById("form");
const name = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (nombre.value.trim() === "") {
    alert("Por favor ingrese su nombre");
    nombre.focus();
  } else if (apellido.value.trim() === "") {
    alert("Por favor ingrese su apellido");
    apellido.focus();
  } else if (phone.value.trim() === "") {
    alert("Por favor ingrese su número de teléfono");
    phone.focus();
  } else if (phone.value.trim().length < 10) {
    alert("Por favor ingrese un número de teléfono válido");
    phone.focus();
  } else if (email.value.trim() === "") {
    alert("Por favor ingrese su correo electrónico");
    email.focus();
  } else if (message.value.trim() === "") {
    alert("Por favor ingrese su mensaje");
    message.focus();
  } else {
    alert("¡Su mensaje ha sido enviado exitosamente!");
    form.reset();
  }
});

function CargarAnuncios() {
  $.ajax(
    "https://newsdata.io/api/1/news?country=ar&category=sports&apikey=pub_211489d9754ecffe6dce37882f0fd0655dd51"
  ).done(MostrarAnuncios);
}

function MostrarAnuncios(anuncio) {
  let divAnuncios = document.getElementById("anuncios-home");

  for (let i = 0; i < 3; i++) {
    let anuncios = anuncio.results[i];
    divAnuncios.innerHTML += `
    <div class="container-anuncio">
    <a href="${anuncios.link}"><img class="img-anuncio" src="${anuncios.image_url}" />
    <h2 class="titulo-anuncio">${anuncios.title}</h2>
    </a>
    </div>

    <style>
    .titulo-anuncio {
      font-size:14px;
    }
    .img-anuncio {
      max-height: 200px;
      width: auto;
    }
    </style>`;
  }
}

CargarAnuncios();
