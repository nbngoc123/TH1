// import config database để dùng
const pool = require('../config/database');

// Lấy tất cả todos
const getAll = async () => {
  const [rows] = await pool.query('SELECT * FROM todos ORDER BY created_at DESC');
  return rows;
};

// Lấy todo theo id
const getById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM todos WHERE id = ?', [id]);
  return rows[0] || null;
};

// Tạo todo mới
const create = async (title, description) => {
  const [result] = await pool.query(
    'INSERT INTO todos (title, description) VALUES (?, ?)',
    [title, description || null]
  );
  return { id: result.insertId, title, description };
};

// Cập nhật todo
const update = async (id, title, description, completed) => {
  const [result] = await pool.query(
    'UPDATE todos SET title = ?, description = ?, completed = ? WHERE id = ?',
    [title, description, completed, id]
  );
  return result.affectedRows > 0;
};

// Xóa todo
const remove = async (id) => {
  const [result] = await pool.query('DELETE FROM todos WHERE id = ?', [id]);
  return result.affectedRows > 0;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};


// các cách code trên là function style code từng function cho mỗi nghiệp 
// vụ như thêm sửa xóa,... và export cho bên khác dùng