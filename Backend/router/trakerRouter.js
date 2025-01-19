import { Router } from "express";
import {
  getall,
  createTask,
  getByUserId,
} from "../controller/trakerController.js";

const trackerRouter = Router();

// Define the route with a descriptive path
trackerRouter.get("", getall);
trackerRouter.post("", createTask);
trackerRouter.get("/:id", getByUserId);

export { trackerRouter };
