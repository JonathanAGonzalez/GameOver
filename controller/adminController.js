const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const sequelize = db.sequelize;

controller = {
  admin: function (req, res, next) {
    db.User.findAll()
    .then(usuarios => {
      //console.log(usuarios)
      res.render('admin',{usuarios  
      });
    })  
  },
  editPerfil: (req,res,next) => {
    db.User.findOne({
      where: {
          id: req.params.id
      }
  }).then(usuario =>{
      console.log(usuario)
      res.render('admin',{usuario})
    });
  },
  processEditPerfil: (req, res, next) => {
    db.User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        avatar: req.files[0].filename,
        state: req.body.state
    },{
        where: {
            email: req.body.email
        }
    });
    res.redirect("/");
},
  borrarUsuario: function(req,res){
  db.User.update({
    state: req.body.state
  },{
      where: {
          id: req.params.id
      }
  })
  res.redirect("/productsdb");
},

}
//CONTROLADOR LISTAR CARRITOS
//BORRAR CARRITO

module.exports = controller;