import mongoose from "mongoose";

// SCHMA
const serviceSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        content: { type: String, required: true },
        img: { type: String, required: true },
        file: { type: String },
        link: { type: String },
        linkTxt: { type: String },
        status: { type: String },
    },
    {
        timestamps: true,
    }
);

// MODEL
const serviceModel = mongoose.model("service", serviceSchema);

export default serviceModel;