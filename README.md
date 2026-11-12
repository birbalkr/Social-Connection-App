# 🌐 Social Connection App

### Connect • Share • Interact

Social Connection App is a full-stack social networking web application where users can connect with other people, share posts, upload images and videos, follow users, and interact with a community.

The application is built using React.js, Node.js, Express.js, and MongoDB with a feature-based frontend architecture.

---

## 🚀 Features

- User Registration & Login
- JWT Authentication
- Home Feed
- Create, Edit & Delete Posts
- Upload Images & Videos
- Like & Unlike Posts
- Comment on Posts
- User Profiles
- Follow & Unfollow Users
- Followers & Following
- Saved Posts
- Account Settings
- Responsive UI

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React.js | Frontend |
| JavaScript | Programming |
| HTML5 | Structure |
| CSS3 | Styling |
| Node.js | Backend Runtime |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcryptjs | Password Hashing |
| Axios | API Requests |
| React Router | Routing |
| Multer | File Upload |
| Cloudinary | Media Storage |

## 📂 Project Structure

### Frontend – Feature-Based Architecture

```text
frontend/
└── src/
    ├── app/
    │   ├── App.jsx
    │   ├── router.jsx
    │   └── providers.jsx
    │
    ├── assets/
    ├── components/
    │   ├── common/
    │   └── layout/
    │
    ├── features/
    │   ├── auth/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── services/
    │   │   └── hooks/
    │   │
    │   ├── home/
    │   ├── posts/
    │   ├── profile/
    │   ├── friends/
    │   ├── saved/
    │   └── settings/
    │
    ├── hooks/
    ├── services/
    ├── context/
    ├── utils/
    ├── styles/
    └── main.jsx
```

### Backend Architecture

```text
backend/
├── config/
├── models/
│   ├── user.model.js
│   └── post.model.js
├── controllers/
├── routes/
├── middleware/
├── validators/
├── utils/
├── app.js
└── package.json
```

## 🗄️ Database Models

### User Model
- name
- username
- email
- password
- profileImage
- bio
- followers
- following
- isVerified
- role

### Post Model
- user
- title
- description
- media
- likes
- comments
- visibility

## 📦 Installation & Setup

### 1. Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Social-Connection-App.git

cd Social-Connection-App
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start backend:

```bash
npm run dev
```

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

## 🎯 Project Objective

The objective of this project is to develop a modern social networking platform that allows users to connect, communicate, share content, and build meaningful social connections through an interactive web application.

## 👨‍💻 Author

**Developer:** Birbal Kumar

**GitHub:** [Your GitHub Profile](https://github.com/YOUR_USERNAME)

**Repository:** [Social-Connection-App](https://github.com/YOUR_USERNAME/Social-Connection-App)

---

⭐ If you like this project, don't forget to give it a star!

**Status:** 🚧 Under Development