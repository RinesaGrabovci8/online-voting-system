const express = require("express");
const router = express.Router();
const crudRoutes = require("../Controllers/crudcontroller")

router.post("/createTeam", crudRoutes.createTeam);
router.get("/getAllTeam", crudRoutes.getAllTeam);
router.put("/updateTeamById/:id", crudRoutes.updateTeamById);
router.delete("/deleteTeamById/:id", crudRoutes.deleteTeamById);

router.post("/createPlayer", crudRoutes.createPlayer);
router.get("/getAllPlayer", crudRoutes.getAllPlayer);
router.put("/updatePlayerById/:id", crudRoutes.updatePlayerById);
router.delete("/deletePlayerById/:id", crudRoutes.deletePlayerById);

module.exports = router;
