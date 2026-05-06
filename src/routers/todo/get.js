const todoModel = require('../../models/todoModel');

// GET /api/todos - Lấy danh sách todos
// GET /api/todos/:id - Lấy todo theo id
module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    if (id) {
      const todo = await todoModel.getById(id);
      if (!todo) {
        return res.status(404).json({ message: 'Todo không tồn tại' });
      }
      return res.json({ data: todo });
    }

    const todos = await todoModel.getAll();
    res.json({ data: todos });
  } catch (error) {
    console.error('Lỗi lấy todo:', error);
    res.status(500).json({ message: 'Lỗi server' });
  }
};

// đang export một function "module.exports ="
