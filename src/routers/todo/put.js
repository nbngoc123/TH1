const todoModel = require('../../models/todoModel');

// PUT /api/todos/:id - Cập nhật todo
module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const existing = await todoModel.getById(id);
    if (!existing) {
      return res.status(404).json({ message: 'Todo không tồn tại' });
    }

    const newTitle = title?.trim() || existing.title;
    const newDesc = description !== undefined ? description?.trim() : existing.description;
    const newCompleted = completed !== undefined ? completed : existing.completed;

    const updated = await todoModel.update(id, newTitle, newDesc, newCompleted);
    if (updated) {
      const todo = await todoModel.getById(id);
      return res.json({ data: todo, message: 'Cập nhật todo thành công' });
    }
    res.status(500).json({ message: 'Cập nhật thất bại' });
  } catch (error) {
    console.error('Lỗi cập nhật todo:', error);
    res.status(500).json({ message: 'Lỗi server' });
  }
};