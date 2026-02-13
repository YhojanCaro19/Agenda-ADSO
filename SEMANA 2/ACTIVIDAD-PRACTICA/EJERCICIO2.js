// Yhojan Andres Caro Gonzalez | Andres Alvarez
const listaProductos = [
  { nombre: "Laptop", precio: 1200000, stock: 5 },
  { nombre: "Mouse", precio: 35000, stock: 0 },
  { nombre: "Teclado", precio: 85000, stock: 12 }
];

// Filtrar productos que tienen stock
const productosEnStock = (productos) => productos.filter(p => p.stock > 0);

// Sumar todo el dinero que hay en el inventario
const totalInventario = (productos) => 
  productos.reduce((suma, p) => suma + (p.precio * p.stock), 0);

// Aplicar descuento a los productos
const ponerDescuento = (productos, porcentaje) =>
  productos.map(p => ({ ...p, precio: p.precio - (p.precio * porcentaje / 100) }));

// Ordenar los productos por precio (de menor a mayor)
const ordenarPrecio = (productos) => [...productos].sort((a, b) => a.precio - b.precio);

const stockDisponible = productosEnStock(listaProductos);
const conDescuento = ponerDescuento(listaProductos, 10);
const ordenados = ordenarPrecio(listaProductos);

console.log(`Hay ${stockDisponible.length} productos en stock: ${stockDisponible.map(p => p.nombre).join(", ")}`);
console.log("Valor total del inventario:", totalInventario(listaProductos));
console.log("Productos con 10% de descuento:", conDescuento.map(p => `${p.nombre}: $${p.precio}`));
console.log("Productos ordenados de menor a mayor:", ordenados.map(p => `${p.nombre}: $${p.precio}`));