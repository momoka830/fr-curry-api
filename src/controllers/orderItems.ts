// controllers: services(なければ直接models)を呼び出してレスポンスを返すファイル
import type { Request, Response } from "express";
import {
  createOrderItems,
  deleteOrderItems,
  getOrderItems,
} from "../models/orderItems.js";

export const getOrderItemsController = async (req: Request, res: Response) => {
  try {
    const page = req.query._page
      ? Number.parseInt(req.query._page as string)
      : 1;

    const limit = req.query._limit
      ? Number.parseInt(req.query._limit as string)
      : 5;
    const orderItems = await getOrderItems(page, limit);
    res.status(200).json(orderItems);
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};

export const createOrderItemsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const item_name = req.body.name as string;
    const price = req.body.price as number;
    const imagepath = req.body.imagePath as string;
    const topping_list = JSON.stringify(req.body.topping_list ?? []);
    const count = req.body.count as number;
    const totalprice = req.body.TotalPrice as number;
    const orderItem = await createOrderItems(
      item_name,
      price,
      imagepath,
      topping_list,
      count,
      totalprice,
    );
    res.status(201).json(orderItem);
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};

export const deleteOrderItemsController = async (
  req: Request,
  res: Response,
) => {
  try {
    const id = Number.parseInt(req.params.id as string);
    await deleteOrderItems(id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};
