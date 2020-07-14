var nombre = document.querySelector("#name");
var description = document.querySelector("#description");
var video = document.querySelector("#video");
var discount = document.querySelector("#discount");
var date = document.querySelector("#date");
var ageClasification = document.querySelector("#age_clasification");
var price = document.querySelector("#price");
var date = document.querySelector("#release_date");
var category = document.querySelector("#category_id");
var distributor = document.querySelector("#distributor_id");
var category = document.querySelector("#category_id");
var image = document.querySelector("#image");




var formulario = document.querySelector("#validatorProduct");


formulario.addEventListener("submit", function (e) {
  
  let errores = [];
  if (nombre.value == "") {
    errores.push("Porfavor ingresa un nombre de producto");
  }
  if (description.value == "") {
    errores.push("Porfavor ingresa una descripcion");
  }
  if (video.value == "") {
    errores.push("Porfavor ingresa un video");
  }
  if (discount.value == "") {
    errores.push("Porfavor ingresa un descuento");
  }
  if (ageClasification.value == "") {
    errores.push("Porfavor ingresa una clasificacion de edad");
  }
  if (price.value == "") {
    errores.push("Porfavor ingresa un precio");
  }
  if (date.value == "") {
    errores.push("Porfavor ingresa una fecha");
  }
  if (category.value == "") {
    errores.push("Porfavor ingresa una categoria");
  }
  if (image.value == "") {
    errores.push("Porfavor ingresa una image");
  }
  if(errores.length > 0){
    e.preventDefault();
    let ulErrores = document.querySelector("div.front ul")
    for (let i = 0; i < errores.length; i++) {
      ulErrores.innerHTML += "<li>" + errores[i] + "</div>"      
    }
  }
});