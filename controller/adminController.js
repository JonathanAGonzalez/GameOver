const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const sequelize = db.sequelize;

controller = {
  //ADMIN
  admin: function (req, res, next) {
    db.User.findAll()
    .then(usuarios => {
      //console.log(usuarios)
      res.render('admin',{usuarios  
      });
    })  
  },
  //EDITAR PERFIL VISTA
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
  detailPerfilEdit: (req,res,next)=>{
    db.User.findByPk(req.params.id)
    .then((userToEdit) => {
      res.render('editUser',{
        userToEdit
      })
    }).catch((err) => {
      console.log(err)
    });
  },
  //EDITAR PERFIL PROCESO
  processEditPerfil: (req, res, next) => {
    //console.log(req.body.first_name,req.files[0].filename, req.body.last_name,req.body.password,req.body.state,req.body.admin)
    db.User.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password,
        avatar: req.files[0].filename,
        state: req.body.state,
        admin: req.body.admin
    },{
        where: {
            id: req.params.id
        }
    });
    req.session.destroy()
    res.redirect("/"); 
  },
//CAMBIAR ESTADO DE USUARIO
  borrarProducts:function(req,res,next){
  db.Game.findAll()
  .then((games) => {
    db.Section.findAll()
    .then(section=>{
      res.render('deleteProducts',{games,section})
    })
  }).catch((err) => {
    console.log(err)
  });
  },
  //PRODUCTOS LISTADOS
  listarProducts: (req,res,next)=>{
  db.Game.findAll()
  .then((games) => {
    db.Section.findAll()
    .then(section=>{
      res.render('editProducts',{games,section})
    })
  }).catch((err) => {
    console.log(err)
  });
  
  },
  //CAMBIAR ESTADO DE USUARIO
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
  //LISTAR USUARIOS
  usersEdit:function(req,res,next){
    db.User.findAll()
    .then((users) => {
      res.render('usersEdit',{users})
    }).catch((err) => {
      console.log(err)
    });
  },
  usersDelete:function(req,res,next){
    db.User.findAll()
    .then((users) => {
      res.render('usersDelete',{users})
    }).catch((err) => {
      console.log(err)
    });
  },
  usersUpdate:function(req,res,next){
    db.User.update({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      /* avatar: req.files[0].filename, */
      state: req.body.state,
      admin: req.body.admin
  }, {
      where: {
          id: req.params.id
      }
  });
  console.log(req.body);
  res.redirect("/admin/usersDelete");
  },

//LISTAR CARRITOS
listarCarts: function(req,res,next){
  db.Cart.findAll({
      
    include: [
      {association: "users"}
  ]
  })
  
  .then(carts => {
    
    db.User.findAll()

    .then(users =>{
    
      res.render('cartsList',{carts})
  
  })
  .catch((err) => {
    console.log(err)
  })
  
  })
},

//BORRAR CARRITO
}

module.exports = controller;