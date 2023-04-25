
const $btnSignIn = document.querySelector('.sign-in-btn'),
$btnSignUp = document.querySelector('.sign-up-btn'),
$signUp = document.querySelector('.sign-up'),
$signIn = document.querySelector('.sign-in');

document.addEventListener('click', e => {
if (e.target === $btnSignIn || e.target === $btnSignUp) {
  $signIn.classList.toggle('active');
  $signUp.classList.toggle('active')
}
});
function registrate(){
var nombre = document.getElementById("nombre").value;
var email = document.getElementById("email").value;
var contraseña = document.getElementById("contraseña").value;

//Guardamos en el local storage
localStorage.setItem("name", nombre);
localStorage.setItem("email", email);
localStorage.setItem("contraseña", contraseña);
if (nombre == "") {
  alert("completar campos");
} else if (email == "") {
  alert("completar campos");
} else if (contraseña == "") {
  alert("completar campos");
} else {
  alert("Registro exitoso!");

}

}
function iniciarSesion(){
var emailS = document.getElementById("email").value;
var contraseñaS = document.getElementById("contraseñaS").value;

//Traemos los elementos del LocalStorage
var email = localStorage.getItem("email");
var contraseña = localStorage.getItem("contraseña");
if (email == email) {
  if (contraseñaS == contraseña) {
    alert("Bienvenid@ al maravilloso World Disney!"); document.getElementById("btnInicioSesion").href = "Presentacion.html";
  }
}
} 

