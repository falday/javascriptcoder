/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*Ferreteria Industrial, */

let inventario = [];
let dolar = 270;
const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
const mostrarCarrito =JSON.parse(localStorage.getItem('mostrarCarrito'))


function tipoCambio() {
  let dolarCompra;
  const URLDOLAR = "https://api.bluelytics.com.ar/v2/latest";
  fetch(URLDOLAR)
    .then(respuesta => respuesta.json())
    .then(cotizaciones => {
      const dolarBlue = cotizaciones.blue;
      dolarCompra = dolarBlue.value_buy;
      if ((dolar * 1.1) < dolarCompra) {
        dolar = dolarCompra
      } else {
        if (dolarCompra < dolar) {
          dolar = dolarCompra
        }
      }
      basedatosProd();
    })
    //catch del fetch
    .catch(error => console.log("error"))
}

tipoCambio()

async function basedatosProd() {
  const URLJSON = "productos.json";
  const resp = await fetch(URLJSON);
  const data = await resp.json();
  inventario = data;
  todosLosProductos();
  imprimirCarrito();
}


function todosLosProductos() {
  document.getElementById("seccion-card").innerHTML = ''
  inventario.forEach(el => {
    if (el.stock > 0) {
      const idButton = `add-cart${el.codigo}`
      let cards = document.getElementById("seccion-card").innerHTML += `
 <div class="col mb-5">
 <div class="col mb-5">
 <div class="card h-100">

     <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    
     <img class=""img-fluid"  height= "120px" src="${el.img}" alt="..." />
   
     <div class="card-body p-4">
         <div class="text-center">
           
             <h5 class="fw-bolder">${el.nombre.toUpperCase()}</h5>

                <div class="modal-dialog modal-dialog-centered">
                ${el.descripcion}
                </div>


<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

</div>
             <span class="text-decoration">$${el.precio * dolar}</span>
            
         </div>
     </div>
     
     <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
         <div class="text-center"> <a  class="boton btn btn-outline-dark mt-auto" id="${idButton}">Añadir a Carrito</a></div></div></div></div>
     </div>
 </div>`
    }
  });
  carro(inventario);
}

function categoriasProductos(catego) {
  document.getElementById("seccion-card").innerHTML = "";
  const categorias = inventario.filter((producto) => producto.rubro === catego);

  categorias.forEach(el => {
    const idButton = `add-cart${el.codigo}`
    let cards = document.getElementById("seccion-card").innerHTML += `
 <div class="col mb-5">
 <div class="col mb-5">
 <div class="card h-100">

     <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    
     <img class=""img-fluid"  height= "120px" src="${el.img}" alt="..." />
   
     <div class="card-body p-4">
         <div class="text-center">
           
             <h5 class="fw-bolder">${el.nombre.toUpperCase()}</h5>

                <div class="modal-dialog modal-dialog-centered">
                ${el.descripcion}
                </div> 

<div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">

</div>
             <span class="text-decoration">$${el.precio}</span>
            
         </div>
     </div>
     
     <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
     
         <div class="text-center">
         <a  class="boton btn btn-outline-dark mt-auto" id=${idButton}>Añadir a Carrito</a></div>
         
     </div>
     </div
 </div>`

  });
  carro(categorias)

}


function carro(parametro) {


  parametro.forEach((Npieza) => {

    const idButton = `add-cart${Npieza.codigo}`
    document.getElementById(idButton).onclick = () => {
      let index = carrito.findIndex(e => e.codigo == Npieza.codigo);
      let producto = carrito[index]

      if (index !== -1) {
        if (Npieza.stock >= producto.cantidad) {
          if (Npieza.stock == producto.cantidad) { swal.fire("El produto ya no se encuentra disponible", "Intenta en una cantidad menor", "error"); }
          else {
            Npieza.cantidad = Npieza.cantidad + 1;
            alertAgregado();
          }
        }
      }
      else {
        Npieza.cantidad = 1;
        carrito.push(Npieza);
        alertAgregado();
      }

      function alertAgregado() {
        Swal.fire({
          title: `Agregaste al carrito`,
          text: `${Npieza.nombre.toUpperCase()} Cantidad ${Npieza.cantidad}`,
          imageUrl: Npieza.img,
          imageWidth: 200,
          imageHeight: 200,
          imageAlt: Npieza.descripcion,
          showConfirmButton: false,
          timer: 1000
        })
      }


      localStorage.setItem("carrito", JSON.stringify(carrito));
      imprimirCarrito()
      generarCardsCarrito()


    }

  })
};


function imprimirCarrito() {
  const totalCarrito = carrito.reduce((contador, Npieza) => contador + (Npieza.precio * dolar) * Npieza.cantidad, 0);
  document.getElementById("cart-total").innerHTML = carrito.length + " - $" + Number(totalCarrito)
mostrarCarrito= carrito.length + " - $" + Number(totalCarrito);
  localStorage.setItem("mostrarCarrito", JSON.stringify(mostrarCarrito))
}

function generarCardsCarrito() {

  document.getElementById("cards-modal").innerHTML = '';
  carrito.forEach((Npieza) => {
    const deleteButton = `borrar${Npieza.codigo}`;
    const cantD = `cantD${Npieza.codigo}`;
    const cantUp = `cantUp${Npieza.codigo}`;
    document.getElementById("cards-modal").innerHTML += `
        <div class="card d-flex flex-row">
        <div class="d-flex flex-row"><img src="${Npieza.img}" width="80px" style="height:80px" ></div>
        <div class="d-flex flex-column card-body">
            <h3  class="fs-5">${Npieza.nombre.toUpperCase()}
              : $${(Npieza.precio * dolar)}</h3>
            - Stock: ${Npieza.stock}
            <div>
            - CANTIDAD:
             <button  id=${cantD}class="bg-danger text-white  rounded btn-xs"  > - </button>
             ${Npieza.cantidad}
            <button id=${cantUp} class="bg-success text-white rounded btn">
            + </button>
            </div>
            <h3  class="fs-5">Total: $${Npieza.precio * dolar * Npieza.cantidad}</h3>
          <div> <button  id=${deleteButton} type="button" class="bg-danger text-white btn" data-bs-dismiss="modal" >Quitar</button>
          

</div>`


  }

  )
  eliminaritem();

}

function eliminaritem() {

  carrito.forEach((Npieza) => {
    const deleteButton = `borrar${Npieza.codigo}`;
    const cantD = `cantD${Npieza.codigo}`;

     document.getElementById(deleteButton).onclick = () => {
      let item = carrito.find(e => e.codigo == Npieza.codigo);
      let index = carrito.indexOf(item)
      carrito.splice(index, 1);
      imprimirCarrito()
      generarCardsCarrito()
      localStorage.setItem("carrito", JSON.stringify(carrito)) 
    } 
  
   /*  document.getElementById(cantD).onclick = () => {
      let item = carrito.find(e => e.codigo == Npieza.codigo);
        let index = carrito.indexOf(item);
        let car=carrito[index];
      if(car.cantidad < 1){
        producto.cantidad = producto.cantidad-1;
      }
      else{carrito.splice(index, 1);}
      imprimirCarrito()
      generarCardsCarrito()
      localStorage.setItem("carrito", JSON.stringify(carrito))
    }  */
  })
}

/*  function menosCantidad() {

  /* carrito.forEach((Npieza) => {
    const cantD = `cantD${Npieza.codigo}`;
    /* const cantUp = `cantUp${Npieza.codigo}`;  

  document.getElementById(cantD).onclick = () => {
    let item = carrito.find(e => e.codigo == Npieza.codigo);
      let index = carrito.indexOf(item);
      let producto=carrito[index];
    if(producto.cantidad < 1){
      producto.cantidad = producto.cantidad-1;
    }
    else{carrito.splice(index, 1);}
    imprimirCarrito()
    generarCardsCarrito()
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }})
 
} */

function vaciarCarrito() {
  localStorage.removeItem("carrito", JSON.stringify(carrito));
  window.location.reload()
  carro();
}

function comprar() {

  if (carrito.length == 0) {
    Swal.fire({
      title: 'El carrito está vacío',
      text: 'selecione algun producto',
      icon: 'error',
      showConfirmButton: false,
    })
  }
  else {
    const totalCarrito = carrito.reduce((contador, Npieza) => contador + (Npieza.precio * dolar) * Npieza.cantidad, 0);
     Swal.fire({
      title: 'Estamos validando su compra',
      text: `El Total a pagar es de $${totalCarrito}`,
      icon: 'success',
      showConfirmButton: false,
      timer: 2500
    })  
    setTimeout(() => {
      vaciarCarrito()
    }, 2000)
   
} 

}