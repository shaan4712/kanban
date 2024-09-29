const API_URL = process.env.NODE_ENV === 'production' 
  ? '/.netlify/functions/api' 
  : 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchTickets = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// const API_URL = process.env.NODE_ENV === 'production' 
//   ? '/api/proxy' 
//   : 'https://api.quicksell.co/v1/internal/frontend-assignment';

// export const fetchTickets = async () => {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };

// export const fetchTickets = async () => {
//   try {
//     console.log('Fetching data from API...');
//     const response = await fetch('/v1/internal/frontend-assignment');
//     console.log('Response received:', response);
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     const text = await response.text(); // Get the raw text first
//     console.log('Raw response:', text);
    
//     try {
//       const data = JSON.parse(text);
//       console.log('Data parsed successfully:', data);
//       return data;
//     } catch (parseError) {
//       console.error('Error parsing JSON:', parseError);
//       throw new Error('Invalid JSON response from server');
//     }
//   } catch (error) {
//     console.error('Error fetching tickets:', error);
//     throw error;
//   }
// };