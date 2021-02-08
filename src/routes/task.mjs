import { Router } from "express";
const router = Router();

import {
  createTask,
  updateTask,
  deleteTask,
  getTasks,
  getTaskById,
  addTODoList,
} from "../controllers/task.mjs";

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await getTasks();
    console.log(tasks);
    return res.send(`${tasks}`);
  } catch (err) {
    console.log(err);
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await getTaskById(req.params.id);
    console.log(task);
    return res.send(`${task}`);
  } catch (err) {
    console.log(err);
  }
});

router.post("/tasks", async (req, res) => {
  try {
    const task = await createTask(req.body);
    console.log(task);
    return res.send(`${task}`);
  } catch (err) {
    console.log(err);
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const task = await updateTask(req.params.id, req.body);
    console.log(task);
    return res.send(`${task}`);
  } catch (err) {
    console.log(err);
  }
});

router.put("/tasks/:taskId/:taskListId", async (req, res) => {
  try {
    const task = await addTODoList(req.params.taskId, req.params.taskListId);
    console.log(task);
    return res.send(`${task}`);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await deleteTask(req.params.id);
    console.log(task);
    return res.send(`${task}`);
  } catch (err) {
    console.log(err);
  }
});

export { router as taskRouter };
