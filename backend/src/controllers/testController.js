// @desc    Ping server for health check
// @route   GET /api/ping
// @access  Public
exports.ping = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is up and running!',
    timestamp: new Date().toISOString(),
  });
};
