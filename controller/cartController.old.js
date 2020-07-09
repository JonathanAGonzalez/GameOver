let db = require("../database/models");
let sequelize = db.sequelize;

let cartController = {
    
//

    index: function(req,res){
        let cartNumber = 2;
        let usuario = req.session.user;
        console.log("user: " + usuario)

        db.Cart.findAll({
        include: [
            {association:"user"},
        ],
        where: {
            cartId: 2
        }})
    .then(function(data){
        res.render('cart',{data:data});
        })
    },

    buscarCarrito: function(req,res){

        db.cart.findByPk(req.session.cart).then(data =>{
            res.json({cart: data})
    })
    },

//agregar producto al carrito

    agregarProducto: function(req,res){
    
        let producto = req.body.game_id;
        let precio = req.body.price;
        let total = 0;
        let nombreProducto = req.body.name;
        console.log(nombreProducto.name)

        db.cart.findOne({
        where:{
            id:2
        }
        })
        .then(cart => {
            total = cart.precioTotal
            console.log("total "+total)
            let tempTotal = total;
            total = tempTotal + precio;
            console.log("total + precio "+total)

            cart.update({
                precioTotal:total,
                status: 'abierto'
            },{
                where:{
                id:2
            }
        })

            db.game_cart.create({
                carritoId: 2,
                gameId: game,
                cantidad: 1,
                precio: precio,
                subtotal: precio

        })
    
        .then(function(cart){
            db.game_cart.findAll({
                include: ['games'],
                where:{
                    carritoId:2
        }})
        .then(function(data){
            res.render('cart',{game_cart:data});
        })
        .catch(err =>{
            res.send('Hubo un error, inténtalo más tarde')
        })
    })

})  
},


//eliminar carrito

eliminarCarrito: function(req,res){
    let cartNumber = 2
    db.game_cart.destroy({
        where:{
            game_id: req.params.id,
            cart_id: cartNumber
    }})
    res.redirect('/cart');
    }
}

module.exports = cartController;
