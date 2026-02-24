// models : PostgreSQLでデータを取得するファイル
import pool from "../db/index.js";

// オーダーに必要な情報を取得する関数
export const getOrderItems = async (page = 1, limit = 5) => {
  const offset = (page - 1) * limit;
  try {
    const result = await pool.query(
      `SELECT id, item_name AS name, imagepath AS "imagePath", totalprice AS "TotalPrice", price, count, topping_list FROM order_items LIMIT $1 OFFSET $2`,
      [limit, offset],
    );
    return result.rows;
  } catch (error) {
    console.error("DB接続エラー", error);
    throw error;
  }
};

// 新しいオーダーを登録するための関数
export const createOrderItems = async (
  item_name: string,
  price: number,
  imagepath: string,
  topping_list: string,
  count: number,
  totalprice: number,
) => {
  try {
    const result = await pool.query(
      `INSERT INTO order_items (item_name, price, imagepath, topping_list, count, totalprice) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, item_name AS name, imagepath AS "imagePath", totalprice AS "TotalPrice", price, count, topping_list`,
      [item_name, price, imagepath, topping_list, count, totalprice],
    );
    return result.rows[0];
  } catch (error) {
    console.error("ユーザー登録エラー", error);
    throw error;
  }
};

// オーダーを取り消す
export const deleteOrderItems = async (id: number) => {
  try {
    const result = await pool.query("DELETE FROM order_items WHERE id = $1", [
      id,
    ]);
    return { message: "Deleted" };
  } catch (error) {
    console.error("ユーザー登録エラー", error);
    throw error;
  }
};
