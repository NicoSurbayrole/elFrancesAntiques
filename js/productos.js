const productos = fetch("../data/Productos.JSON").then((res) => res.json());

const main = document.getElementById("main");

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

mostrarProductos()

function mostrarProductos() {
  productos.then(({ productos }) => {
  const section = document.createElement("section");
   section.className = "cardsContain"
  productos.slice(0, 12).forEach((producto) => {
    section.innerHTML += `
    <div class="cardInfo">
      <img src=${producto.image}>
      <header class="cardHeader"> 
        <h3 class="productName">${producto.name}</h3>
        <small>${producto.price}usd</small>
        </header>
      <footer class="cardFooter">
        <button class="cardButton" id="${producto.product_id}">ver producto</button>
      </footer> 
    </div>`;
    divMain.appendChild(section);
  });
  singleProduct()
});
}

function singleProduct(){
    let button = document.getElementsByClassName("cardButton")
    localStorage.removeItem("productId")
  
  //la idea despues es que el id renderice ese elemento unico y hacerle una vista detallada
  for(let i = 0; i < button.length; i++){
    button[i].addEventListener("click", () =>{
    localStorage.setItem("productId", button[i].id)
    window.location.assign(`../pages/producto.html`)
    console.log(`seleccionaste el elemento con el id: ${button[i].id}`)
    })
  }
}

