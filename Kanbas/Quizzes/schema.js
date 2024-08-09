import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    type: {
      type: String,
      enum: [
        "Graded Quiz",
        "Practice Quiz",
        "Graded Survey",
        "Ungraded Survey",
      ],
      default: "Graded Quiz",
    },
    course: String,
    points: Number,
    group: {
      type: String,
      enum: ["QUIZZES", "EXAMS", "ASSIGNMENTS", "PROJECTS"],
      default: "QUIZZES",
    },
    shuffle: { type: Boolean, default: true },
    time: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    attempts: { type: Number, default: 1 },
    showCorrect: String,
    accessCode: String,
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAttempt: { type: Boolean, default: false },
    due: Date,
    available: Date,
    until: Date,
  },
  { collection: "quizzes" }
);
export default quizSchema;
