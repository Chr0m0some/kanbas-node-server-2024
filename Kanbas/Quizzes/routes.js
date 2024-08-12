import * as dao from "./dao.js";

export default function QuizzesRoutes(app) {
  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };
  const findAllQuizzes = async (req, res) => {
    const { cid } = req.query;
    if (cid) {
      const quizzes = await dao.findQuizzesForCourse(cid);
      if (quizzes) {
        res.json(quizzes);
        return;
      } else {
        res.status(404).json({ message: "Quizzes not found" });
      }
    }
    const quizzes = await dao.findAllQuizzes();
    if (quizzes) {
      res.json(quizzes);
    } else {
      res.status(404).json({ message: "Quizzes not found" });
    }
  };
  const findQuizById = async (req, res) => {
    const { qid } = req.params;
    console.log(qid);
    const quiz = await dao.findQuizById(qid);
    res.json(quiz);
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
  const findQuestionsForQuiz = async (req, res) => {
    const { qid } = req.params;
    try {
      const questions = await dao.findQuestionsForQuiz(qid);
      res.json(questions);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error fetching quiz questions",
          error: error.message,
        });
    }
  };
  const createQuestion = async (req, res) => {
    const { qid } = req.params;
    const question = await dao.createQuestion(qid, req.body);
    res.json(question);
  };
  const updateQuestion = async (req, res) => {
    const { qid, questionId } = req.params;
    const question = await dao.updateQuestion(qid, questionId, req.body);
    res.json(question);
  };
  app.post("/api/quizzes", createQuiz);
  app.get("/api/quizzes/:qid", findQuizById);
  app.get("/api/quizzes", findAllQuizzes);
  app.put("/api/quizzes/:qid", updateQuiz);
  app.delete("/api/quizzes/:qid", deleteQuiz);
  app.post("/api/quizzes/:qid/questions", createQuestion);
  app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
  app.put("/api/quizzes/:qid/questions/:questionId", updateQuestion);
}
