const express = require("express");
const helmet = require("helmet");
const db = require("./data/db-config");

const server = express();
const port = process.env.PORT || 6000;

server.use(helmet());
server.use(express.json());

server.get("/api/recipes", async (req, res, next) => {
  try {
    res.json(await db("recipes"));
  } catch (err) {
    next(err);
  }
});

server.use((err, req, res, next) => {
  console.log("error:", err);

  res.status(500).json({
    message: "something went wrong"
  });
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
