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

const formCotizacion = document.getElementById("formCotizacion");
const producto = document.getElementById("producto");
const messageCoti = document.getElementById("coments");

formCotizacion.addEventListener("submit", (event) => {
  event.preventDefault();
  if (producto.value.trim() === "") {
    alert("Por favor ingrese un producto");
    producto.focus();
  } else if (messageCoti.value.trim() === "") {
    alert("Por favor ingrese su mensaje");
    messageCoti.focus();
  } else {
    alert("¡Su mensaje ha sido enviado exitosamente!");
    form.reset();
  }
});

const getAnuncios = () => {
  const urlFetch =
    "https://newsdata.io/api/1/news?country=ar&category=sports&apikey=pub_211489d9754ecffe6dce37882f0fd0655dd51";
  const refDivNotas = document.querySelector("#anuncios-home");
  fetch(urlFetch)
    .then((response) => response.json())
    .then((results) => {
      const listaNotas = results?.results
        .slice(0, 3)
        .map(({ title, link, image_url }) => {
          const imagen = image_url
            ? `<img src=${image_url} width="200" height="200 />`
            : `<img class="img-anuncio" src="https://depor.com/resizer/MXvzOc-IrH6P7_QBWSEUUvRKnwQ=/1200x675/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ASYXSWROVNE5NG4PSR4TF4ZF2A.gif" />`;
          return `
          <div class="container-anuncio">
            <a href="${link}">
              <picture class="container-img">
                ${imagen}
              </picture>
              <h2 class="titulo-anuncio">${title}</h2>
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
            container-img {
              max-width: 200px;
            }
          </style>`;
        });
      refDivNotas.innerHTML = listaNotas.join();
    });
};
//Para ejecutar la funcion cuando la pagina se recarga por primera vez
window.onload = function () {
  getAnuncios();
};
