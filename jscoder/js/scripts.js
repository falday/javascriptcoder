/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*Ferreteria Industrial, */

class Producto {
    constructor(codigo, nombre, descripcion, precio, stock, img) {
      this.codigo = codigo;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.stock = stock;
      this.img = img;
    }
  }

  let producto1 = new Producto(1, "destornillador", "largo= 4pulg ancho= 6mm", 830, 100, 1);
  let producto2 = new Producto(2,"espatula", "Pintor 2pulg" , 350, 120, 1);
  let producto3 = new Producto(3, "alicate", "Corte digonal ", 1500, 1, 1);
  let producto4 = new Producto(4, "cinta metrica", "3M con protecion anti-desgaste", 500, 240, 1);

  const inventario = [producto1, producto2, producto3, producto4];
  
  

  todosLosProductos();
  function todosLosProductos() {
    document.getElementById("seccion-card").innerHTML = ''
    inventario.forEach(el => {
      if(el.stock > 0 )
      
      {
        const idButton = `add-cart${el.codigo}`
        let cards = document.getElementById("seccion-card").innerHTML += `
 <div class="col mb-5">
 <div class="col mb-5">
 <div class="card h-100">

     <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">Sale</div>
    
     <img class="card-img-top img-fluid" height=150px  src="${el.img}" alt="..." />
   
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
         <div class="text-center"> <a  class="boton btn btn-outline-dark mt-auto" id="${idButton}">Añadir a Carrito</a></div></div></div></div>
     </div>
 </div>`
    }});

}


function operacion() {
  let opcion = parseInt(
    prompt(
      "Ingrese su operacion :\n1)Agregar un producto\n2)Ver productos\n3)Salir"
    )
  );
  while (opcion !== 3) {
    switch (opcion) {
      case 1:
        agregarProducto();
        break;
      case 2:
        verProductos();
        break;
    }
    opcion = parseInt(
      prompt(
        "Ingrese su operacion :\n1)Agregar un producto\n2)Ver productos\n3)Salir"
      )
    );
  }
}

/*   operacion();  */

/*  function agregarProducto() {
  let codigo = prompt("ingrese el codigo")
  let nombre = prompt("Nombre del producto: ");
  let precio = parseInt(prompt("Precio del producto:"));
  let stock = parseInt(prompt(" Ingrese stock : "));

  let nuevoProd = new Producto(codigo, nombre, precio, stock);

  inventario.push(nuevoProd);
} */




  function verProductos() {
    
  
    inventario.forEach((producto) => {
      alert(
        "-" +
          producto.nombre.toUpperCase() +
          "-Precio Unitario:" +
          producto.precio +
          ".Stock:" +
          producto.stock +
          "\n"
      );
    });
  }
  
 