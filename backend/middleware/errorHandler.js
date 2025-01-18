const errorHandler = (err, req, res, next) => {
    console.error(err.message);  // Log the error for debugging
    res.status(500).json({ message: 'Server Error' });  // Send a generic error response
  };
  
module.exports = errorHandler;  // Export the error handler
  