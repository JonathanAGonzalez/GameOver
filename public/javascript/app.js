const { link } = require("fs")

var activo = document.querySelectorAll(".activo")

console.log(activo)

activo.forEach(linkActivo =>{
    console.log(linkActivo)
    linkActivo.addEventListener('click',function(e){
        e.preventDefault()
        linkActivo.classList.toggle("activoA")
    })
})