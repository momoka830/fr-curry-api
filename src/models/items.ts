// models : PostgreSQLでデータを取得するファイル
import pool from "../db/index.js";

export const getItems = async (
  page = 1,
  limit = 5,
  sort = "price",
  order = "asc",
  name = "",
) => {
  const offset = (page - 1) * limit;
  try {
    const result = await pool.query(
      `SELECT * FROM items WHERE name LIKE '%${name}%' ORDER BY ${sort} ${order} LIMIT $1 OFFSET $2`,
      [limit, offset],
    );
    return result.rows;
  } catch (error) {
    console.error("DBクエリエラー:", error);
    throw error;
  }
};

export const getItemsById = async (id: number) => {
  try {
    const result = await pool.query("SELECT * FROM items WHERE id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    console.error("DBクエリエラー", error);
    throw error;
  }
};
