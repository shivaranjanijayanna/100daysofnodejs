import express from "express";

const app = express();

app.use(express.static("public"));
app.get("/api", (req, res) => {
  res.json({ message: "API endpoint is working!" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
