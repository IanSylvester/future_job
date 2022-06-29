const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// test for root route
app.get("/", (req, res) => {
  res.send("Hello World");
});


// Possible route file structure:
// app.use("/api/users", require("./routes/users"));
