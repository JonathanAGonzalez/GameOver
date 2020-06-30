const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
controller = {
  admin: function (req, res, next) {
    res.render('admin',{
      users:usersJSON,
    });
  },
  product: (req, res, next) => {
    res.render('addproduct',{
      users:usersJSON,
    })
  },
  addProduct: function (req, res, next) {
    let nuevoProducto = {}
    if (products == "") {
      nuevoProducto.id = 1
    } else {
      let ultimoProducto = products[products.length - 1]
      nuevoProducto.id = ultimoProducto.id + 1
    }

    nuevoProducto.name = req.body.name
    nuevoProducto.release_date = req.body.release_date
    nuevoProducto.age = req.body.age
    nuevoProducto.price = req.body.price
    nuevoProducto.category = req.body.category
    nuevoProducto.developer = req.body.developer
    nuevoProducto.distributor = req.body.distributor
    nuevoProducto.platform = req.body.platform
    nuevoProducto.section = req.body.section
    nuevoProducto.image = req.files[0].filename


    //res.send(nuevoProducto)
    products.push(nuevoProducto)

 
    res.redirect('/products')
  },
  editProduct: function (req, res, next) {
    res.render('editProduct', {
      
    });
  },
  detailEdit: (req, res, next) => {
    

    res.render('processEditProduct',{
     
    })
  },
  processEdit: (req, res, next) => {
    console.log(req.body.name)
    products.forEach(element=>{
			if(element.id==req.params.id){
				element.name=req.body.name
				element.release_date=req.body.release_date
				element.age=req.body.age
				element.price=req.body.price
				element.category=req.body.category
				element.developer=req.body.developer
				element.distributor=req.body.distributor
				element.platform=req.body.platform
        element.section=req.body.section
        element.image=req.body.image					
			}
		})
		
	
		
		res.redirect("/products");
  },
  deleteProduct:(req,res,next)=>{

    res.render('deleteProduct',{
      
    })
    console.log(products)
  },
  deleteProcess:(req,res)=>{
    
      
  }
}

module.exports = controller;