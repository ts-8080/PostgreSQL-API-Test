const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hallo Express");
});

app.listen(PORT, () => {
  console.log("server is running on PORT" + PORT);
});
