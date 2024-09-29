const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const apiRes = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
    const data = await apiRes.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('API call failed:', error);
    res.status(500).json({ error: 'Failed to fetch data from API' });
  }
};