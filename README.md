# Learnify - Fullstack LMS App 🚀

> A complete Learning Management System (LMS) application built from scratch using **React.js**, **Node.js**, **Express.js**, and **MongoDB**.  

---

## 🌟 About Learnify

**Learnify** is a full-fledged LMS platform where users can register, log in, explore courses, purchase courses, and track their learning progress. Admins can manage courses, upload lectures, and control publishing status.

This project combines frontend development (React.js with Shadcn UI) and backend development (Node.js, Express.js, MongoDB) along with modern tools like **Redux Toolkit Query**, **Multer**, **Cloudinary**, **Stripe API**, and **React Router Dom**.

⭐ **Please give the repository a star if you find it useful!**

---

## 🚀 Tech Stack

- **Frontend:**
  - React.js
  - Redux Toolkit Query
  - Shadcn UI
  - React Router Dom
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Multer
  - Cloudinary
  - Stripe API

---

## 📚 Key Features

- User Authentication (Login / Signup)
- Admin Dashboard (Manage Courses, Upload Lectures)
- Upload & Manage Media with Cloudinary
- Course Creation, Editing, Publishing
- Purchase Courses using Stripe Payment Gateway
- Track Course Progress
- Search & Filter Courses
- Light/Dark Mode Toggle
- Protected Routes
- Full API Integration with RTK Query
- Fully Responsive Design

---

## 🛠️ Project Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Surendrakumarpatel/learnify.git
cd learnify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables
Create a .env file in the root directory and add the following:

MONGODB_URI=your_mongodb_uri
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
JWT_SECRET=your_jwt_secret

### 4. Run the App
```bash
npm run dev
```
