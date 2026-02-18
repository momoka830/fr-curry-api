// controllers: services(なければ直接models)を呼び出してレスポンスを返すファイル
import type { Request, Response } from "express";
import { getToppings } from "../models/toppings.js";

export const getToppingsController = async (req: Request, res: Response) => {
  try {
    // modelsの関数getItemsを呼び出し
    const items = await getToppings();

    // 成功したら200と商品データを返す
    res.status(200).json(items);
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};
