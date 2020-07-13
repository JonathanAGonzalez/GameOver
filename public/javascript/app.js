var formulario = document.querySelector('#editUser');
var btnEnviar = document.querySelector('#enviar');
var front = document.querySelector('.front');






btnEnviar.addEventListener("click",function(event){
  let errores=[];
    if(formulario[0].value == "" || formulario[0].value == null){
      errores.push('❗<p>El campo Nombre esta vacio❗</p>');
    }
           if(formulario[1].value == "" || formulario[1].value == null){
            errores.push('<p>❗El campo Apellido esta vacio❗</p>')
         }
         if (errores.length > 0) {
           event.preventDefault();
           errores.forEach((erroress) => {
             front.innerHTML += erroress;
           });
         }    
})


console.log(formulario)
console.log(front)









