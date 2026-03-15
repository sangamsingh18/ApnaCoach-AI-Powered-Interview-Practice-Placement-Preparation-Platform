# 🎯 ApnaCoach — AI-Powered Interview Practice Platform

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Groq-Llama_3.3_70B-orange?style=for-the-badge&logo=groq&logoColor=white" />
  <img src="https://img.shields.io/badge/Razorpay-Payments-02042B?style=for-the-badge&logo=razorpay&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.x-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Axios-1.x-5A29E4?style=for-the-badge&logo=axios&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.x-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
</p>


> **ApnaCoach** is a full-stack AI-powered interview preparation platform where users can upload their resume, choose their interview mode, answer AI-generated questions within a time limit, and receive detailed performance reports with scores on confidence, communication, and correctness.

---

## 📋 Table of Contents

1. [Features](#-features)
2. [Tech Stack](#-tech-stack)
3. [Project Architecture](#-project-architecture)
4. [Folder Structure](#-folder-structure)
5. [Full Workflow](#-full-workflow)
6. [API Endpoints](#-api-endpoints)
7. [Installation & Setup](#-installation--setup)
8. [Environment Variables](#-environment-variables)
9. [Credits & Payment System](#-credits--payment-system)
10. [Future Improvements](#-future-improvements)
11. [Author](#-author)

---

## ✨ Features

- 🤖 **AI-Generated Questions** — Context-aware questions based on resume, role, experience, and interview mode (HR / Technical) powered by **Groq Llama-3.3-70b**.
- 📄 **Resume Analysis** — Upload PDF resume; AI extracts role, skills, projects, and experience automatically using **PDF.js**.
- ⏱️ **Timed Answering** — Each question has a difficulty-based time limit (60s / 90s / 120s); unanswered or overtime answers score 0.
- 📊 **Detailed Performance Report** — Per-question scores for Confidence, Communication, and Correctness with human-like AI feedback.
- 📈 **Interview History** — View all past interviews with role, mode, date, and final score.
- 📥 **PDF Export** — Download interview reports as PDF using **jsPDF + AutoTable**.
- 💰 **Credit-Based System** — Each interview consumes 50 credits; new users start with 100 free credits.
- 💳 **Razorpay Payments** — Buy credit packs via Razorpay with HMAC SHA-256 signature verification.
- 🔐 **Firebase Authentication** — Secure Google Sign-In / Sign-Up via Firebase Auth.
- 📱 **Fully Responsive** — Mobile-friendly UI built with TailwindCSS 4.0.

---

## 🛠️ Tech Stack

### Frontend (Client)
| Technology | Version | Purpose |
|---|---|---|
| **React** | 19 | UI component library |
| **Vite** | 7 | Lightning-fast build tool & dev server |
| **TailwindCSS** | 4 | Utility-first CSS styling |
| **Redux Toolkit** | 2.x | Global state management (user, auth, interview) |
| **React Router DOM** | 7 | Client-side routing |
| **Firebase** | 12.x | Google Authentication |
| **Axios** | 1.x | HTTP client for API calls |
| **Recharts** | 3.x | Performance score charts and graphs |
| **React Circular Progressbar** | 2.x | Circular score visualizations |
| **Motion** | 12.x | Smooth animations and transitions |
| **React Icons** | 5.x | Icon library |
| **jsPDF + jspdf-autotable** | 4.x / 5.x | PDF report generation & download |

### Backend (Server)
| Technology | Version | Purpose |
|---|---|---|
| **Node.js** | — | JavaScript runtime |
| **Express** | 5 | Web server framework |
| **MongoDB + Mongoose** | 9.x | Database & ODM |
| **Razorpay** | 2.x | Payment gateway integration |
| **Groq API (Llama 3.3 70B)** | — | Ultra-fast AI question generation & answer evaluation |
| **pdfjs-dist** | 5.x | Server-side PDF text extraction |
| **Multer** | 2.x | Resume (PDF) file upload handling |
| **JWT (jsonwebtoken)** | 9.x | Auth token generation & verification |
| **Cookie Parser** | 1.x | JWT cookie management |
| **bcrypt / crypto** | built-in | Razorpay HMAC signature verification |
| **dotenv** | 17.x | Environment variable management |
| **CORS** | 2.x | Cross-origin request handling |
| **Nodemon** | 3.x | Dev server auto-restart |

---

## 🏗️ Project Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT (React + Vite)                 │
│  ┌──────────┐  ┌──────────────┐  ┌────────────────────────┐ │
│  │  Firebase │  │ Redux Store  │  │  React Router DOM      │ │
│  │  Auth     │  │ (user / int) │  │  (7+ pages / routes)   │ │
│  └──────────┘  └──────────────┘  └────────────────────────┘ │
│  Pages: Home | Auth | InterviewPage | InterviewReport |      │
│          InterviewHistory | Pricing                          │
│  Components: Navbar | Step1SetUp | Step2Interview |          │
│              Step3Report | Footer | Timer | AuthModal        │
└─────────────────┬───────────────────────────────────────────┘
                  │  REST API (Axios + Cookie JWT)
                  ▼
┌─────────────────────────────────────────────────────────────┐
│                      SERVER (Express.js)                     │
│  Routes: /api/auth | /api/user | /api/interview | /api/payment│
│  Middleware: isAuth (JWT cookie check)                       │
│  Controllers: auth | interview | payment | user              │
│  Services:  Groq Service (Llama 3.3 70B) | Razorpay          │
└────────────┬────────────────────────────┬───────────────────┘
             │                            │
             ▼                            ▼
    ┌─────────────────┐       ┌──────────────────────┐
    │   MongoDB Atlas  │       │  External APIs        │
    │   Collections:   │       │  - Groq Cloud AI      │
    │   - Users        │       │  - Razorpay Gateway   │
    │   - Interviews   │       │  - Firebase Auth      │
    │   - Payments     │       └──────────────────────┘
    └─────────────────┘
```

---

## 📁 Folder Structure

```
ApnaCoach_AI_Interview_Platform/
│
├── client/                        # React frontend
│   ├── public/                    # Static public assets
│   ├── src/
│   │   ├── assets/                # Images, icons, videos (AI avatars)
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Navbar.jsx         # Navigation bar + auth state
│   │   │   ├── Step1SetUp.jsx     # Interview setup form (step 1)
│   │   │   ├── Step2Interview.jsx # Live interview session (step 2)
│   │   │   ├── Step3Report.jsx    # Final score report (step 3)
│   │   │   ├── Timer.jsx          # Countdown timer component
│   │   │   ├── Footer.jsx         # Modern SaaS Footer
│   │   │   └── AuthModel.jsx      # Auth popup modal
│   │   ├── pages/                 # Route-level page components
│   │   │   ├── Home.jsx           # Landing page
│   │   │   ├── Auth.jsx           # Login / Register page
│   │   │   ├── InterviewPage.jsx  # Main interview wrapper
│   │   │   ├── InterviewReport.jsx# Saved report viewer
│   │   │   ├── InterviewHistory.jsx # All past interviews
│   │   │   └── Pricing.jsx        # Credit purchase plans
│   │   ├── redux/                 # Redux Toolkit store, userSlice, interviewSlice
│   │   ├── utils/                 # serverUrl utility, axios config etc.
│   │   ├── App.jsx                # Root app with routing
│   │   ├── main.jsx               # React DOM entry point
│   │   └── index.css              # Global Tailind 4 styles
│   ├── index.html                 # HTML entry point
│   ├── vite.config.js             # Vite configuration + proxy
│   └── package.json
│
├── server/                        # Node.js + Express backend
│   ├── config/
│   │   └── connectDb.js           # MongoDB connection setup
│   ├── controllers/
│   │   ├── auth.controller.js     # Firebase token verification + JWT issue
│   │   ├── interview.controller.js# Resume parse, Q gen, answer eval
│   │   ├── payment.controller.js  # Razorpay order + payment verify
│   │   └── user.controller.js     # Get current user info
│   ├── middlewares/
│   │   └── isAuth.js              # JWT auth middleware
│   ├── models/
│   │   ├── user.model.js          # User schema (name, email, credits)
│   │   ├── interview.model.js     # Interview + questions schema
│   │   └── payment.model.js       # Payment records schema
│   ├── routes/
│   │   ├── auth.route.js          # POST /api/auth/verify
│   │   ├── interview.route.js     # Interview CRUD routes
│   │   ├── payment.route.js       # Payment routes
│   │   └── user.route.js          # User routes
│   ├── services/
│   │   ├── groq.service.js        # Groq AI Service (Llama 3.3 70B)
│   │   └── razorpay.service.js    # Razorpay instance
│   ├── public/                    # Uploaded resume temporary storage
│   ├── index.js                   # Express app entry point
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🔄 Full Workflow

### 1️⃣ Authentication
1. User clicks **Sign In** → Firebase Google Sign-In popup.
2. Firebase returns an **ID Token**.
3. Client sends ID token to `POST /api/auth/verify`.
4. Server verifies with Firebase, creates/finds user in MongoDB, issues a **JWT cookie**.
5. User is now authenticated; credits default to **100** on first sign-up.

### 2️⃣ Interview Setup (Step 1)
1. User fills: **Job Role**, **Experience Level**, **Interview Mode** (HR / Technical).
2. Optionally **uploads PDF resume**.
3. Server reads PDF with `pdfjs-dist`, extracts text, sends to **Groq Cloud AI**.
4. AI returns structured JSON: `{ role, experience, skills[], projects[] }`.
5. User reviews and confirms → proceeds to live session.

### 3️⃣ AI Question Generation
1. Client sends role, experience, mode, skills, projects, and resume text to `POST /api/interview/generate-questions`.
2. Server checks user has **≥ 50 credits**.
3. Groq AI generates **5 interview questions** with difficulty progression: `easy → easy → medium → medium → hard`.
4. Each question is given a **time limit**: `60s / 60s / 90s / 90s / 120s`.
5. Interview record is created in MongoDB; **50 credits deducted** from user balance.

### 4️⃣ Live Interview Session (Step 2)
1. User interacts with a **Male/Female AI Avatar**.
2. Questions are displayed **one at a time** with a live countdown timer.
3. Instructions are read aloud using **Web Speech Synthesis (TTS)**.
4. User types their answer before the timer runs out.
5. On submit, answer is sent to `POST /api/interview/submit-answer`.
6. AI evaluates the answer in real-time on 3 dimensions: **Confidence**, **Communication**, and **Correctness**.
7. AI returns `finalScore` and short human-like feedback.

### 5️⃣ Final Report (Step 3)
1. After all questions, `POST /api/interview/finish` computes the aggregate score.
2. Full report displayed with:
   - Performance metrics charts.
   - Individual question-wise breakdown.
3. User can **download PDF report** for offline viewing.

---

## 🔌 API Endpoints

### Auth
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/auth/google` | Verify Firebase + issue JWT | ❌ |
| `GET` | `/api/auth/logout` | Clear auth cookie | ✅ |

### User
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `GET` | `/api/user/current-user` | Get logged-in user details | ✅ |

### Interview
| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/interview/resume` | Extract resume data via AI | ✅ |
| `POST` | `/api/interview/generate-questions` | Create new interview session | ✅ |
| `POST` | `/api/interview/submit-answer` | Submit answer for evaluation | ✅ |
| `POST` | `/api/interview/finish` | Finalize interview report | ✅ |
| `GET` | `/api/interview/get-interview` | List all user interviews | ✅ |
| `GET` | `/api/interview/report/:id` | Get specific interview data | ✅ |

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js ≥ 18
- MongoDB (local or Atlas)
- Firebase Project
- Groq Cloud API Key
- Razorpay Key & Secret

### 1. Clone the Repository
```bash
git clone https://github.com/sangamsingh18/ApnaCoach_AI_Interview_Platform.git
cd ApnaCoach_AI_Interview_Platform
```

### 2. Setup the Server
```bash
cd server
npm install
```

Create a `.env` file in `/server`:
```env
PORT=8000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_secret_key
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama-3.3-70b-versatile
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

Start the server:
```bash
npm run dev
```

### 3. Setup the Client
```bash
cd ../client
npm install
```

Create a `.env` file in `/client`:
```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Start the client:
```bash
npm run dev
```

The app will be running at:
- **Frontend:** `http://localhost:5173`
- **Backend:** `http://localhost:8000`

---

## 👨‍💻 Author

**Sangam Singh**
- GitHub: [@sangamsingh18](https://github.com/sangamsingh18)
- Project Repository: [ApnaCoach_AI_Interview_Platform](https://github.com/sangamsingh18/ApnaCoach_AI_Interview_Platform)

---

<p align="center">
  Made with ❤️ by Sangam Singh | 18
</p>