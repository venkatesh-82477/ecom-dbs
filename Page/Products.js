const express = require("express");
const productapi = require("../Api/Products")
const products = express.Router();
products.route("/products").get(productapi.apiController)

module.exports = products;
