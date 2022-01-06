const notFoundHandler = (req, res, next) => {
  const statusCode = res.statusCode === 200 ? 404 : res.statusCode;

  res.status(statusCode);
  res.json({
    message: 'The requested resource could not be found',
  });
};

export default notFoundHandler;
