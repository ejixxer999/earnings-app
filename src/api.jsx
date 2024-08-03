import axios from 'axios'


const API_KEY = 'YRS1XKF3RUKGOR7J'
const BASE_URL = 'https://www.alphavantage.co/query'

export const getEarningsReports = async (symbol) => {
    try {
      const response = await axios.get(`${BASE_URL}?function=EARNINGS&symbol=${symbol}&apikey=${API_KEY}`);
      console.log('API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching earnings reports:', error);
      throw error;
    }
  };



  