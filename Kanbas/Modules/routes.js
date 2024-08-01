import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const { cid } = req.params;
    const module = await dao.createModule(req.body);
    module.course = cid;
    res.json(module);
  };
  const findModulesByCourse = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModulesByCourse(cid);
    if (modules) {
      res.json(modules);
    } else {
      res
        .status(401)
        .json({ message: "Modules with this course ID were not found." });
    }
  };
  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };
  app.get("/api/modules/:cid", findModulesByCourse);
  app.post("/api/modules/:cid", createModule);
  app.put("/api/modules/:moduleId", updateModule);
  app.delete("/api/modules/:moduleId", deleteModule);
}
