const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Mock database with admin credentials
const admins = [
  {
    username: 'admin1',
    password: '$2b$10$f0I4.6afDCuC1Gz8jCY3rO/KgiSb76O8PyxTDvB2OVyz1B/CPgKBG' // Replace with the hash from createAdminCredentials.js
  }
];

// Admin login endpoint
app.post('/api/login/admin', async (req, res) => {
  const { username, password } = req.body;
  const admin = admins.find(a => a.username === username);

  if (!admin) {
    return res.status(401).json({ message: 'Invalid username or password.' });
  }

  try {
    const match = await bcrypt.compare(password, admin.password);
    if (match) {
      // In a real app, you'd generate a JWT or session here
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// Serve login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Serve admin dashboard (basic protection)
app.get('/admin-dashboard.html', (req, res) => {
  // In a real app, check for session or JWT here
  res.sendFile(path.join(__dirname, 'public', 'admin-dashboard.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));