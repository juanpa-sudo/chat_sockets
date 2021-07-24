var socket = io();

socket.on("connect", function () {
  console.log("Conectado al servidor");
});

// escuchar
socket.on("disconnect", function () {
  console.log("Perdimos conexión con el servidor");
});

// Buscando paramentros
let params = new URLSearchParams(window.location.search);
if (!params.has("nombre")) {
  document.querySelector("h1").textContent = "Registrate";
  setTimeout(() => {
    window.location = "index.html";
  }, 1000);
}

socket.emit("userConnect", { nombre: params.get("nombre") }, (data) => {
  console.log(data);
});
