# Dự án Backend Todo - Node.js MVC + MySQL

## Cấu trúc thư mục

```
├── src/
│   ├── app.js                    # Entry point - Khởi tạo server Express
│   ├── config/
│   │   └── database.js           # Cấu hình kết nối MySQL (connection pool)
│   ├── models/
│   │   └── todoModel.js          # Model todo - Xử lý database queries
│   ├── routers/
│   │   └── todo/
│   │       ├── index.js          # Router chính - Map HTTP methods → handlers
│   │       ├── get.js            # GET /api/todos & GET /api/todos/:id
│   │       ├── post.js           # POST /api/todos
│   │       ├── put.js            # PUT /api/todos/:id
│   │       └── delete.js         # DELETE /api/todos/:id
│   ├── schemas/
│   │   └── catdog_schema.py      # Schema Python (không liên quan đến todo)
│   └── utils/
│       ├── create_table.sql      # Script tạo database & bảng todos
│       └── logger.py             # Logger utility Python
├── .env.example                  # Mẫu file biến môi trường
├── .gitignore
├── package.json
└── README.md
```

## Yêu cầu

- **Node.js** v16+
- **MySQL** 5.7+ hoặc 8.0+
- **npm** (đi kèm Node.js)

## Các bước chạy dự án

### 1. Cài đặt dependencies

```bash
npm install
```

### 2. Tạo database

#### Cái này là bài todo list nên database chỉ có này

Mở MySQL client (Command Line, MySQL Workbench) và chạy script:

```sql
-- Có thể copy nội dung từ src/utils/create_table.sql
CREATE DATABASE IF NOT EXISTS todolist;
USE todolist;

CREATE TABLE IF NOT EXISTS todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Dữ liệu mẫu (optional)
INSERT INTO todos (title, description) VALUES
  ('Học Node.js', 'Tìm hiểu Express và MySQL'),
  ('Làm bài tập MVC', 'Hoàn thiện dự án backend'),
  ('Viết API', 'Xây dựng RESTful API');
```


### 3. Cấu hình biến môi trường

Copy file `.env.example` thành `.env` và sửa thông tin cho phù hợp:

```bash
cp .env.example .env
```

Nội dung file `.env`:
```
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=mật khẩu db đó    # ← Sửa mật khẩu MySQL của bạn
DB_NAME=Tên db đã tạo
PORT=3000                    # Cổng chạy server (mặc định 3000)
```

### 4. Khởi động server


**Chạy lệnh sau để test:**
```bash
npm run dev
```

### 5. Kiểm tra

dùng Frontend cổng 3001 kết nối với BE cổng là 3000

Server sẽ chạy tại: **http://localhost:3000**

Mở trình duyệt hoặc dùng Postman/curl:

```bash
# Health check
curl http://localhost:3000

# Lấy danh sách todos
curl http://localhost:3000/api/todos

# Lấy todo theo id
curl http://localhost:3000/api/todos/1

# Tạo todo mới
curl -X POST http://localhost:3000/api/todos \
  -H "Content-Type: application/json" \
  -d '{"title": "Học thêm Express", "description": "Tìm hiểu middleware" }'

# Cập nhật todo
curl -X PUT http://localhost:3000/api/todos/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Học Node.js nâng cao", "completed": true}'

# Xóa todo
curl -X DELETE http://localhost:3000/api/todos/1
```

## API Endpoints

| Method   | Endpoint             | Mô tả               |
|----------|----------------------|----------------------|
| `GET`    | `/api/todos`         | Lấy danh sách todos  |
| `GET`    | `/api/todos/:id`     | Lấy todo theo id     |
| `POST`   | `/api/todos`         | Thêm todo mới        |
| `PUT`    | `/api/todos/:id`     | Cập nhật todo        |
| `DELETE` | `/api/todos/:id`     | Xóa todo             |
| `GET`    | `/`                  | Health check         |

## Mô hình MVC

```
Client (Browser/Postman)
    │
    ▼
src/app.js (Router chính)
    │
    ▼
src/routers/todo/index.js (Route handler)
    │
    ▼
src/routers/todo/get.js, post.js, put.js, delete.js (Controller)
    │
    ▼
src/models/todoModel.js (Model - tương tác database)
    │
    ▼
MySQL Database