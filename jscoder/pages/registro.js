/*!
 * Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

/*Ferreteria Industrial, */

class usuario {
    constructor(nombre, email, clave, ) {
        this.nombre = nombre;
        this.email = email;
        this.clave = clave;
    }
}
let usuario1 = new usuario("hola", "hola@mail.com", "123")
const usuarios = [usuario1, ]



const usuarioLogin = document.getElementById("nombre");
const pasLogin = document.getElementById("password");

/*   usuarioLogin.oninput = () =>{console.log(usuarioLogin.value);
  }
  pasLogin.oninput = () =>{console.log(pasLogin.value);
  } */

function inciarSesion() {
    usuarios.forEach((usuario) => {
            let Nusario = usuarios.findIndex(e => usuarioLogin.value == usuario.nombre)
            if (Nusario !== -1) {
                console.log(usuario.email);
                if (usuario.clave === pasLogin.value) {
                   /*  Swal.fire({
                        title: `HOLA ${usuario.nombre}`,
                        icon: 'success',
                    }); */
                    document.getElementById("inciarSesion").innerHTML = ''
                    setTimeout(() => {
                        Swal.fire({
                            title: `HOLA ${usuario.nombre}`,
                            icon: 'success',
                        });
                    }, 1000)
                }
                 else {
                   /*  swal.fire("Los datos ingresado no son correctos", "Intenta nuevamente", "error");
                     }, 2000); */
                    document.getElementById("inciarSesion").innerHTML = ''
                    setTimeout(() => {
                        swal.fire("Los datos ingresado no son correctos", "Intenta nuevamente", "error");
                    }, 2000);
                }
            }
            else {
               /*  swal.fire("Los datos ingresado no son correctos", "Intenta nuevamente", "error");
                     }, 2000); */
                document.getElementById("inciarSesion").innerHTML = ''
                  setTimeout(() => {
                    swal.fire("Los datos ingresado no son correctos", "Intenta nuevamente", "error");
                     }, 2000);
                 }
})
}


function registro() {
    document.getElementById("inciarSesion").innerHTML = ''
    document.getElementById("inciarSesion").innerHTML += ` <h1> Complete el formulario de registro para poder inciar Sesion</h1>
<div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Nombre Usuario</label>
                      <input type="text" class="form-control" id="usurioRegis" aria-describedby="emailHelp">
                    
                    <label for="exampleInputEmail1" class="form-label">Ingrese su correo electronico</label>
                    <input type="mail" class="form-control" id="mailRegis" aria-describedby="emailHelp">
                  
                      <label for="exampleInputPassword1" class="form-label">Password</label>
                      <input type="password" class="form-lacel" id="pasRegis">
                    </div>
                    <a class="bg-success text-white rounded " onclick="guardarNusuario">Cofirmar</a>`

                                     
                    
                   
}
function guardarNusuario (){

    /*    let usuario = document.getElementById("nobre").value
   nombre, email, clave */
   const usuarioRegistro =document.getElementById("usurioRegis");
                    const mailRegistro = document.getElementById("mailRegis");
                    const pasRegistro = document.getElementById("pasRegis");   
   let nuevoUsuario = new usuario(usuarioRegistro.value, mailRegistro.value, pasRegistro.value,);
   usuarios.push(nuevoUsuario);
   console.log(usuarios)
   document.getElementById("inciarSesion").innerHTML = ''
                  setTimeout(() => {
                    swal.fire("se regitro correctamente", 'success');
                     }, 2000);
   
   }