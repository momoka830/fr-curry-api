// controllers: services(なければ直接models)を呼び出してレスポンスを返すファイル
import type { Request, Response } from "express";
import { createUser, getUsers } from "../models/users.js";
import { createOrder, getOrder } from "../models/order.js";

export const getOrderController = async (req: Request, res: Response) => {
  try {
    const page = req.query._page
      ? Number.parseInt(req.query._page as string)
      : 1;

    const limit = req.query._limit
      ? Number.parseInt(req.query._limit as string)
      : 1;
    const order = await getOrder(page, limit);
    res.status(200).json(order);
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};

export const createOrderController = async (req: Request, res: Response) => {
  try {
    const user_id = req.body.user_id as number;
    const total_price = req.body.total_price as number;
    const user = await createOrder(user_id, total_price);
    res.status(201).json(user);
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};
