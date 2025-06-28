import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { API_URL } from './config';

function App() {
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/api/entries`)
      .then((res) => setEntries(res.data))
      .catch((err) => console.error('Error fetching entries:', err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post(`${API_URL}/api/entries`, { content });
      setEntries([res.data, ...entries]);
      setContent('');
    } catch (err) {
      console.error('Error saving entry:', err);
      alert('Something went wrong while saving your entry.');
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>📝 AI-Powered Daily Journal</h1>

      <form onSubmit={handleSubmit}>
        <textarea
          rows="4"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write about your day..."
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Analyzing...' : 'Submit Entry'}
        </button>
      </form>

      <hr />

      <h2>🕒 Journal Timeline</h2>
      {entries.map((entry) => (
        <div key={entry._id} className="entry">
          <p><strong>Original:</strong> {entry.content}</p>
          <p><strong>Summary:</strong> {entry.summary}</p>
          <p><strong>Mood:</strong> {entry.mood}</p>
          <p><em>{new Date(entry.createdAt).toLocaleString()}</em></p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
