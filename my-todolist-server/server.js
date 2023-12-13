import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { connectMongoDB } from "./lib/mongo.js";
import authRouter from "./routes/auth.js";
import taskRouter from "./routes/task.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectMongoDB();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello this is the ToDoList server");
});

app.use("/auth", authRouter);

app.use("/task", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
