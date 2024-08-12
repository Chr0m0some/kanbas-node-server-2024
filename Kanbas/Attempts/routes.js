import * as dao from "./dao.js";

export default function AttemptsRoutes(app) {
  const findAttemptsByUserAndQuiz = async (req, res) => {
    const { uid, qid } = req.query;
    try {
      const attempts = await dao.findAttemptsByUserAndQuiz(uid, qid);
      res.json(attempts);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error finding attempts", error: error.message });
    }
  };
  const createAttempt = async (req, res) => {
    const attempt = req.body;
    const newAttempt = await dao.createAttempt(attempt);
    res.json(newAttempt);
  };

  app.get("/api/attempts", findAttemptsByUserAndQuiz);
  app.post("/api/attempts", createAttempt);
}
