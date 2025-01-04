import express from "express";

const app = express();
const port = 3001;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home", (req, res) => {
  res.send("Home Page!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
