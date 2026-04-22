const mongoose = require('mongoose');
const BaseUser = require('./BaseUser');

const VendorSchema = new mongoose.Schema({
  shopName: {
    type: String,
    required: [true, 'Please add a shop name'],
  },
  shopLocation: {
    type: String,
    required: [true, 'Please add a shop location'],
  },
  isVerifiedVendor: {
    type: Boolean,
    default: false,
  },
  contactNumber: {
    type: String,
  },
});

module.exports = BaseUser.discriminator('vendor', VendorSchema);
