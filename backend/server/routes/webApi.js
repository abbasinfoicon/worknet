import express from "express";
import authController from "../app/controllers/authController.js";
import sliderController from "../app/controllers/sliderController.js";
import upload from "../app/middlewares/multerMiddleware.js";
import jobController from "../app/controllers/jobController.js";
import serviceController from "../app/controllers/serviceController.js";

const router = express.Router();

// =======================================================================//
//=================== auth-router ========================================//
//========================================================================//
// router.use("/register", upload.single('img'));
router.get("/register", authController.addUser);
router.post("/register", authController.addUser);

// =======================================================================//
//=================== page-router ========================================//
//========================================================================//

router.get("/slider", sliderController.getAllData);
router.post("/slider", sliderController.addData);
router.get("/slider/:id", sliderController.singleData);
router.put("/slider/:id", sliderController.updateData);
router.delete("/slider/:id", sliderController.deleteData);

// =======================================================================//
//=================== Job-router ========================================//
//========================================================================//

router.get("/job", jobController.getAllData);
router.post("/job", jobController.addData);
router.get("/job/:id", jobController.singleData);
router.put("/job/:id", jobController.updateData);
router.delete("/job/:id", jobController.deleteData);

// =======================================================================//
//=================== Service-router ========================================//
//========================================================================//

router.get("/service", serviceController.getAllData);
router.post("/service", serviceController.addData);
router.get("/service/:id", serviceController.singleData);
router.put("/service/:id", serviceController.updateData);
router.delete("/service/:id", serviceController.deleteData);

export default router;
