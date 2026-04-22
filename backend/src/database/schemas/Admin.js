const mongoose = require('mongoose');
const BaseUser = require('./BaseUser');

const AdminSchema = new mongoose.Schema({
  adminLevel: {
    type: String,
    enum: ['superadmin', 'moderator'],
    default: 'moderator',
  },
  permissions: {
    type: [String],
    default: [],
  },
});

module.exports = BaseUser.discriminator('admin', AdminSchema);
