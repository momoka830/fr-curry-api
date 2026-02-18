// models : PostgreSQLでデータを取得するファイル
// ログインログアウトだからGetとPost?
import pool from "../db/index.js";

// ログインに必要な情報を取得する関数
export const getUsers = async (email: string, password: string) => {
  try {
    const result = await pool.query(
      `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`,
    );
    return result.rows;
  } catch (error) {
    console.error("DB接続エラー", error);
    throw error;
  }
};

// 新しいユーザーを登録するための関数
export const createUser = async (
  name: string,
  email: string,
  zipcode: string,
  address: string,
  tel: string,
  password: string,
) => {
  try {
    const result = await pool.query(
      `INSERT INTO users 
      (name, email, zipcode, address, tel, password) 
      VALUES ('${name}', '${email}', '${zipcode}', '${address}', '${tel}', '${password}') 
      RETURNING *`,
    );
    return result.rows[0];
  } catch (error) {
    console.error("ユーザー登録エラー", error);
    throw error;
  }
};
