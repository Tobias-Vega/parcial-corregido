import { conn } from "../database/db.js";

// Crear una orden
export const createOrder = async (coffee, userId) => {
const [result] = await conn.query(`INSERT INTO orders (coffee, userId) VALUES (?,?)`, [coffee, userId])

return { id: result.insertId, coffee, userId }
};

export const getOrders = async (userId) => {
  const [result] = await conn.query(`SELECT * FROM orders WHERE userId = ?`, [userId]);
  console.log(userId)
  return result
};

export const getOrderById = async (id, userId) => {
  const [result] = await conn.query(`SELECT * FROM orders WHERE id = ? AND userId = ?`, [id, userId])
  return result[0] || null;
};

export const deleteOrderById = async (id, userId) => {
  const [result] = await conn.query(`DELETE FROM orders WHERE id = ? AND userId = ?`, [id, userId]);
  return result.affectedRows > 0
};
