import model from "./model.js";

export const findAllCourses = () => model.find();
export const createCourse = (course) => {
  delete course._id;
  return model.create(course);
};
export const updateCourse = (courseId, course) =>
  model.updateOne({ number: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ number: courseId });
