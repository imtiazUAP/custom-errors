// errorHandler.js

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'An unexpected error occurred.';
  
    res.status(statusCode).json({
      status: 'error',
      statusCode,
      message
    });
  };
  
  export default errorHandler;
  