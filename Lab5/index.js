import PathParameters from "./PathParameters.js";
import QueryParameters from "./QueryParameters.js";
export default function Lab5(app) {
  app.get("/lab5", (req, res) => res.send("Lab5"));
  PathParameters(app);
  QueryParameters(app);
}
