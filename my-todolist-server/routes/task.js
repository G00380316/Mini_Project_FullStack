import { connectMongoDB } from "../lib/mongo.js";
import router from "./auth.js";

router.post("/", async (req, res) => {
  try {
    const { name, email, hashedPassword } = await req.body;
    await connectMongoDB();
    const newUser = await User.create({ name, email, hashedPassword });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;

/*
router.post('/searchtask', async (req, res) => {
    try {
        await connectMongoDB();

        try {
            const { title, description, status } = await req.body;
            const tasks = await TaskSchema.find({});

            const new Task = await newTask.create({ title, description, status })
            
            res.status(201).json(newTask);
        } catch (error) {
            console.error(error)
            return res.status(500).json({ error: `Internal Sever Error`});
    }
    
)*/
