/**
 * Global error handling middleware
 */
const errorHandler = (err, req, res, _next) => {
  // eslint-disable-next-line no-console
  console.error('Error:', err);

  // Default error
  let error = {
    message: err.message || 'Internal Server Error',
    status: err.status || 500
  };

  // Specific error handling
  if (err.name === 'ValidationError') {
    error.status = 400;
    error.message = 'Validation Error';
  }

  // Don't expose internal errors in production
  if (process.env.NODE_ENV === 'production' && error.status === 500) {
    error.message = 'Internal Server Error';
  }

  res.status(error.status).json({
    error: error.message,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  });
};

module.exports = errorHandler;
