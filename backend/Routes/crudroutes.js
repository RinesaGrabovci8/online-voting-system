const express = require("express");
const router = express.Router();
const crudRoutes = require("../Controllers/crudcontroller")

router.post("/createmovie", crudRoutes.createmovie);
router.get("/getAllmovie", crudRoutes.getAllmovie);
router.get("/getmovie/:id", crudRoutes.getmovieById);
router.put("/updatemovieById/:id", crudRoutes.updatemovieById);
router.delete("/deletemovieById/:id", crudRoutes.deletemovieById);

router.post("/createdirector", crudRoutes.createdirector);
router.get("/getAlldirector", crudRoutes.getAlldirector);
router.get("/getdirector/:id", crudRoutes.getdirectorById);
router.put("/updatedirectorById/:id", crudRoutes.updatedirectorById);
router.delete("/deletedirectorById/:id", crudRoutes.deletedirectorById);

module.exports = router;
