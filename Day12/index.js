import express from "express";

const app = express();

app.get("/search", (req, res) => {
  const { keyword, page } = req.query;

  if (!keyword) {
    return res.status(400).send("Keyword is required!");
  }

  const blah = {
    message: `You searched for ${keyword}`,
    page: page ? page : 1,
  };

  res.json(blah);
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
