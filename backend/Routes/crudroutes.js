const express = require("express");
require("dotenv").config();
const cors = require('cors');
const app = express()
app.use(express.json());
app.use(cors());
const router = express.Router();

const crudRoutes = require("../Controllers/crudcontroller");

router.post("/createndertesa", crudRoutes.createNdertesa);
router.get("/getndertesa", crudRoutes.getNdertesat);
router.put("/updatendertesa/:id", crudRoutes.updateNdertesaById);
router.delete("/deletendertesa/:id", crudRoutes.deleteNdertesaById);

router.post("/createlifti", crudRoutes.createLifti);
router.get("/getliftet", crudRoutes.getLiftet);
router.put("/updatelifti/:id", crudRoutes.updateLiftiById);
router.delete("/deletelifit/:id", crudRoutes.deleteLiftiById);


module.exports = router;
