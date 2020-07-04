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
            db.users.create({
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: req.body.password,
                avatar: req.files[0].filename
            })
            return res.redirect('/')
        }else{
            return res.render('crear',{
                errors:errors.errors
            })
        }
    },
    login: function(req, res, next) {
        res.render('login', {
            userLogged: req.session.logged,
        });
    },
    processLogin: function(req, res, next) {

        let errors = validationResult(req); 

        db.users.findOne({
            where:{
                email:req.body.email
            }
        })
        .then(user =>{
            /* NO FUNCIONA EL BCRYPT */
            /* if(bcrypt.compareSync(req.body.password,user.password)){
                console.log('hola')
            }else{
                console.log('chau')
            } */
            /* NO FUNCIONA EL BCRYPT */

            if(req.body.password == user.password){
                console.log('simple')
            }else{
                console.log('no va')
            }


        })

        .catch(err=>{
            console.log(err)
        })


    },
    logout: function(req, res, next) {
        req.session.destroy()
        res.redirect('/')
    },
    perfilUser: (req, res, next) => {


        res.render('perfilUser')

    },
    processPerfil: (req, res, next) => {
        let usuarioPerfil = usersJSON.find(function(element) {
            return element.email == userLogged
        });
        console.log(usuarioPerfil)
    },
    processEditPerfil: (req, res, next) => {
        res.send('Editado', {
            userLogged: req.session.logged

        })
    },
}

module.exports = controller;