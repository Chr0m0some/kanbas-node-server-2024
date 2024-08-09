import * as dao from "./dao.js";

export default function QuizzesRoutes(app) {
  const createQuiz = async (req, res) => {
    const { cid } = req.params;
    const quiz = await dao.createQuiz(req.body);
    quiz.course = cid;
    await quiz.save();
    res.json(quiz);
  };
  const findQuizzesForCourse = async (req, res) => {
    const { cid } = req.params;
    const quizzes = await dao.findQuizzesForCourse(cid);
    if (quizzes) {
      res.json(quizzes);
    } else {
      res.status(404).json({ message: "Quizzes not found" });
    }
  };
  const updateQuiz = async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.updateQuiz(qid, req.body);
    res.json(quiz);
  };
  const deleteQuiz = async (req, res) => {
    const { qid } = req.params;
    const quiz = await dao.deleteQuiz(qid);
    res.json(quiz);
  };
  app.post("/api/quizzes/:cid", createQuiz);
  app.get("/api/quizzes/:cid", findQuizzesForCourse);
  app.put("/api/quizzes/:qid", updateQuiz);
  app.delete("/api/quizzes/:qid", deleteQuiz);
}
