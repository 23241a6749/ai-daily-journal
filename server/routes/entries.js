const express = require('express');
const router = express.Router();
const Entry = require('../models/Entry');
const { generateSummaryAndMood } = require('../ai/summary');

// POST /api/entries → Create a new entry
router.post('/', async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Journal content is required' });
    }

    // Use OpenAI to get summary and mood
    const { summary, mood } = await generateSummaryAndMood(content);

    // Save entry to MongoDB
    const newEntry = new Entry({ content, summary, mood });
    await newEntry.save();

    res.status(201).json(newEntry);
  } catch (err) {
  console.error('🔥 Detailed error:', err);
  res.status(500).json({ error: 'Failed to create entry' });
}

});

// GET /api/entries → Fetch all entries
router.get('/', async (req, res) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 }); // latest first
    res.json(entries);
  } catch (err) {
    console.error('🔥 FULL ERROR:', err);
    res.status(500).json({ error: 'Failed to fetch entries' });
  }
});

module.exports = router;
