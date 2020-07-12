var express = require('express');
var router = express.Router();
const productsdbController = require('../controller/productsdbController');
const path = require('path');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/product-games')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
})
 
var upload = multer({ storage: storage });

//Creación
router.get("/crear", productsdbController.crear);
router.post("/crear", upload.any(), productsdbController.guardado);

//Lectura
router.get("/", productsdbController.listado);

//Detalle
router.get("/:id", productsdbController.detalle);

//Actualización
router.get("/editar/:id", productsdbController.editar);
router.post("/editar/:id", upload.any(), productsdbController.actualizar);

//Borrado
router.post("/borrar/:id", productsdbController.borrar);


module.exports = router;