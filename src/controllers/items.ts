// controllers: services(なければ直接models)を呼び出してレスポンスを返すファイル
import type { Request, Response } from "express";
import { getItems, getItemsById } from "../models/items.js";

export const getItemsController = async (req: Request, res: Response) => {
  try {
    const page = req.query._page
      ? Number.parseInt(req.query._page as string)
      : 1;

    const limit = req.query._limit
      ? Number.parseInt(req.query._limit as string)
      : 1;

    const sort = req.query._sort ? (req.query._sort as string) : "price";
    const order = req.query._order ? (req.query._order as string) : "asc";
    const name = req.query._name ? (req.query._name as string) : "";
    // modelsの関数getItemsを呼び出し
    const items = await getItems(page, limit, sort, order, name);

    // 成功したら200と商品データを返す
    res.status(200).json(items);
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};

export const getItemsByIdController = async (req: Request, res: Response) => {
  try {
    const id = Number.parseInt(req.params.id as string);
    const item = await getItemsById(id);
    res.status(200).json(item);
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};
