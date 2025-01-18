const Analytics = require('../models/Analytics');

// Generate analytics for a course
exports.generateAnalytics = async (req, res) => {
  const { courseId, data } = req.body;
  try {
    const newAnalytics = new Analytics({ course: courseId, data });
    await newAnalytics.save();
    res.status(201).json(newAnalytics);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
