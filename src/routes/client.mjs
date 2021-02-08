import { Router } from "express";
const router = Router();

import {
  createclient,
  updateclient,
  deleteclient,
  getclients,
  getclientById,
} from "../controllers/client.mjs";

router.get("/clients", async (req, res) => {
  try {
    const clients = await getclients();
    console.log(clients);
    return res.send(`${clients}`);
  } catch (err) {
    console.log(err);
  }
});

router.get("/clients/:id", async (req, res) => {
  try {
    const client = await getclientById(req.params.id);
    console.log(client);
    return res.send(`${client}`);
  } catch (err) {
    console.log(err);
  }
});

router.post("/clients", async (req, res) => {
  try {
    const client = await createclient(req.body);
    console.log(client);
    return res.send(`${client}`);
  } catch (err) {
    console.log(err);
  }
});

router.put("/clients/:id", async (req, res) => {
  try {
    const client = await updateclient(req.params.id, req.body);
    console.log(client);
    return res.send(`${client}`);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/clients/:id", async (req, res) => {
  try {
    const client = await deleteclient(req.params.id);
    console.log(client);
    return res.send(`${client}`);
  } catch (err) {
    console.log(err);
  }
});

export { router as clientRouter };
