# 📊 Users CRUD App (Vite + Vanilla JS)

A CRUD (Create, Read, Update, Delete) application built with Vanilla JavaScript and Vite.  
It manages a list of users stored in a JSON-based data source and provides full table management functionality.

---

## 📌 About the project

This project simulates a real-world admin dashboard where users can be listed, created, edited, and deleted.

It also includes pagination and dynamic table rendering using JavaScript.

---

## 🧰 Tech Stack

- Vite  
- Vanilla JavaScript  
- HTML  
- CSS  
- JSON (mock database)

---

## 📂 Data Structure

Example of a user object:

```json
{
  "id": 1,
  "isActive": false,
  "balance": 1397.32,
  "avatar": "http://placehold.it/32x32",
  "first_name": "Ryan",
  "last_name": "Kent",
  "gender": "male"
}

## ▶️ How to run the project locally

### 1. Install dependencies
```bash
npm install

npm run dev

# Build for production
npm run build

# Preview build
npm run preview