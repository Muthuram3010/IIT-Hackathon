const Course = require('../models/Course');

// Create a new course
exports.createCourse = async (req, res) => {
  const { title, description, instructor } = req.body;
  try {
    const newCourse = new Course({ title, description, instructor });
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get course by ID
exports.getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
