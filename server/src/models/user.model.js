import { hash, genSalt, compare } from "bcrypt";
import { conn } from "../database/db.js";

// Función para crear un usuario
export const createUser = async (user) => {
  const { username, email, password } = user;
  const salt = await genSalt(10);
  const hashedPassword = await hash(password, salt);

  const [result] = await conn.query(`INSERT INTO users (username, email, password) VALUES (?,?,?)`, [username, email, hashedPassword])

  return { id: result.insertId, username, email }
};

// Función para obtener usuario por id
export const getUserById = async (id) => {
  const [result] = await conn.query(`SELECT * FROM users WHERE id = ?`, [id])
  return result[0] || null;
};

// Función para obtener usuario por credenciales
export const getUserByCredentials = async (email, password) => {
  const [result] = await conn.query(`SELECT * FROM users WHERE email = ?`, [email]);

  if (result.length === 0) {
    return null;
  }

  const user = result[0];
  const isPasswordMatch = await compare(password, user.password);

  return isPasswordMatch ? user : null;
};
