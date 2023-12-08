import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import { connectMongoDB } from "./lib/mongo.js";
import regRouter from "./routes/register.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectMongoDB();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello this is the ToDoList server")
})

app.use('/register', regRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

