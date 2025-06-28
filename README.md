# 📝 AI-Powered Daily Journal

An intelligent web app that helps you **track your thoughts**, **summarize your day**, and **analyze your mood** using **NLP and machine learning**. Built with **React**, **Express**, **MongoDB**, and integrated with **Hugging Face Transformers API**.

---

## 🚀 Live Demo

- 🌐 **Frontend**: [https://ai-daily-journal.vercel.app](https://ai-daily-journal.vercel.app)  
- 🛠️ **Backend API**: [https://ai-daily-journal-api.onrender.com](https://ai-daily-journal-api.onrender.com)

---

## ✨ Features

- 📓 Add daily journal entries
- 🤖 Auto-generated **summary** using BART model
- 😊 Mood detection using **sentiment analysis**
- 📜 Timeline view of past entries
- 🌐 Fully deployed on **Vercel (client)** and **Render (server)**

---

## 🧠 Powered By

- `facebook/bart-large-cnn` for summarization  
- `cardiffnlp/twitter-roberta-base-sentiment` for mood detection  
- Hugging Face Inference API

---

## 🛠 Tech Stack

| Frontend | Backend     | AI/NLP       | Database |
|----------|-------------|--------------|----------|
| React    | Express.js  | Hugging Face | MongoDB  |

---

## 🧑‍💻 Getting Started (Local Setup)

### Prerequisites

- Node.js and npm
- MongoDB Atlas account
- Hugging Face API key

### 1. Clone the Repo

```bash
git clone https://github.com/23241a6749/ai-daily-journal.git
cd ai-daily-journal
```

### 2. Setup Server (`server/`)

```bash
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
MONGODB_URI=your_mongodb_uri
HUGGINGFACE_API_KEY=your_huggingface_key
```

Run the server:

```bash
node index.js
```

### 3. Setup Client (`client/`)

```bash
cd ../client
npm install
```

Create `src/config.js`:

```js
export const API_URL = "https://ai-daily-journal-api.onrender.com";
```

Run the client:

```bash
npm start
```

---

## 🧪 Sample Journal Entry

```text
I had a great day today! I completed my project and spent quality time with my family. Feeling proud and happy.
```

**Summary:**

> "I had a great day today! I completed my project and spent quality time with my family," she said. "I'm feeling proud and optimistic."

**Mood:**

> positive

---

## 📁 Folder Structure

```
ai-daily-journal/
├── client/     → React frontend
└── server/     → Express backend + MongoDB + Hugging Face API integration
```

---

## 🧾 License

This project is licensed under the MIT License.

---

## 🤝 Acknowledgements

- Hugging Face Transformers
- Render & Vercel for hosting
