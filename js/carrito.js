import { cartCounter } from "./productos.js";
const contentCarrito = JSON.parse(localStorage.getItem("productCart"));

const main = document.getElementById("mainCarrito");
const divMain = document.createElement("div");
divMain.className = "cartContent";
main.appendChild(divMain);

function mostrarCarrito() {
  divMain.innerHTML = "";
  contentCarrito.forEach((product) => {
    divMain.innerHTML += `
    <div class="cart-product">
        <header>
            <img width="300px" height="300px" src=${product.image}>
            <h3>${product.name}</h3>
            <small>${product.price}usd</small>
        </header>
            <small>Cantidad: ${product.cantidad}</small>
        <footer>
            <button class="suma" id="${product.product_id}">➕</button>
            <button class="resta" id="${product.product_id}">➖</button>
        </footer>
    </div>
    `;
  });
  let btnSumar = document.getElementsByClassName("suma");
  for (const elemento of btnSumar) elemento.addEventListener("click", (e) => {
      modificarCantidad(e);
    });
  
  let btnRestar = document.getElementsByClassName("resta");
  for (const elemento of btnRestar) elemento.addEventListener("click", (e) => {
      modificarCantidad(e);
    });
  
}

function modificarCantidad(e) {
  if (e.target.className === "suma") {
    let encontrado = contentCarrito.find(
      (producto) => e.target.id === producto.product_id
    );
    ++encontrado.cantidad;
  } else {
    let encontrado = contentCarrito.find(
      (producto) => e.target.id === producto.product_id
    );
    if (encontrado.cantidad > 1) --encontrado.cantidad;
  }
  mostrarCarrito();
}

mostrarCarrito();
cartCounter();
