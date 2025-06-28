const fetch = require('node-fetch');

const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;

const summarizationURL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
const sentimentURL = 'https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment'; // ✅ working one

async function queryHuggingFace(text, url) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: text }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Hugging Face API error: ${response.status} ${response.statusText} — ${errorText}`);
  }

  const result = await response.json();
  return result;
}

async function generateSummaryAndMood(text) {
  try {
    const summaryResult = await queryHuggingFace(text, summarizationURL);
    const sentimentResult = await queryHuggingFace(text, sentimentURL);

    const summary = summaryResult[0]?.summary_text || 'Could not summarize';

    let mood = 'unknown';
  if (Array.isArray(sentimentResult) && sentimentResult.length > 0) {
  const scores = sentimentResult[0];
  const sorted = scores.sort((a, b) => b.score - a.score);

  const labelMap = {
    LABEL_0: 'negative',
    LABEL_1: 'neutral',
    LABEL_2: 'positive'
  };

  mood = labelMap[sorted[0]?.label?.toUpperCase()] || 'unknown';
}


    return { summary, mood };
  } catch (err) {
    console.error('❌ Hugging Face API error:', err);
    return { summary: 'Unable to generate summary.', mood: 'unknown' };
  }
}

module.exports = { generateSummaryAndMood };
