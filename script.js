const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const apellidoInput = document.getElementById("apellido");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   if (nameInput.value === "") {
//     alert("Por favor, ingresa tu nombre");
//     nameInput.focus();
//     return false;
//   }

//   if (apellidoInput.value === "") {
//     alert("Por favor, ingresa tu apellido");
//     apellidoInput.focus();
//     return false;
//   }

//   if (emailInput.value === "") {
//     alert("Por favor, ingresa tu correo electrónico");
//     emailInput.focus();
//     return false;
//   }

//   if (phoneInput.value === "") {
//     alert("Por favor, ingresa tu número de teléfono");
//     phoneInput.focus();
//     return false;
//   }

//   const phoneRegex = /^\d{10}$/;
//   if (!phoneRegex.test(phoneInput.value)) {
//     alert("Por favor, ingresa un número de teléfono válido (10 dígitos)");
//     phoneInput.focus();
//     return false;
//   }

//   if (messageInput.value === "") {
//     alert("Por favor, ingresa un mensaje");
//     messageInput.focus();
//     console.log(messageInput, "soy un mensaje");
//     return false;
//   }

//   // Si todo está bien, se envía el formulario
//   alert("Formulario enviado con éxito");
//   form.reset();
// });

function CargarAnuncios() {
  $.ajax(
    "https://newsdata.io/api/1/news?country=ar&category=sports&apikey=pub_211489d9754ecffe6dce37882f0fd0655dd51"
  ).done(MostrarAnuncios);
}

function MostrarAnuncios(anuncio) {
  const divAnuncios = document.getElementById("anuncios-home");
  console.log(anuncio);
  for (let i = 0; i < anuncio.results.length; i++) {
    let anuncios = anuncio.results[i];
    divAnuncios.innerHTML += `
    <div>
    <img class="img-anuncio" src="${anuncios.image_url}" />
    <h2 class="titulo-anuncio">${anuncios.title}</h2>
    </div>
    
    <style>
    .titulo-anuncio {
      font-size:15px;
    }
    .img-anuncio {
      max-height: 200px;
      width: auto;
    }
    </style>`;
  }
}

CargarAnuncios();
