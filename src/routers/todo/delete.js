const todoModel = require('../../models/todoModel');

// DELETE /api/todos/:id - Xóa todo
module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const existing = await todoModel.getById(id);
    if (!existing) {
      return res.status(404).json({ message: 'Todo không tồn tại' });
    }

    const deleted = await todoModel.remove(id);
    if (deleted) {
      return res.json({ message: 'Xóa todo thành công' });
    }
    res.status(500).json({ message: 'Xóa thất bại' });
  } catch (error) {
    console.error('Lỗi xóa todo:', error);
    res.status(500).json({ message: 'Lỗi server' });
  }
};


// đang export một function "module.exports ="