import mongoose from "mongoose";

// SCHMA
const pageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    img: { type: String, required: true },
    smallDesc: { type: String, required: true },
    desc: { type: String, required: true },
    categories: { type: String },
    subCategories: { type: String },
    show: { type: String, required: true },
    status: { type: String }
  },
  {
    timestamps: true,
  }
);

// MODEL
const pageModel = mongoose.model("cms", pageSchema);

export default pageModel;
