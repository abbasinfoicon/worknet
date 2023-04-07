import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        content: { type: String, required: true },
        img: { type: String, required: true },
        linkText: { type: String },
        file: { type: String },
        link: { type: String },
        status: { type: String }
    },
    {
        timestamps: true,
    }
)

const sliderModel = mongoose.model("slider", sliderSchema);
export default sliderModel;