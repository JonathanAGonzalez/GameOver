const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const sequelize = db.sequelize;



controller ={
    index: function(req, res, next) {
      // Do the magic
      
      /* let recomendados = products.filter(function(element) {
        return element.section == "Recomendados";
        });
        let vendidos = products.filter(function(element) {
        return element.section == "Vendidos";
        });
        let ofertas = products.filter(function(element) {
        return element.section == "Ofertas";
        });
        let admin = usersJSON.filter(function(element) {
          return element.admin == "admin";
          });
        console.log("logueadoAutomatico: "+ req.cookies.logueadoAutomatico) // Cookie creada en usersController/login
        res.render('index', {
        recomendados: recomendados,
        vendidos: vendidos,
        ofertas: ofertas,
        aMiles: toThousand,
        logeadoUser:req.session.logged,
        users:usersJSON,
        admin:admin
      }); */

      db.Game.findAll({where:{
        section_id:1
      }})

      .then((recomendados) => {


        db.Distributor.findAll()

        .then((distributor)=>{
          
           db.Platform.findAll()

           .then(plataformas=>{

            res.render('index',{recomendados,distributor,plataformas})

           })
          

        })
        
      }).catch((err) => {
        console.log(err)
      });
      
      

    }
}

module.exports = controller;