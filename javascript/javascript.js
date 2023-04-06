"use strict"

let recargarcaptcha = document.querySelector("#reload");
reload.addEventListener("click", fun1);


//PARA EL CAPTCHA
function fun1() {
    let no = "1234567890ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijqmnopqrstuvwxyz";
    let x = no[Math.floor(Math.random() * no.length)];
    for (var i = 0; i < 4; i++) {
        x = x + no[Math.floor(Math.random() * no.length)];
    }
    formulariologin.textcaptcha.value = x;
}
window.onload = fun1;

//PARA EL INICIO 
let iniciarsesion = document.querySelector("#botoninicio");
botoninicio.addEventListener("click", verificar);

function verificar() {
    let nombre = document.querySelector("#nombredeusuario").value;
    let contrasena = document.querySelector("#contrasena").value;
    let textcaptcha = document.querySelector("#textcaptcha").value;
    let introducircaptcha = document.querySelector("#introducircaptcha").value;
    if ((textcaptcha === introducircaptcha) && (nombre.length >= 5) && (contrasena.length >= 5)) {
        window.open("paginaprincipal.html")
    } else {
        alert("Todos los campos son obligatorio y con captcha introducido correctamente. Recuerda que el minimo de caracteres es 5! ")
    }


}