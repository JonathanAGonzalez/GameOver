var formulario = document.querySelector('#editUser');
var btnEnviar = document.querySelector('#enviar');
var front = document.querySelector('.front');





btnEnviar.addEventListener("click",function(event){
    event.preventDefault()
    if(formulario[0].value == "" || formulario[0].value == null){
       front.innerHTML = '<div clas="modal">❗El campo Nombre esta vacio❗</div>'
       if(formulario[1].value == "" || formulario[1].value == null){
        front.innerHTML = '<p>❗El campo Apellido esta vacio❗</p>'
     }
    }
    
     
})

console.log(formulario)
console.log(front)









