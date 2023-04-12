import mongoose from "mongoose";

// SCHMA
const jobSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        slug: { type: String },
        content:{type: String},
        img: { type: String, required: true },
        smallDesc: { type: String, required: true },
        reference: { type: String, required: true },
        department: { type: String, required: true },
        location: { type: String, required: true },
        address: { type: String, required: true },
        city: { type: String, required: true },
        salary: { type: String },
        enployment: { type: String },
        merit: { type: String },
        working: { type: String },
        empBenefits: { type: String },
        yourTasks: { type: String },
        yourProfile: { type: String },
        contact: { type: String },
        author: { type: String },
        status: { type: String }
    },
    {
        timestamps: true,
    }
);

// MODEL
const jobModel = mongoose.model("job", jobSchema);

export default jobModel;