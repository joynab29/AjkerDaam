const mongoose = require('mongoose');
const dotenv = require('dotenv');
const BaseUser = require('./database/schemas/BaseUser');
const getUsersWithHashedPasswords = require('./data/users');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await BaseUser.deleteMany();

    const users = await getUsersWithHashedPasswords();
    await BaseUser.insertMany(users);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await BaseUser.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
