// controllers: services(なければ直接models)を呼び出してレスポンスを返すファイル
import type { Request, Response } from "express";
import { createUser, getUsers } from "../models/users.js";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string;
    const password = req.query.password as string;
    const users = await getUsers(email, password);
    res.status(200).json(users);
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};

export const createUsersContoroller = async (req: Request, res: Response) => {
  try {
    const name = req.body.name as string;
    const email = req.body.email as string;
    const zipcode = req.body.zipcode as string;
    const address = req.body.address as string;
    const tel = req.body.tel as string;
    const password = req.body.password as string;
    const user = await createUser(name, email, zipcode, address, tel, password);
    res.status(201).json(user);
  } catch (error) {
    console.error("コントローラー内エラー", error);
    res.status(500).json({ message: "error" });
  }
};
