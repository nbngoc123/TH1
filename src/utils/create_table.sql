-- Tạo cơ sở dữ liệu
CREATE DATABASE IF NOT EXISTS th1_todo;
USE th1_todo;

-- Tạo bảng todos
CREATE TABLE IF NOT EXISTS todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Dữ liệu mẫu
INSERT INTO todos (title, description) VALUES
  ('Học Node.js', 'Tìm hiểu Express và MySQL'),
  ('Làm bài tập MVC', 'Hoàn thiện dự án backend'),
  ('Viết API', 'Xây dựng RESTful API');