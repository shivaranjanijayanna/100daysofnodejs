import express from "express";

const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the POST request practice!");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  console.log("Recieved data:", req.body);

  res.json({
    message: "Data recieved successfully",
    receivedData: { name, email },
  });
});
