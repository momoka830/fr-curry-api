import express from "express";
import {
  getOrderItemsController,
  createOrderItemsController,
  deleteOrderItemsController,
} from "../controllers/orderItems.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    await getOrderItemsController(req, res);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    await createOrderItemsController(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await deleteOrderItemsController(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
