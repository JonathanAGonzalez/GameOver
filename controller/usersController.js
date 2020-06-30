const fs = require('fs');
const path = require('path');
const { check, validationResult, body } = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require('../database/models');
const sequelize = db.sequelize;





controller = {
    //REGISTRO
    register: function(req, res, next) {
        res.render('register', {
            logeadoUser: req.session.logged
        });
    },
    //REGISTRO PROCESO
    createUser: function(req, res, next) {
        const errors = validationResult(req)
        if(errors.isEmpty()){
            db.users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
                avatar: req.files[0].filename
            })
        }else{
            res.render('register',{
                errors:errors.errors,
            })
        }

        res.redirect('/')







    },
    login: function(req, res, next) {
        res.render('login', {
            logeadoUser: req.session.logged,
        });
    },
    processLogin: function(req, res, next) {        
        var errors = validationResult(req);
        db.users.findAll()
            .then((result) => {
                if (errors.isEmpty()) {
                    result.forEach(element => {
                        if (req.body.email == element.email && bcrypt.compareSync(req.body.password, element.password, 10)) {
                            req.session.logged = element.email;
                            var usuarioLogeado = req.session.logged;
                        }
                    })
                    res.render('index', {
                        usuarios: result,
                        usuarioLogeado: req.session.logged
                    })
                } else {
                    return res.render('login', {
                        errors: errors.errors
                    })
                }


            }).catch((err) => {
                console.log(err)
            });

        
    },
    logout: function(req, res, next) {
        req.session.destroy()
        res.redirect('/')
    },
    perfilUser: (req, res, next) => {


        res.render('perfilUser', {
            users: usersJSON,
            logeadoUser: req.session.logged
        })

    },
    processPerfil: (req, res, next) => {
        let usuarioPerfil = usersJSON.find(function(element) {
            return element.email == logeadoUser
        });
        console.log(usuarioPerfil)
    },
    processEditPerfil: (req, res, next) => {
        res.send('Editado', {
            logeadoUser: req.session.logged

        })
    },
}

module.exports = controller;