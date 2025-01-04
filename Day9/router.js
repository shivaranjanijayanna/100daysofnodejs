import express from "express";

const app = express();
const router = express.Router();
const port = 3001;

router.use((req, res, next) => {
  console.log("Router middleware executing");
  const { auth } = req.headers;
  if (auth === "secret-key") {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
});

router.get("/protected", (req, res) => {
  res.send("You accessed a protected route");
});

app.use("/api", router);

app.get("/home", router, (req, res, next) => {
  res.send("home page");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
