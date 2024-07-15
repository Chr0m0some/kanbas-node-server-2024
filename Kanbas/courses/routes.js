import Database from "../Database/index.js";
export default function CourseRoutes(app) {
  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
  app.post("/api/courses", (req, res) => {
    const course = { ...req.body, _id: new Date().getTime().toString() };
    Database.courses.push(course);
    res.send(course);
  });
  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const index = Database.courses.findIndex((c) => c._id === id);
    if (index === -1) {
      res
        .status(404)
        .json({ message: `Unable to delete course with ID ${id}` });
      return;
    }
    Database.courses.splice(index, 1);
    res.sendStatus(204);
  });
  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const index = Database.courses.findIndex((c) => c._id === id);
    if (index === -1) {
      res
        .status(404)
        .json({ message: `Unable to delete course with ID ${id}` });
      return;
    }
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });
}
