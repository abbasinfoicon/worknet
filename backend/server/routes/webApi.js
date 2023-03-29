import express from "express";
import authController from "../app/controllers/authController.js";
import pageController from "../app/controllers/pageController.js";
import upload from "../app/middlewares/multerMiddleware.js";

const router = express.Router();

// =======================================================================//
//=================== auth-router ========================================//
//========================================================================//
router.use("/register",  upload.single('img'));
router.get("/register", authController.addUser);
router.post("/register", authController.addUser);

// =======================================================================//
//=================== page-router ========================================//
//========================================================================//
router.use("/page",  upload.single('img'));
router.get("/page", pageController.getAllData);
router.post("/page", pageController.addData);

export default router;
