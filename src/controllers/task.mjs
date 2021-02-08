import { taskModel } from "../models/task.mjs";

export const createTask = async (taskInput) => {
  const newTask = await taskModel.create(taskInput);
  return newTask;
};

export const updateTask = async (taskInput) => {
  const taskData = await taskModel.findByIdandUpdate(id, taskInput, {
    new: true,
  });
  return taskData;
};

export const deleteTask = async (taskId) => {
  const taskData = await taskModel.findByIdAndDelete(taskId);
  return taskData;
};

export const getTasks = async () => {
  const taskData = await taskModel.find();
  return taskData;
};

export const getTaskById = async (taskId) => {
  const taskData = await taskModel.findById(taskId);
  return taskData;
};
