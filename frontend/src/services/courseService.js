import axios from 'axios';

const API_URL = 'http://localhost:5000/api/courses';

export const fetchCourses = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createCourse = async (courseData) => {
  try {
    const response = await axios.post(API_URL, courseData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
