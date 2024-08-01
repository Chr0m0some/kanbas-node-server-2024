import Database from "../Database/index.js";
import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  // app.get("/api/courses", (req, res) => {
  //   const courses = Database.courses;
  //   res.send(courses);
  // });
  // app.post("/api/courses", (req, res) => {
  //   const course = { ...req.body, _id: new Date().getTime().toString() };
  //   Database.courses.push(course);
  //   res.send(course);
  // });
  // app.delete("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const index = Database.courses.findIndex((c) => c._id === id);
  //   if (index === -1) {
  //     res
  //       .status(404)
  //       .json({ message: `Unable to delete course with ID ${id}` });
  //     return;
  //   }
  //   Database.courses.splice(index, 1);
  //   res.sendStatus(204);
  // });
  // app.put("/api/courses/:id", (req, res) => {
  //   const { id } = req.params;
  //   const index = Database.courses.findIndex((c) => c._id === id);
  //   if (index === -1) {
  //     res
  //       .status(404)
  //       .json({ message: `Unable to delete course with ID ${id}` });
  //     return;
  //   }
  //   const course = req.body;
  //   Database.courses = Database.courses.map((c) =>
  //     c._id === id ? { ...c, ...course } : c
  //   );
  //   res.sendStatus(204);
  // });
  const findAllCourses = async (req, res) => {
    const courses = await dao.findAllCourses();
    res.json(courses);
  };
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  const updateCourse = async (req, res) => {
    const { cid } = req.params;
    const status = await dao.updateCourse(cid, req.body);
    res.json(status);
  };
  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.cid);
    res.json(status);
  }
  app.get("/api/courses", findAllCourses);
  app.post("/api/courses", createCourse);
  app.put("/api/courses/:cid", updateCourse);
  app.delete("/api/courses/:cid", deleteCourse)
}
