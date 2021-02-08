import { Router } from "express";
const router = Router();

import {
  createTaskList,
  updateTaskList,
  deleteTaskList,
  getTaskLists,
  gettaskListById,
  taskCompletedBy,
} from "../controllers/taskList.mjs";

router.get("/taskLists", async (req, res) => {
  try {
    const taskLists = await getTaskLists();
    console.log(taskLists);
    return res.send(`${taskLists}`);
  } catch (err) {
    console.log(err);
  }
});

router.get("/taskLists/:id", async (req, res) => {
  try {
    const taskList = await gettaskListById(req.params.id);
    console.log(taskList);
    return res.send(`${taskList}`);
  } catch (err) {
    console.log(err);
  }
});

router.post("/taskLists", async (req, res) => {
  try {
    const taskList = await createTaskList(req.body);
    console.log(taskList);
    return res.send(`${taskList}`);
  } catch (err) {
    console.log(err);
  }
});

router.put("/taskLists/:id", async (req, res) => {
  try {
    const taskList = await updateTaskList(req.params.id, req.body);
    console.log(taskList);
    return res.send(`${taskList}`);
  } catch (err) {
    console.log(err);
  }
});

router.put("/taskLists/:taskListId/:clientId", async (req, res) => {
  try {
    const taskList = await taskCompletedBy(
      req.params.taskListId,
      req.params.clientId
    );
    console.log(taskList);
    return res.send(`${taskList}`);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/taskLists/:id", async (req, res) => {
  try {
    const taskList = await deleteTaskList(req.params.id);
    console.log(taskList);
    return res.send(`${taskList}`);
  } catch (err) {
    console.log(err);
  }
});

export { router as taskListRouter };
