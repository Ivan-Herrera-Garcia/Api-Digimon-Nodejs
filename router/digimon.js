const express = require("express");
const DigimonController = require("../controllers/digimon");

const api = express.Router();

api.get("/digivice", DigimonController.getDigimons);

api.get("/getDigimon/Id/:id", DigimonController.getDigimonById);

api.get("/getDigimon/name/:name", DigimonController.getDigimonByName);


module.exports = api;

