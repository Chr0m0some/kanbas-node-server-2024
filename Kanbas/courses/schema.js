import mongoose from "mongoose";
const courseSchema = new mongoose.Schema(
  {
    _id: { type: String, required: true },
    name: String,
    number: String,
    startDate: String,
    endDate: String,
    department: String,
    credits: Number,
    description: String,
  },
  { collection: "courses" }
);
export default courseSchema;
