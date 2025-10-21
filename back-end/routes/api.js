const ProductController = require("../controllers/ProductController");
const TagController = require("../controllers/TagController");
const NewsController = require("../controllers/NewsController");
const UsersController = require("../controllers/UserController");
const CartController = require("../controllers/CartController");

const authneticate = require("../middleware/auth");
const AuthUser = require("../middleware/auth_user");

const express = require("express");
const Router = express.Router();

Router.get("/products",ProductController.products);



/* tags */
Router.get("/tags",TagController.tags);

/* news */
Router.get("/newslist",NewsController.newsList);
Router.get('/news/:newsId',NewsController.news);

/* users */
Router.get("/users", UsersController.users);
Router.post("/user/store", UsersController.store); 

Router.post("/login",authneticate, UsersController.login);

Router.get("/cartItems",AuthUser, CartController.cartList);
Router.post("/cart/store",AuthUser, CartController.cartStore);
Router.get("/cart/:productId/remove",AuthUser, CartController.removeCartItem);




module.exports = Router;