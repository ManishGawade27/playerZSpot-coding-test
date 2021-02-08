import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    assignTo: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Client" }], //reference
    },
    priority: {
      type: String,
      enum: ["High", "Low"],
      default: "Low",
    },
    status: {
      type: String,
      enum: ["Ongoing", "YetToStart"],
      default: "YetToStart",
    },
    toDoList: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaskList" }], //reference,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const taskModel = mongoose.model("task", taskSchema);
