import mongoose from "mongoose";

const { Schema, models } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},
    { timestamps: true }
);

const Task = models.Task || mongoose.model("Taskdb", TaskSchema);
export default Task;