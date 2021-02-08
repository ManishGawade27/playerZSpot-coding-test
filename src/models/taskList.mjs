import mongoose from "mongoose";

const taskListSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    completionDate: {
      type: Date,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    completedBy: {
      type: { type: mongoose.Schema.Types.ObjectId, ref: "Client" }, //reference
    },
  },
  {
    timestamps: true,
  }
);

export const taskListModel = mongoose.model("TaskList", taskListSchema);
