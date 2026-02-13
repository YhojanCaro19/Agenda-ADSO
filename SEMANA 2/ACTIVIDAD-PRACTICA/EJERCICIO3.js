// Yhojan Andres Caro Gonzalez | Andres Alvarez
let contactos = [];
let IdUnico = 1;

// Agregar contacto
const agregarContacto = (nombre, tel, correo) => {
  const contacto = {
    Id: IdUnico++,
    nombre,
    telefono: tel,
    correo
  };
  contactos.push(contacto);
  return contacto;
};

// Eliminar contacto
const eliminarContacto = (id) => {
  const index = contactos.find(c => c.Id === id);
  if (index !== -1) {
    contactos.splice(index, 1);
    return true;
  }
  return false;
};

// Buscar contacto
const buscarContacto = (dato) => {
  return contactos.filter(c =>
    c.nombre.toLowerCase().includes(dato.toLowerCase()) ||
    c.correo.toLowerCase().includes(dato.toLowerCase())
  );
};

// Actualizar contacto
const actualizarContacto = (id, datos) => {
  const contacto = contactos.find(c => c.Id === id);
  if (contacto) {
    Object.assign(contacto, datos);
    return contacto;
  }
  return null;
};

// Exportar a JSON
const exportarJSON = (contactos) => JSON.stringify(contactos, null, 2);

// Agregar contactos
agregarContacto("Gabo", "123456789", "Gabo@example.com");
agregarContacto("Jesucristo", "987654321", "Deus@cielo.com");

// Mostrar todos los contactos
console.log("Todos los contactos:");
contactos.forEach(c => {console.log(`ID: ${c.Id}, Nombre: ${c.nombre}, Tel: ${c.telefono}, Correo: ${c.correo}`);});

// Buscar contacto
console.log("\nBuscar 'Gabo':");
const resultados = buscarContacto("Gabo");
resultados.forEach(c => {console.log(`ID: ${c.Id}, Nombre: ${c.nombre}, Tel: ${c.telefono}, Correo: ${c.correo}`);});

// Actualizar contacto
actualizarContacto(1, { telefono: "111111111" });
console.log("\nContacto actualizado:");
contactos.forEach(c => {console.log(`ID: ${c.Id}, Nombre: ${c.nombre}, Tel: ${c.telefono}, Correo: ${c.correo}`);});

// Eliminar contacto
eliminarContacto(2);
console.log("\nDespues de eliminar:");
contactos.forEach(c => {console.log(`ID: ${c.Id}, Nombre: ${c.nombre}, Tel: ${c.telefono}, Correo: ${c.correo}`);});

// Exportar a JSON
console.log("\nExportar JSON:\n", exportarJSON(contactos));
