import model from "./model.js";

export const findAllAttempts = () => model.find();
export const createAttempt = (attempt) => {
  delete attempt._id;
  return model.create(attempt);
};
export const findAttemptsByUser = (userId) =>
  model.find({ userId }).populate("quizId");

export const findAttemptsByUserAndQuiz = (userId, quizId) =>
  model.find({ userId: userId, quizId: quizId }).populate("quizId");
