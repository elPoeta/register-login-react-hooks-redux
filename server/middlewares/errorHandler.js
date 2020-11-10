const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  next(error);
}

const errorHandler = (req, res, next) => {
  const statusCode = req.statusCode === 200 ? 500 : req.statusCode;
  res.status(statusCode)
    .json({
      message: error.message,
      stack: process.env.NODE_ENV === 'production' ? null : error.stack
    });
}

export {
  notFound,
  errorHandler
}