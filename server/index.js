const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS setup: Allow only your frontend
app.use(cors({
  origin: 'https://ai-daily-journal-kw75.vercel.app',
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// ✅ MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err.message));

// ✅ Routes
const entryRoutes = require('./routes/entries');
app.use('/api/entries', entryRoutes);

// ✅ Test Route
app.get('/', (req, res) => {
  res.send('📝 AI Journal API is running');
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
