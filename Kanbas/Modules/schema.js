import mongoose from "mongoose";
const lessonSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true},
        name: { type: String, required: true, unique: true },
        description: String,
        module: String,
    }
)
const moduleSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    course: String,
    lessons: [lessonSchema],
  },
  { collection: "modules" }
);
export default moduleSchema;
