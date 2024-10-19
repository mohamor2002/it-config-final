const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userQueries = require('../db/userQueries');

const secretKey = 'secret'; // Change this to a secure key

exports.registerUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  try {
    const userExists = await userQueries.getUserByEmail(email);
    if (userExists){
      return res.status(400).json({ message: 'Email already in use.' });
    }
    const userId = await userQueries.createUser(email, hashedPassword);
    const user = await userQueries.getUserByEmail(email);
    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });

    res.status(201).json({ id: userId, email, token });
  } catch (err) {
    console.error(err); // Log the error for debugging
    res.status(400).json({ message: 'Error registering user.' });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userQueries.getUserByEmail(email);
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in.' });
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userQueries.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error getting users.' });
  }
}
