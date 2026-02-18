// routes: どのURLに来たらどのcontorollersを呼び出すか決める
import { getToppingsController } from "../controllers/toppings.js";
import express from "express"; // express.Router()を使うために必要だからインポート

// URLとcontrollerの対応表を作るための箱
const router = express.Router();

// このURLでgetリクエストが来たら、これを返す
router.get("/", async (req, res, next) => {
  try {
    await getToppingsController(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;
