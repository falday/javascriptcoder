//guarda los elemenos del carrito el storage
const carrito = JSON.parse(localStorage.getItem('carrito')) ?? [];
document.getElementById("totalCart").innerHTML = carrito.length

//base de datos 

let productos = []

const jsonProductos = async () =>{
const response = await fetch("js/productos.json")
const info = await response.json()
productos = info
cardsDinamicas ()
btnAgregarCart ()
}
jsonProductos()

function cardsDinamicas (){
productos.forEach ((producto) => {
    const addCartId = `add-cart${producto.id}`
    document.getElementById("seccion-card").innerHTML += `<div class="col mb-5">
    <div class="card h-100">
        <img class="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${producto.title}</h5>
                
                ${producto.price}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><a class="btn btn-outline-dark mt-auto" id= "${addCartId}" >Add to cart</a></div>
        </div>
    </div>
</div> `
})
}
// Boton para agregar los productos al carrito
function btnAgregarCart (){

productos.forEach ((producto) => {
  const addCartId = `add-cart${producto.id}`
  document.getElementById(addCartId).onclick = () => {
    if (producto.cantidad === 0){
      carrito.push(producto)
      producto.cantidad ++
    }else {
      producto.cantidad ++
    }
      
      document.getElementById("totalCart").innerHTML = carrito.length
      localStorage.setItem("carrito", JSON.stringify(carrito))
      console.log(carrito)
        }
})
}

//genera las cards agregadas en el carrito de compra
function carritoCompra(){
  localStorage.setItem("carrito" , JSON.stringify(carrito))
  pedro.innerHTML = ""
  totalCart.innerHTML = carrito.length
    carrito.forEach((producto) => {
        document.getElementById("pedro").innerHTML += `<div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-row align-items-center">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;">
            </div>
            <div class="ms-3">
              <h5>${producto.title}</h5>
              
            </div>
          </div>
          <div class="d-flex flex-row align-items-center">
            <div style="width: 50px;">
              <h5 class="fw-normal mb-0">${producto.cantidad}</h5>
            </div>
            <div style="width: 80px;">
              <h5 class="mb-0">${producto.price * producto.cantidad}</h5>
            </div>
            <button><a  style="color: black;" onclick="eliminarDelCarrito(${producto.id})" <i></i>X</a></button>
          </div>
        </div>
      </div>`
    })
}

//elimina productos del carrito

function eliminarDelCarrito(productoId) {
    const prod = carrito.find((producto) => producto.id == productoId)
    let i = carrito.indexOf(prod)
    if (i != -1 ) {
    if(prod.cantidad <= 1){
      carrito.splice(i, 1)
    }else {
      carrito[i].cantidad--
    }

  }
    carrito.reduce((total, producto) => total + producto.price, 0)
    
    carritoCompra()
    
}

function compraRealiza(){
  Swal.fire({
    icon: 'success',
    title: 'Su compra se realizo con exito !',
    showConfirmButton: false,
    timer: 1500
  })
}

console.log(...carrito)



