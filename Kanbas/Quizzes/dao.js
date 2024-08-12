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
export const findQuestionsForQuiz = (qid) =>
  model
    .findById(qid)
    .then((quiz) => (quiz ? quiz.questions : []))
    .catch((error) => {
      console.error("Error finding quiz:", error);
      return [];
    });
export const createQuestion = (qid, question) => {
  delete question._id;
  return model.findById(qid).then((quiz) => {
    quiz.questions.push(question);
    quiz.save();
    return quiz.questions;
  });
};
export const updateQuestion = (qid, questionId, newQuestion) => {
  model.findById(qid).then((quiz) => {
    const question = quiz.questions.id(questionId);
    question.set(newQuestion);
    quiz.save();
  });
};
