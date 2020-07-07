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

                db.Game.findAll()

                .then((games) => {
                  games.forEach(juego => {
                    const gameFind = juego.name.toLowerCase();
                    console.log(gameFind)
                    if(gameFind.includes(req.query.search)){
                      resultSearch.push(juego)
                      console.log(resultSearch)
                    }                  
                  });
                 /* const juego = games.find(element =>{
                  return  element.name == req.query.search
                 }) */
                
                 res.render('index',{recomendados,distributor,plataformas,vendidos,ofertas,resultSearch})

                 /*
                  games.forEach(element => {
                    
                     if(element.name.includes(req.query.search)){
                    

                      resultSearch.push(element.name)
                      console.log('AAAAAAAAACAAAAAAAAAAAAAAAAAA' + resultSearch)
                      console.log(resultSearch)
                    } 
                  });
                  
*/
                })
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