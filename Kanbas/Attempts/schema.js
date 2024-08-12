import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  answer: String,
  correct: Boolean,
});

const attemptSchema = new mongoose.Schema(
  {
    quizId: { type: mongoose.Schema.Types.ObjectId, ref: "QuizModel" },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel" },
    score: { type: Number, default: 0 },
    answers: [answerSchema],
    dateSubmitted: { type: Date, default: Date.now },
  },
  { collection: "attempts" }
);

export default attemptSchema;
