// models : PostgreSQLでデータを取得するファイル
import pool from "../db/index.js";

export const getToppings = async () => {
  try {
    const result = await pool.query("SELECT * FROM topping");
    return result.rows;
  } catch (error) {
    console.error("DBクエリエラー:", error);
    throw error;
  }
};
