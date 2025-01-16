import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const app = express();
const port = 3001;
const secret_key = "your_secret_key_here";
const users = [];

app.use(express.json());

app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find((user) => user.username === username);
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: "User reigstered successfully" });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ error: "Invalid username or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ error: "Invalid username or password" });
  }

  const token = jwt.sign({ username }, secret_key, { expiresIn: "1h" });

  res.json({ message: "Login successful", token });
});

app.get("/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Invalid token" });
    }
    res.json({ message: "Welcome to the protected route", user: decoded });
  });
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
