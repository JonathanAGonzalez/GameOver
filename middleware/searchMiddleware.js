const db = require('../database/models');
const sequelize = db.sequelize;

function search (req,res,next){
    var resultSearch = [];
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
    }).catch((err) => {
        console.log(err)
    });
    next();
}

module.exports = search;