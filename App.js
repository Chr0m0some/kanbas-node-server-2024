
import express from "express";
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";

const app = express();

app.get("/", (req, res) => res.send("Welcome to the Server"));

Hello(app);
Lab5(app); 
app.listen(process.env.PORT || 4000);