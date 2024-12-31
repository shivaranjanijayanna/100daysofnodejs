import express from "express";

const app = express();
const Port = 3001;

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to root URL of server");
});

app.get("/hello", (req, res) => {
  res.set("Content-Type", "text/html");
  res.status(200).send("<h1>Hello World!</h1>");
});

app.use(express.json());
app.post("/", (req, res) => {
  const { name, age } = req.body;
  res.status(200);
  res.send(`Welcome ${name} ${age}`);
});

app.listen(Port, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port" + Port
    );
  else console.log("Error occured, server can't start", error);
});
