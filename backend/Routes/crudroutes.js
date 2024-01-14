const express = require("express");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());
const router = express.Router();

const crudRoutes = require("../Controllers/crudcontroller.js");

router.post("/createsatelite", crudRoutes.createsatelite);
router.get("/getAllSatellites", crudRoutes.getAllSatellites);
router.put("/updateSatelliteById/:id", crudRoutes.updateSatelliteById);
router.delete("/deleteSatelliteById/:id", crudRoutes.deleteSatelliteById);

router.post("/createPlanet", crudRoutes.createPlanet);
router.get("/getAllPlanet", crudRoutes.getAllPlanet);
router.put("/updatePlanetById/:id", crudRoutes.updatePlanetById);
router.delete("/deletePlanetById/:id", crudRoutes.deletePlanetById);


module.exports = router;
