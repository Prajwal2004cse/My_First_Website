const fetch = require('node-fetch');

// Function to register a new admin
async function registerAdmin(username, password) {
  try {
    const response = await fetch('http://localhost:3000/api/admin/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    const result = await response.json();
    console.log(`Registration attempt for ${username}:`, result);
  } catch (error) {
    console.error(`Error registering ${username}:`, error);
  }
}

// Create multiple admin users
async function createAdmins() {
  const admins = [
    { username: 'admin1', password: 'adminPass123' },
    { username: 'admin2', password: 'securePass456' },
    // Add more admins as needed
  ];

  for (const admin of admins) {
    await registerAdmin(admin.username, admin.password);
  }
}

createAdmins();