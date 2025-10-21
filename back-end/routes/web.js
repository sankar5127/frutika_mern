const ProductController = require("../controllers/ProductController");
const NewsController = require("../controllers/NewsController");

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productStorage = multer.diskStorage({
    destination: 'public/uploads/products', 
    filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
    }
});

const newsStorage = multer.diskStorage({
    destination: 'public/uploads/news', 
    filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
    }
});

const storageProduct = multer({storage: productStorage});
const newsImage = multer({storage: newsStorage}); 

router.post("/product/store",storageProduct.single('img'), ProductController.store);
/* news */

router.post("/news/store",newsImage.single("img"),NewsController.store);





module.exports = {
    router: router
};