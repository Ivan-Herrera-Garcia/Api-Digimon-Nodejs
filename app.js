const express = require("express");
const { API_VERSION } = require("./constants");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const digimonRoutes= require("./router/digimon");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static("uploads"));

app.use(cors());

app.use(`/api/${API_VERSION}`, digimonRoutes);

module.exports = app;