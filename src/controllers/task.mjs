import { taskModel } from "../models/task.mjs";
import mongoose from "mongoose";
import moment from "moment";

export const createTask = async (taskInput) => {
  const newTask = await taskModel.create(taskInput);
  return newTask;
};

export const updateTask = async (id, taskInput) => {
  const taskData = await taskModel.findByIdAndUpdate(id, taskInput, {
    new: true,
  });
  return taskData;
};

export const addTODoList = async (taskId, taskListId) => {
  const taskdata = await taskModel.findByIdAndUpdate(
    taskId,
    {
      $push: { toDoList: taskListId },
    },
    { safe: true, upsert: true, new: true }
  );
  return taskdata;
};

export const deleteTask = async (taskId) => {
  const taskData = await taskModel.findByIdAndDelete(taskId);
  return taskData;
};

export const getTasks = async () => {
  const taskData = await taskModel
    .find()
    .populate("assignTo")
    .populate("toDoList");
  return taskData;
};

export const getTaskById = async (taskId) => {
  const taskData = await taskModel
    .findById(taskId)
    .populate("assignTo")
    .populate("toDoList");
  return taskData;
};
