const todoModel = require('../../models/todoModel');

// POST /api/todos - Thêm todo mới
module.exports = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'Tiêu đề không được để trống' });
    }

    const newTodo = await todoModel.create(title.trim(), description?.trim());
    res.status(201).json({ data: newTodo, message: 'Tạo todo thành công' });
  } catch (error) {
    console.error('Lỗi tạo todo:', error);
    res.status(500).json({ message: 'Lỗi server' });
  }
};