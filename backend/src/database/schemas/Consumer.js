const mongoose = require('mongoose');
const BaseUser = require('./BaseUser');

const ConsumerSchema = new mongoose.Schema({
  location: {
    type: String,
  },
  reputationScore: {
    type: Number,
    default: 0,
  },
});

module.exports = BaseUser.discriminator('consumer', ConsumerSchema);
