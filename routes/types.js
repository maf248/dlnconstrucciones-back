var express = require("express");
var router = express.Router();
const path = require("path");
const multer = require("multer");

// Importing API controllers
const typesController = require("../controllers/typesController");

// Importing middleware for protected routes
const adminWebTokenMiddleware = require("../middlewares/adminWebTokenMiddleware");

// Importing backend validations
const typeValidate = require("../middlewares/validation/typeValidate");

// Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let dirImage = path.join("public", "images");
    return cb(null, dirImage);
  },
  filename: function (req, file, cb) {
    return cb(
      null,
      "Type" + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

// Types Routes
router.get('/', typesController.index);
router.get('/:id', typesController.detail);
router.post('/create', adminWebTokenMiddleware, upload.single('image'), typeValidate, typesController.create);
router.patch('/edit/:id', adminWebTokenMiddleware, upload.single('image'), typeValidate, typesController.edit);
router.delete('/delete/:id', adminWebTokenMiddleware, typesController.delete);

module.exports = router;
