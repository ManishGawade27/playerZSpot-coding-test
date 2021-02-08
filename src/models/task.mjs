import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    assignTo: {
      type: { type: mongoose.Schema.Types.ObjectId, ref: "Client" }, //reference
    },
    priority: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: true,
    },
    toDoList: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaskList" }], //reference,
    },
  },
  {
    timestamps: true,
  }
);

export const taskModel = mongoose.model("task", taskSchema);
