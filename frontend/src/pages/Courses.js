import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Courses.css'; // Import the CSS file

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [addedCourses, setAddedCourses] = useState([]);

  // Predefined courses (these can be fetched from the backend as well)
  const predefinedCourses = [
    { id: 1, name: 'Full Stack Development' },
    { id: 2, name: 'C Programming' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'React JS' },
    { id: 5, name: 'Machine Learning' },
  ];

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses([...predefinedCourses, ...response.data]); // Combine predefined and backend courses
      } catch (error) {
        console.error('Error fetching courses:', error);
        setCourses(predefinedCourses); // Fallback to predefined courses if backend fails
      }
    };

    fetchCourses();
  }, []);

  // Handle adding a course
  const handleAddCourse = (course) => {
    // Prevent adding duplicates
    if (addedCourses.find((added) => added.id === course.id)) {
      alert(`${course.name} is already added to your profile.`);
      return;
    }

    setAddedCourses([...addedCourses, course]);
  };

  return (
    <div className="courses-container">
      <h1>Courses</h1>
      <ul className="courses-list">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            {course.name}{' '}
            <button
              className="add-course-btn"
              onClick={() => handleAddCourse(course)}
            >
              Add Course
            </button>
          </li>
        ))}
      </ul>

      <h2>Your Profile</h2>
      {addedCourses.length > 0 ? (
        <ul className="added-courses-list">
          {addedCourses.map((course) => (
            <li key={course.id} className="added-course-item">
              {course.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-courses-message">No courses added to your profile yet.</p>
      )}
    </div>
  );
};

export default Courses;
