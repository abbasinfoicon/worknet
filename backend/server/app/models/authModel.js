import mongoose from "mongoose";

// SCHMA
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, min: 0, max: 9999999999 },
  img: { type: String },
  password: { type: String, required: true },
  terms: { type: Boolean }
},
  {
    timestamps: true,
  }
);

// MODEL
const authModel = mongoose.model("user", userSchema);

export default authModel;
