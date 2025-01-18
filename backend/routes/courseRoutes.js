const express = require('express');
const { check, validationResult } = require('express-validator'); // Import validation tools
const { createCourse, getAllCourses, getCourseById } = require('../controllers/courseController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Add validation for course creation
router.post('/',
  [
    // Validate that 'title' is not empty
    check('title').not().isEmpty().withMessage('Title is required'),
    // Validate that 'description' is not empty
    check('description').not().isEmpty().withMessage('Description is required')
  ],
  (req, res) => {
    const errors = validationResult(req);  // Get validation errors
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });  // Return errors if validation fails
    }
    createCourse(req, res);  // If validation passes, proceed to create the course
  }
);

module.exports = router;
