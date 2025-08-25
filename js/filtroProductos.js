const busqueda = localStorage.getItem("productoFIltrado")
const productos = fetch("../data/Productos.JSON").then((res) => res.json());

const buscador = document.getElementById("buscador");
const main = document.getElementById("mainFiltroProductos");

function buscarProducto(productos, busqueda ) {
  console.log(busqueda)
   productos.then(({ productos }) => {
     let newProductos = nuevoArrProductos(productos);
     let productosFiltrados = [];
     for (let i = 0; i < newProductos.length; i++) {
       newProductos[i].categori.filter((nameCategori) => {
         if (nameCategori === busqueda) productosFiltrados.push(newProductos[i]);
       });
     }
     mostrarProductoFiltrado(productosFiltrados);
     buscador.value = "";
  });
}

const nuevoArrProductos = (productos) => {
  let newArr = [];
  productos.map((producto) => {
    if (producto.class !== "featured" && producto.class !== "")
      newArr.push(producto);
  });
  return newArr;
};

buscador.addEventListener("change", (e) => {
  let busqueda = e.target.value;
  buscarProducto(productos, busqueda);
});


function mostrarProductoFiltrado(productosFiltrados) {
  main.innerHTML = "";
  console.log(productosFiltrados);
  const divMain = document.createElement("div");
  divMain.className = "mainContent";
  main.appendChild(divMain);
  
  const aside = document.createElement("aside");
  aside.className = "sidebar";
  divMain.appendChild(aside);
  
  const titelProductos = document.createElement("h2");
  titelProductos.className = "tituloProductos";
  titelProductos.innerHTML = "todos los articulos";
  divMain.appendChild(titelProductos);
  
  const section = document.createElement("section");
  section.className = "cardsContain";
  main.appendChild(section);
  
  section.innerHTML = "";
  
  console.log(section);
  
  productosFiltrados.forEach((productoFiltrados) => {
    section.innerHTML += `
    <div class="cardInfo">
    <img src=${productoFiltrados.image}>
    <header class="cardHeader"> 
    <h3 class="productName">${productoFiltrados.name}</h3>
    <small>${productoFiltrados.price}usd</small>
    </header>
    <footer class="cardFooter">
    <button class="cardButton" id="${productoFiltrados.product_id}">ver producto</button>
    </footer> 
    </div>
    `;
    divMain.appendChild(section);
  });
}


buscarProducto(productos,busqueda)