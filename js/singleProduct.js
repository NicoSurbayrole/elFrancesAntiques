import {cartCounter} from "./productos.js";

let productId = localStorage.getItem("productId");
console.log(productId);
const productos = fetch("../data/Productos.JSON").then((res) => res.json());

let singelProductMain = document.getElementById("mainSingleProduct");

const section = document.createElement("section");

function showSingleProduct() {
  productos.then(({ productos }) => {
    productos.forEach((producto) => {
      if (producto.product_id === productId) {
        section.innerHTML += `
            <div>
                <img width="300px" height="300px" src=${producto.image}>
                <header>
                    <h2>${producto.name}</h2>
                </header>
                <article id="singleProduct-description">
                    <p>${producto.description}</p>
                    <small>${producto.price}</small>
                </article>
            </div>
            `;
        console.log(productId, producto.product_id);
        singelProductMain.appendChild(section);
        return;
      }
    });
    const article = document.getElementById("singleProduct-description");
    addToCart(article);
  });
}
let cart;

function addToCart(article) {
  if (!localStorage.getItem("productCart")) {
    localStorage.setItem("productCart", JSON.stringify([]));
  }
  const addCartBtn = document.createElement("button");
  addCartBtn.innerHTML = "agregar al carrito";
  addCartBtn.className = "addToCart";
  addCartBtn.id = localStorage.getItem("productId");
  addCartBtn.addEventListener("click", (e) => {
    productos.then(({ productos }) =>{
        productos.forEach((producto) => {
          if (producto.product_id === e.target.id) {
            cart = JSON.parse(localStorage.getItem("productCart"));
            if(cart.length === 0){
              cart.push(producto);
              localStorage.setItem("productCart", JSON.stringify(cart))  
            }else{
              let buscado = cart.find((serch) => serch.product_id === producto.product_id)
             if(buscado){
              console.log("El producto ya esta en el carrito");
             }else{
              cart.push(producto);
              localStorage.setItem("productCart", JSON.stringify(cart))
              console.log("El producto fue agregado correctamente");
             }
            }
            return;
          }
        })
      }
    );
    cartCounter();
    setTimeout(()=>{
      location.reload();
    },800);
  });
  
  console.log(article);
  article.appendChild(addCartBtn);
}

showSingleProduct();
cartCounter();