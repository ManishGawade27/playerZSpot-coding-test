import { taskListModel } from "../models/taskList.mjs";
import moment from "moment";

export const createTaskList = async (taskListInput) => {
  let date = new Date(taskListInput.dueDate);
  console.log(taskListInput.dueDate);
  taskListInput.dueDate = moment(date).format("YYYY-MM-DD");
  console.log(typeof date, taskListInput.dueDate);
  const newTaskList = await taskListModel.create(taskListInput);
  return newTaskList;
};

export const updateTaskList = async (taskListInput) => {
  const taskListData = await taskListModel.findByIdAndUpdate(
    id,
    taskListInput,
    {
      new: true,
    }
  );
  return taskListData;
};

export const deleteTaskList = async (taskListId) => {
  const taskListData = await taskListModel.findByIdAndDelete(taskListId);
  return taskListData;
};

export const getTaskLists = async () => {
  const taskListData = await taskListModel.find().populate("completedBy");
  return taskListData;
};

export const gettaskListById = async (taskListId) => {
  const taskListData = await taskListModel
    .findById(taskListId)
    .populate("completedBy");
  return taskListData;
};

export const taskCompletedBy = async (taskListId, ClientId) => {
  const taskListdata = await taskListModel.findByIdAndUpdate(
    taskListId,
    {
      isCompleted: true,
      completionDate: moment(new Date()).format("DD-MM-YYYY"),
      $push: { completedBy: ClientId },
    },
    { safe: true, upsert: true, new: true }
  );
  return taskListdata;
};
