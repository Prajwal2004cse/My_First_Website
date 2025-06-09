const bcrypt = require('bcrypt');

const createAdmin = async () => {
  const username = 'admin1';
  const password = 'admin123'; // Change this to your desired password
  const saltRounds = 10;

  try {
    const hash = await bcrypt.hash(password, saltRounds);
    console.log('Admin Credentials:');
    console.log(`Username: ${username}`);
    console.log(`Hashed Password: ${hash}`);
    console.log('Add these to your server.js mock database or actual database.');
  } catch (error) {
    console.error('Error generating hash:', error);
  }
};

createAdmin();