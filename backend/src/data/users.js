const bcrypt = require('bcryptjs');

// Pre-hashing password to avoid issues with insertMany skipping pre-save hooks
// Alternatively, we could use User.create() in a loop, but this is faster for seeding.
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password123', // Will be hashed below
    role: 'admin',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user',
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: 'password123',
    role: 'user',
  },
];

// Exporting a function to return users with hashed passwords
const getUsersWithHashedPasswords = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedUsers = users.map(user => ({
    ...user,
    password: bcrypt.hashSync(user.password, salt)
  }));
  return hashedUsers;
};

module.exports = getUsersWithHashedPasswords;
