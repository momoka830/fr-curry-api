// models : PostgreSQLでデータを取得するファイル
import pool from "../db/index.js";

export const getOrder = async (page = 1, limit = 5) => {
  const offset = (page - 1) * limit;
  try {
    const result = await pool.query(
      `SELECT * FROM "order" LIMIT $1 OFFSET $2`,
      [limit, offset],
    );
    return result.rows;
  } catch (error) {
    console.error("DBクエリエラー:", error);
    throw error;
  }
};

export const createOrder = async (user_id: number, total_price: number) => {
  try {
    const result = await pool.query(
      `INSERT INTO "order" (user_id, total_price) VALUES ($1, $2) RETURNING *`,
      [user_id, total_price],
    );
    return result.rows[0];
  } catch (error) {
    console.error("DBクエリエラー", error);
    throw error;
  }
};
