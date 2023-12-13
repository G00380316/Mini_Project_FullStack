import express from "express";
import  User  from "../models/user.js";
import { connectMongoDB } from "../lib/mongo.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, email, hashedPassword } = await req.body;
        await connectMongoDB();
        const newUser = await User.create({ name, email, hashedPassword });
        
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

router.post('/login', async (req, res) => {
    try {
        await connectMongoDB();
        const { email, hashedPassword } = req.body;

        const user = await User.findOne({ email }).select("hashedPassword");
        
        if (!user) {
        return res.status(401).json({ error: 'Authentication failed, User not found' });
        }

        console.log("User has been checked...user: ", user);
        
        const passwordMatch = await bcrypt.compare(hashedPassword, user.hashedPassword);

        if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
        }
        
        console.log("User password has been checked...password: ", passwordMatch);

        const token = jwt.sign({ userId: user._id }, "your-secret-key", {
            expiresIn: "1h",
        });

        res.status(200).json({ token });

    } catch (error) {
    res.status(500).json({ error: 'Login failed' });
    }
});



export default router;