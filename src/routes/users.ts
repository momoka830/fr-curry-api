import express from "express";
// routes: どのURLに来たらどのcontorollersを呼び出すか決める

import {
  createUsersContoroller,
  getUsersController,
} from "../controllers/users.js";

// URLとcontrollerの対応表を作るための箱
const router = express.Router();

// http://localhost:8000/users/でgetリクエストが来たら、これを返す
router.get("/", async (req, res, next) => {
  try {
    await getUsersController(req, res);
  } catch (error) {
    next(error);
  }
});

// http://localhost:8000/users/でPOSTリクエストが来たらこれを返す
router.post("/", async (req, res, next) => {
  try {
    await createUsersContoroller(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
