const express = require('express');
const router = express.Router();

const getHandler = require('./get');
const postHandler = require('./post');
const putHandler = require('./put');
const deleteHandler = require('./delete');

// GET /api/todos - Lấy danh sách
// GET /api/todos/:id - Lấy chi tiết
router.get('/:id?', getHandler);

// POST /api/todos - Thêm mới
router.post('/', postHandler);

// PUT /api/todos/:id - Cập nhật
router.put('/:id', putHandler);

// DELETE /api/todos/:id - Xóa
router.delete('/:id', deleteHandler);

module.exports = router;

// đang export một object Express app "module.exports ="
