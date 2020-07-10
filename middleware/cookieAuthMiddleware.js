const db= require ('../database/models');

const locals = (req, res, next) => {

   res.locals.isAuthenticated = false;
   res.locals.admin = false;

   if(req.session.user){
      res.locals.isAuthenticated = true;
      res.locals.user = req.session.user;
      res.locals.admin = req.session.user.admin;
      
   }
   next();
}


module.exports = locals;