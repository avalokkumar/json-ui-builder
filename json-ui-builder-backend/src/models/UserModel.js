const db = require('../config/db');
const bcrypt = require('bcryptjs');

exports.createUser = async (user) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const [result] = await db.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [user.name, user.email, hashedPassword, user.role || 'user']
  );
  return result.insertId;
};

exports.findUserByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
  return rows[0];
};

exports.getAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users');
  return rows;
};

exports.findUserById = async (id) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
  return rows[0];
};

exports.updateUser = async (id, userData) => {
  const { name, email, password, role } = userData;
  const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
  const query = `
    UPDATE users 
    SET name = ?, email = ?, ${password ? 'password = ?,' : ''} role = ? 
    WHERE id = ?
  `;
  const params = [name, email, ...(password ? [hashedPassword] : []), role, id];
  await db.execute(query, params);
};

exports.deleteUser = async (id) => {
  await db.execute('DELETE FROM users WHERE id = ?', [id]);
};
