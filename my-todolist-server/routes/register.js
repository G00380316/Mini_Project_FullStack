import express from "express";
import  User  from "../models/user.js";
import { connectMongoDB } from "../lib/mongo.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = await req.body;
        await connectMongoDB();
        const newUser = await User.create({ name, email, password });
        
        res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)

router.post('/userCheck', async (req, res) => {
    try {
        await connectMongoDB();
        const { email } = req.body;
        
        const user = await User.findOne({ email }).select("_id");

        console.log("User has been checked...user: ", user);

        res.status(201).json({ user });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
)



export default router;