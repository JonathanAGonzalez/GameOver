var nombre = document.querySelector("#first_name");
var apellido = document.querySelector("#last_name");
var avatar = document.querySelector("#file");
var contrasenia = document.querySelector("#password");
var formulario = document.querySelector("#editUser");
console.log(
  nombre.value + apellido.value + avatar.value + contrasenia.value + formulario
);

formulario.addEventListener("submit", function (e) {
  
  let errores = [];
  if (nombre.value == "") {
    errores.push("Porfavor ingresa un nombre");
  }
  if (apellido.value == "") {
    errores.push("Porfavor ingresa un apellido");
  }
  if (avatar.value == "") {
    errores.push("Porfavor ingresa un avatar");
  }
  if (contrasenia.value == "") {
    errores.push("Porfavor ingresa un contrasenia");
  }
  if(errores.length > 0){
    e.preventDefault();
    let ulErrores = document.querySelector("div.front ul")
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</div>"      
    }
  }
});
