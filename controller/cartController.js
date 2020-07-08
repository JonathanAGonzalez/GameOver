let db = require("../database/models");
let sequelize = db.sequelize;

let cartController = {
    index: function(req,res,next){

        res.send('cart')
    },
    add: function(req,res,next){
        //console.log("User id " + req.session.user.id)
        db.Game.findByPk(req.params.id)   
        
        .then((comprado) => {
            db.Cart.create({
                state: "ACTIVO",
                date: Date.now(),
                user_id: req.session.user.id,
                total: 0
            }).then(nuevoCarrito =>{
                console.log(comprado.price)
                //console.log(nuevoCarrito.id)
            db.Cart_Game.create({
                cart_id: nuevoCarrito.id,
                game_id: comprado.id,
                price: comprado.price,
                quantity: 1
            }).then(carritoActivo =>{
                console.log(carritoActivo)
                res.render('cart', {comprado:comprado,carrito:nuevoCarrito,carritoActivo:carritoActivo})
            })
                
            })
        })
           
        }
    }

module.exports = cartController;
