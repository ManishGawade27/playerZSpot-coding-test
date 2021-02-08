import express from "express";
import mongoose from "mongoose";
import { taskRouter } from "./routes/task.mjs";
import { taskListRouter } from "./routes/taskList.mjs";
import { clientRouter } from "./routes/client.mjs";
const app = express();

app.use(express.json({}));

app.use("/", clientRouter);
app.use("/", taskRouter);
app.use("/", taskListRouter);

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.y2dw9.mongodb.net/test?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then((res) => {
    console.log("DATABASE CONNECTED");
    app.listen(8080, () => {
      console.log("SERVER STARTED");
    });
  })
  .catch((err) => {
    console.log("SERVER STARTUP ERROR.");
    Console.log(err);
  });
