import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';

import connectDB from "./app/configs/ConnectDB.js";
import webApi from "./routes/webApi.js";
import mongoose from "mongoose";

const app = express();
//we need to change up how __dirname is used for ES6 purposes
const __dirname = path.dirname(fileURLToPath(import.meta.url));
//now please load my static html and css files for my express app, from my /dist directory
app.use(express.static(path.join(__dirname, 'public')));

dotenv.config();
app.use(cors());

// Body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect start here
mongoose.set('strictQuery', false);
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

// API_ROUTER START
app.use("/api", webApi);

// SERVER-START HERE
const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Server Start on ${PORT}`);
});
