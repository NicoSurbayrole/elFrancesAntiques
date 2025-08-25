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
                <article>
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
  });
}
showSingleProduct();
