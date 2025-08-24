let productos = fetch("../data/Productos.JSON").then((res) => res.json());

const main = document.getElementById("main");
const section = document.createElement("section");

productos.then(({ productos }) => {
  console.log(productos);
  productos.slice(0, 12).forEach((producto) => {
    section.innerHTML += `
    <div>
        <img width="100px" heigth="100px" src=${producto.image}>
        <h3>${producto.name}</h3>
        <small>${producto.price}usd</small>
        <button id="${producto.product_id}">ver producto</button>
    </div>`;
    main.appendChild(section);
  });
});
