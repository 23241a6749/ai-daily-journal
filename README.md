# 📝 AI-Powered Daily Journal

An intelligent web app that helps you **track your thoughts**, **summarize your day**, and **analyze your mood** using **Natural Language Processing** and **Hugging Face models**. Built with **React**, **Express.js**, **MongoDB**, and Hugging Face's Inference API.

---

## 🌍 Live Demo

- 🔗 **Frontend (React on Vercel)**: (https://ai-daily-journal.vercel.app)  ](https://ai-daily-journal-kw75.vercel.app/)
- ⚙️ **Backend (Express on Render)**: [https://ai-daily-journal-api.onrender.com](https://ai-daily-journal-api.onrender.com)

---

## ✨ Features

- 📝 Create daily journal entries.
- 🧠 Summarization using the `facebook/bart-large-cnn` model.
- 😄 Mood detection using `cardiffnlp/twitter-roberta-base-sentiment`.
- 📅 Timeline view of all entries.
- 🔐 Environment variable support for secure keys.

---

## 🧠 Powered By

- 🤗 [facebook/bart-large-cnn](https://huggingface.co/facebook/bart-large-cnn) — summarization
- 🤗 [cardiffnlp/twitter-roberta-base-sentiment](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment) — sentiment analysis
- 🤗 Hugging Face Inference API

---

## 🛠 Tech Stack

| Frontend | Backend     | AI/NLP       | Database |
|----------|-------------|--------------|----------|
| React    | Express.js  | Hugging Face | MongoDB  |

---

## 📁 Folder Structure

```
ai-daily-journal/
├── client/     # React frontend
└── server/     # Express backend + AI + MongoDB
```

---

## 🚀 Getting Started Locally

### ✅ Prerequisites

- Node.js and npm
- MongoDB Atlas account
- Hugging Face API key

---

### 📦 1. Clone the Repo

```bash
git clone https://github.com/23241a6749/ai-daily-journal.git
cd ai-daily-journal
```

---

### ⚙️ 2. Setup Server

```bash
cd server
npm install
```

Create a `.env` file:

```
PORT=5000
MONGODB_URI=your_mongodb_connection_uri
HUGGINGFACE_API_KEY=your_huggingface_api_key
```

Run the server:

```bash
node index.js
```

---

### 💻 3. Setup Client

```bash
cd ../client
npm install
```

Create a file: `src/config.js`

```js
export const API_URL = "https://ai-daily-journal-api.onrender.com";
```

Run the app:

```bash
npm start
```

---

## 🧪 Sample Entry

**Input:**

```
I had a great day today! I completed my project and spent quality time with my family. Feeling proud and happy.
```

**Summary:**

> "I had a great day today! I completed my project and spent quality time with my family," she said. "Feeling proud and optimistic."

**Mood:**

> positive

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---

## 🙏 Acknowledgements

- Hugging Face Transformers
- MongoDB Atlas
- Render (for server deployment)
- Vercel (for frontend hosting)
