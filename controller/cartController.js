let db = require("../database/models");
let sequelize = db.sequelize;

let cartController = {
    index: function(req,res,next){
        db.Cart.findAll({
            where:{
                user_id:req.session.user.id,
                state: 'ACTIVO'
            }}).then(cartExists=>{
                if (Array.isArray(cartExists) && !cartExists.length){
                    res.send('carrito vacio')
                }else{
                    db.Cart_Game.findAll({
                        where:{
                            cart_id: cartExists[0].id 
                        },
                        include: [
                            {association: "games"}
                        ]
                    }).then(cartGameLista=>{
                        res.render('cart', {carrito:cartExists[0], cartGameLista:cartGameLista})                    
                    })                    
                }
            })

    },
    add: function(req,res,next){
        //console.log("User id " + req.session.user.id)
        db.Game.findByPk(req.params.id)         
        .then(producto => {
            console.log(producto)
            if(producto==null){
                res.send("producto inexistente")
            }
            db.Cart.findAll({
                where:{
                    user_id:req.session.user.id,
                    state: 'ACTIVO'
                }}).then(cartExists=>{
                    if (Array.isArray(cartExists) && !cartExists.length){
                        //console.log("carrito vacío")
                        db.Cart.create({
                            state: "ACTIVO",
                            date: Date.now(),
                            user_id: req.session.user.id,
                            total: 0
                        }).then(cartCreation=>{
                            //console.log(cartExists.id)
                            //console.log(producto.id)
                            //console.log(cartCreation)
                            db.Cart_Game.create({
                                cart_id: cartCreation.id,
                                game_id: producto.id,
                                price: producto.price,
                                quantity: 1
                            }).then(addCartGameItem=>{
                                console.log("total= "+ producto.price)
                                db.Cart.update({
                                    total: producto.price
                                }, {
                                    where: {
                                        id: cartCreation.id
                                    }
                                }).then(cartUpdate=>{
                                    db.Cart.findByPk(cartCreation.id)
                                .then(bringCartAgain=>{
                                    db.Cart_Game.findAll({
                                        where:{
                                            cart_id: cartCreation.id 
                                        },
                                        include: [
                                            {association: "games"}
                                        ]
                                    }).then(cartGameLista=>{
                                        res.render('cart', {carrito:bringCartAgain, cartGameLista:cartGameLista})                    
                                    })
                                }) 
                                })  
                            })                            
                        })
                    } else {
                        //console.log(cartExists)
                        //console.log(cartExists[0].id)
                        //console.log(cartExists.length)
                        //console.log("carrito existente")
                        db.Cart_Game.create({
                            cart_id: cartExists[0].id,
                            game_id: producto.id,
                            price: producto.price,
                            quantity: 1
                        }).then(addCartGameItem=>{
                            //console.log("total")
                            //console.log("cart_total: " + cartExists[0].total)
                            //console.log("producto_price: " + producto.price)
                            var total_nuevo=cartExists[0].total+ producto.price
                            //console.log("total_nuevo= "+total_nuevo)
                            db.Cart.update({
                                total: total_nuevo
                            }, {
                                where: {
                                    id: cartExists[0].id
                                }
                            }).then(cartUpdate=>{
                                db.Cart.findByPk(cartExists[0].id)                                
                            .then(bringCartAgain=>{
                                //console.log(bringCartAgain)
                            db.Cart_Game.findAll({
                                where:{
                                    cart_id: cartExists[0].id 
                                },
                                include: [
                                    {association: "games"}
                                ]
                            }).then(cartGameLista=>{
                                res.render('cart', {carrito:bringCartAgain, cartGameLista:cartGameLista})                           
                            })
                        })  
                    })
                })
                }
            })
        })

    },
    delete: function(req,res,next){
        db.Cart_Game.findByPk(req.params.id)
        
        .then(cartGameId =>{
        console.log(cartGameId)

        db.Cart.findByPk(cartGameId.cart_id)

        .then(cart =>{

            let newCartTotal = cart.total - cartGameId.price
           
        db.Cart.update({
            total: newCartTotal
        },{
            where: {
            id:cart.id
        }})

        .then(cartUpdate =>{

        })
        
        db.Cart_Game.destroy({

            where: {
                id: req.params.id
            }

        }).then(eliminado =>{
            res.redirect("/cart");
        })
    })
})
}
}

module.exports = cartController;
