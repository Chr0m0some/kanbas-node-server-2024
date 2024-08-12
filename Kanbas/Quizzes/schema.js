import mongoose from "mongoose";
const baseQuestionSchema = new mongoose.Schema({
  name: { type: String, default: "New Question" },
  points: { type: Number, default: 1 },
  question: String,
  type: {
    type: String,
    enum: ["Multiple Choice", "True/False", "Fill in the Blank"],
    default: "Multiple Choice",
  },
}, { discriminatorKey: 'type' });

const multipleChoiceQuestionSchema = new mongoose.Schema({
  choices: { type: [String], default: [] },
  correct: { type: String, default: "" },
});
const trueFalseQuestionSchema = new mongoose.Schema({
  correct: { type: Boolean, default: false },
});
const fillInTheBlankQuestionSchema = new mongoose.Schema({
  choices: { type: [String], default: [] },
  correct: { type: String, default: "" },
});
const quizSchema = new mongoose.Schema(
  {
    name: { type: String, default: "New Quiz" },
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
    published: { type: Boolean, default: false },
    questions: [baseQuestionSchema],
  },
  { collection: "quizzes" }
);

quizSchema
  .path("questions")
  .discriminator("Multiple Choice", multipleChoiceQuestionSchema);
quizSchema
  .path("questions")
  .discriminator("True/False", trueFalseQuestionSchema);
quizSchema
  .path("questions")
  .discriminator("Fill in the Blank", fillInTheBlankQuestionSchema);
export default quizSchema;