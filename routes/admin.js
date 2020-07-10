const express = require('express');
const router = express.Router();
const path = require('path');
var multer = require('multer');
const adminController = require('../controller/adminController');
const productsdbController = require('../controller/productsdbController');

//USANDO MULTER
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images/product-games/')
      cb(null, './public/images/img-perfil/')

    },
    filename: function (req, file, cb) {    
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  var upload = multer({ storage: storage })

//PANEL ADMIN
router.get('/', adminController.admin);
//EDITAR PERFIL USUARIOS
router.get('/perfilUser/:id', adminController.editPerfil);
router.post('/perfilUser', adminController.processEditPerfil)
//CREAR PRODUCTO
router.get("/crear", productsdbController.crear);
router.post("/crear", productsdbController.guardado);
//LISTADO DE PRODUCTOS A EDITAR
router.get("/editproducts", adminController.listarProducts);
//LISTAR USUARIOS
router.get("/users", adminController.usersEdit);
//USUARIOS A ELIMINAR
router.get("/usersDelete", adminController.usersDelete);
router.post("/usersDelete/:id",adminController.usersUpdate);
//DETALLE DE USUARIO
router.get("/detailPerfilEdit/:id", adminController.detailPerfilEdit);
//PROCESS EDITAR USUARIO
router.post("/detailPerfilEdit/:id", upload.any(), adminController.processEditPerfil);

//ELIMINAR PRODUCTO
router.get("/borrar", adminController.borrarProducts);
//HISTORIAL CARRITOS
//ELIMINAR CARRITOS


module.exports = router;
