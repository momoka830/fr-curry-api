import express from "express";
// routes: どのURLに来たらどのcontorollersを呼び出すか決める

import {
  getOrderController,
  createOrderController,
  deleteOrderController,
} from "../controllers/order.js";

// URLとcontrollerの対応表を作るための箱
const router = express.Router();

// http://localhost:8000/order/でgetリクエストが来たら、これを返す
router.get("/", async (req, res, next) => {
  try {
    await getOrderController(req, res);
  } catch (error) {
    next(error);
  }
});

// http://localhost:8000/order/でPOSTリクエストが来たらこれを返す
router.post("/", async (req, res, next) => {
  try {
    await createOrderController(req, res);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await deleteOrderController(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
