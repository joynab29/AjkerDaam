const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

// Middlewares
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:5173', // Your React frontend URL
  credentials: true, // Allow cookies to be sent
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Apply rate limiting to all API requests
app.use('/api/', limiter);

// Static folder for uploads
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api', require('./routes/testRoutes'));

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to AjkerDaam API' });
});

// Error handling middleware (placeholder)
app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
});

module.exports = app;
