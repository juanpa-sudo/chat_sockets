class Usuarios {
  constructor() {
    this.personas = [];
  }
  agregarPersonas(id, nombre) {
    let persona = { id, nombre };
    this.personas.push(persona);

    return this.personas;
  }

  getPersona(id) {
    let persona = this.personas.filter((x) => x.id === id)[0];
    return persona;
  }
  getPersonas() {
    return this.personas;
  }
  getPersonasSala(sala) {
    //   MAntenimiento
  }
  borrarPersona(id) {
    let personsDelete = this.getPersona(id);
    this.personas = this.personas.filter((personas) => personas.id !== id);
    return personsDelete;
  }
}

module.exports = {
  Usuarios,
};
