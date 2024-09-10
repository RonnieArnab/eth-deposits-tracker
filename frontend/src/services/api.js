import axios from "axios";

const API_URL = "http://localhost:5000"; // Backend API URL

export const fetchHistoricalDeposits = async () => {
  try {
    const response = await axios.get(`${API_URL}/historical`);
    return response.data;
  } catch (error) {
    console.error("Error fetching historical deposits:", error);
    throw error;
  }
};
