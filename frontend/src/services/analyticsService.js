import axios from 'axios';

const API_URL = 'http://localhost:5000/api/analytics';

export const fetchAnalytics = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
