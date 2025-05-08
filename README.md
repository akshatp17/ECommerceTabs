# Simple E-Commerce Web App

## Overview
A lightweight e-commerce platform where users can submit products and browse their inventory. Built with modern web technologies for a responsive and intuitive experience.

## Features
- **Product Submission**: Add new products with name, price, description, and image
- **Product Gallery**: View all submitted products in a clean card layout
- **Real-time Updates**: New products appear immediately in the gallery
- **Search Functionality**: Filter products by name or keywords

## Tech Stack
| Component       | Technology       |
|-----------------|------------------|
| Frontend        | React.js + Tailwind CSS |
| Backend         | Node.js + Express|
| Database        | PostgreSQL       |
| Version Control | GitHub           |

## Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm or yarn
- PostgreSQL 12+
- Git

### 1. Clone Repository
```bash
git clone https://github.com/akshatp17/ECommerceTabs.git
cd ECommerceTabs
```

### 2. Backend Setup
```bash
cd backend
npm install
```
#### Create .env file
```bash
PORT = 8080
DB_USER=your_username
DB_HOST=localhost
DB_NAME=ecommerce
DB_PASSWORD=your_password
DB_PORT=5432
```

### 3. Start server
```bash
nodemon index.js
or
npm start
```

### 4. Frontend Setup
```bash
cd client
npm install
```

### 5. Start development server:
```bash
npm run dev
```
