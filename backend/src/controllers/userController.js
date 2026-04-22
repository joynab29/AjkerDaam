const BaseUser = require('../database/schemas/BaseUser');
const Consumer = require('../database/schemas/Consumer');
const Vendor = require('../database/schemas/Vendor');
const Admin = require('../database/schemas/Admin');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// Helper to send response with JWT cookie
const sendTokenResponse = (user, statusCode, res) => {
  const token = generateToken(user._id);

  const options = {
    expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res.status(statusCode).cookie('jwt', token, options).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    token,
  });
};

// @desc    Register user
// @route   POST /api/users/register
// @access  Public
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, role, ...otherData } = req.body;

    const userExists = await BaseUser.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    let user;
    if (role === 'vendor') {
      user = await Vendor.create({
        name,
        email,
        password,
        role: 'vendor',
        shopName: otherData.shopName || 'Temp Shop',
        shopLocation: otherData.shopLocation || 'Temp Location',
        ...otherData
      });
    } else if (role === 'admin') {
      user = await Admin.create({
        name,
        email,
        password,
        role: 'admin',
        ...otherData
      });
    } else {
      user = await Consumer.create({
        name,
        email,
        password,
        role: 'consumer',
        ...otherData
      });
    }

    if (user) {
      sendTokenResponse(user, 201, res);
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await BaseUser.findOne({ email }).select('+password');

    if (user && (await user.matchPassword(password))) {
      sendTokenResponse(user, 200, res);
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
exports.logoutUser = (req, res) => {
  res.cookie('jwt', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ message: 'User logged out successfully' });
};
