import { taskListModel } from "../models/taskList.mjs";

export const createTaskList = async (taskListInput) => {
  const newTaskList = await taskListModel.create(taskListInput);
  return newTaskList;
};

export const updateTaskList = async (taskListInput) => {
  const taskListData = await taskListModel.findByIdandUpdate(
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
  const taskListData = await taskListModel.find();
  return taskListData;
};

export const gettaskListById = async (taskListId) => {
  const taskListData = await taskListModel.findById(taskListId);
  return taskListData;
};
