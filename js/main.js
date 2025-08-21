const productos = fetch("../data/Productos.JSON").then((res) => res.json());
const buscador = document.getElementById("buscador");
const main = document.getElementById("main");
console.log(main);

function buscarProducto(productos, busqueda) {
  let newProductos = nuevoArrProductos(productos);
  let productosFiltrados = [];

  for (let i = 0; i < newProductos.length; i++) {
    newProductos[i].class.filter((nameClasse) => {
      if (nameClasse === busqueda) productosFiltrados.push(newProductos[i]);
    });
  }
  mostrarProductoFiltrado(productosFiltrados);
  buscador.value = "";
}

const nuevoArrProductos = (productos) => {
  let newArrProductos = [];
  productos.map((producto) => {
    if (producto.class !== "featured" && producto.class !== "")
      newArrProductos.push(producto);
  });
  return newArrProductos;
};

buscador.addEventListener("change", (e) => {
  let busqueda = e.target.value;
  productos.then(({ productos }) => buscarProducto(productos, busqueda));
});

// function mostrarProductoFiltrado(productosFiltrados) {
//   console.log(productosFiltrados);
//   for (let i = 0; i < productosFiltrados.length; i++) {
//     main.innerHTML = `
//         <section> 
//             <img src="${productosFiltrados[i].image}" alt="${productosFiltrados[i].name}">
//             <h2>${productosFiltrados[i].name}</h2>
//             <small>${productosFiltrados[i].price}$ </small>
//         </section>

//         `;
//   }
// }
