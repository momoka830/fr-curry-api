// routes: どのURLに来たらどのcontorollersを呼び出すか決める
import {
  getItemsController,
  getItemsByIdController,
} from "../controllers/items.js";
import express from "express"; // express.Router()を使うために必要だからインポート

// URLとcontrollerの対応表を作るための箱
const router = express.Router();

// このURLでgetリクエストが来たら、これを返す
router.get("/", async (req, res, next) => {
  try {
    await getItemsController(req, res);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    await getItemsByIdController(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
