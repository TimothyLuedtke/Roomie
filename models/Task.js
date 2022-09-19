// create task model with mongoose

import { Schema, model, models,  } from "mongoose";

const taskSchema = new Schema({

    listName: {
        type: String,
    },
    taskName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    due_date: {
        type: Date,
    },
    assigned_to: {
        // assign to logged in user
        type: String,
        ref: 'User',
        type: Schema.Types.ObjectId,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },

});

const Task = models.Task || model("Task", taskSchema);

export default Task;