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
    },
    filename: function (req, file, cb) {    
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  var upload = multer({ storage: storage })

//LISTAR USUARIOS
router.get('/', adminController.admin);
//EDITAR PERFIL USUARIOS
router.get('/perfilUser/:id', adminController.editPerfil);
router.post('/perfilUser', adminController.processEditPerfil)
//CREAR PRODUCTO
router.get("/crear", productsdbController.crear);
router.post("/crear", productsdbController.guardado);
//LISTADO DE PRODUCTOS A EDITAR
router.get("/", productsdbController.listado);
//ACTUALIZACION
router.get("/editar/:id", productsdbController.editar);
router.post("/editar/:id", productsdbController.actualizar);
//ELIMINAR PRODUCTO
router.post("/borrar/:id", productsdbController.borrar);
//HISTORIAL CARRITOS
//ELIMINAR CARRITOS


module.exports = router;
