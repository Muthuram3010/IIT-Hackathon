const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  data: {
    type: Object, // Store AI/ML analytics data here
    required: true,
  },
  generatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
