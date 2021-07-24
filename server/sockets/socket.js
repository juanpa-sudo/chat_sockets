const { Usuarios } = require("../class/Usuarios");
const { io } = require("../server");

const usuario = new Usuarios();

io.on("connection", (client) => {
  console.log("Usuario conectado");

  client.on("userConnect", (data, callback) => {
    if (!data.nombre) {
      callback({
        ok: false,
        message: "El Nombre es necesario para esta sala de chat",
      });
    }

    let personas = usuario.agregarPersonas(client.id, data.nombre);
    callback(personas);
  });
});
