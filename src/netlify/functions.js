const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  console.log('Netlify function called');
  try {
    console.log('Attempting to fetch from API');
    const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    console.log('Raw response:', text);
    
    const data = JSON.parse(text);
    console.log('Parsed data:', data);
    
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    console.error('Error in Netlify function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch data', details: error.message })
    };
  }
};