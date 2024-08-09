import model from "./model.js";

export const findQuizzesForCourse = (course) => model.find({ course });
export const updateQuiz = (id, quiz) =>
  model.updateOne({ _id: id }, { $set: quiz });
export const deleteQuiz = (id) => model.deleteOne({ _id: id });
export const createQuiz = (quiz) => {
  delete quiz._id;
  model.create(quiz);
};
