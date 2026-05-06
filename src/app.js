require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const todoRouter = require('./routers/todo');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware khó quá thì ko dùng
// app.use(cors());
app.use(express.json());
// app.use(morgan('dev'));

// Routes
app.use('/api/todos', todoRouter);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'API Todo đang hoạt động', version: '1.0.0' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route không tồn tại' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Lỗi:', err);
  res.status(500).json({ message: 'Lỗi server' });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
  console.log(`API: http://localhost:${PORT}/api/todos`);
});

module.exports = app;