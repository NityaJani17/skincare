const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

const users = [
  { username: 'user1', password: 'Password123' },
  { username: 'user2', password: 'Secret456' },
];


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ error: 'Login failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
