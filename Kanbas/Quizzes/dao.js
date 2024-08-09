import model from "./model.js";

export const findAllQuizzes = () => model.find();
export const findQuizzesForCourse = (course) => model.find({ course });
export const findQuizById = (id) => model.findById(id);
export const updateQuiz = (id, quiz) =>
  model.updateOne({ _id: id }, { $set: quiz });
export const deleteQuiz = (id) => model.deleteOne({ _id: id });
export const createQuiz = (quiz) => {
  delete quiz._id;
  return model.create(quiz);
};
