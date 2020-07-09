const fs = require('fs');
const path = require('path');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const db = require('../database/models');
const sequelize = db.sequelize;



controller ={
    index: function(req, res, next) {
      const resultSearch =[];
      db.Game.findAll({where:{
        section_id:1
      }})

      .then((recomendados) => {

        db.Distributor.findAll()

        .then((distributor)=>{
          
           db.Platform.findAll()

           .then(plataformas=>{

            db.Game.findAll({where:{
              section_id:3
            }})

            .then(vendidos=>{

              db.Game.findAll({where:{
                section_id:2
              }})
              
              .then(ofertas =>{     
                res.render('index',{recomendados,distributor,plataformas,vendidos,ofertas})
              })

           
            })

           })
          

        })
        
      }).catch((err) => {
        console.log(err)
      });
      
      

    }
}

module.exports = controller;