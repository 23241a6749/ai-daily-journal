const fetch = require('node-fetch');

const HUGGINGFACE_API_KEY = process.env.HUGGINGFACE_API_KEY;

const summarizationURL = 'https://api-inference.huggingface.co/models/facebook/bart-large-cnn';
const sentimentURL = 'https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment';

async function queryHuggingFace(text, url) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${HUGGINGFACE_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ inputs: text }),
  });

  const result = await response.json();
  return result;
}

async function generateSummaryAndMood(text) {
  try {
    const summaryResult = await queryHuggingFace(text, summarizationURL);
    const sentimentResult = await queryHuggingFace(text, sentimentURL);

    const summary =
      Array.isArray(summaryResult) && summaryResult[0]?.summary_text
        ? summaryResult[0].summary_text
        : 'Could not summarize';

    const labelMap = {
      LABEL_0: 'negative',
      LABEL_1: 'neutral',
      LABEL_2: 'positive',
    };

    const mood =
      Array.isArray(sentimentResult) && sentimentResult[0]?.label
        ? labelMap[sentimentResult[0].label] || 'unknown'
        : 'unknown';

    return { summary, mood };
  } catch (err) {
    console.error('❌ Hugging Face API error:', err);
    return {
      summary: 'Unable to generate summary.',
      mood: 'unknown',
    };
  }
}

module.exports = { generateSummaryAndMood };
