const fs = require('fs');
const path = require('path');
const { check, validationResult, body } = require('express-validator');

const bcrypt = require('bcryptjs');
const saltRounds = 10 ;   
const myPlaintextPassword = ' s0 / \ / \ P 4 $$ w0rD ' ;   
const someOtherPlaintextPassword = ' not_bacon ' ;  



const db = require('../database/models');
const { log } = require('console');
const sequelize = db.sequelize;





controller = {
    //REGISTRO
    register: function(req, res, next) {  
        res.render('register', {
            userLogged: req.session.logged
        });
    },
    //REGISTRO PROCESO
    createUser: function(req, res, next) {
        const errors = validationResult(req)
        if (errors.isEmpty()){
            db.User.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                avatar: req.files[0].filename,
                state: "Active",
                admin: 0
            })
            return res.redirect('/')
        }else{
            return res.render('register',{
                errors:errors.errors
            })
        }
    },
    //LOGIN
    login: function(req, res, next) {
        res.render('login');
    },
    //LOGIN PROCESO
    processLogin: function(req, res, next) {

        let errors = validationResult(req)

        if (errors.isEmpty()) {
          db.User.findOne({ where: { email: req.body.email } })
            .then(user => {
              
              if (req.body.password == user.password) {
                req.session.user = user;
                var userLogged = req.session.user;
                console.log(userLogged.email)
                res.locals.user = req.session.user;
                res.cookie('UsuarioCookie',userLogged.email,{maxAge: 6000})
                res.redirect("/");
              } else {
                res.render("login", {
                    errors: errors.errors
                });
              }
            })

            .catch(function(error){
              console.log(error)
            })
        } else {
          res.render("login", { errors: errors.errors })
        }
      
    },
    //LOGOUT
    logout: function(req, res, next) {
        req.session.destroy()
        res.clearCookie()
        res.redirect('/')
    },
    //PERFIL USER
    perfilUser: (req, res, next) => {
        res.render('perfilUser');
    },
    processPerfil: (req, res, next) => {
        
    },
    processEditPerfil: (req, res, next) => {
        db.User.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
            avatar: req.files[0].filename
        },{
            where: {
                email: req.body.email
            }
        });
        res.redirect("/");
    }
}

module.exports = controller;