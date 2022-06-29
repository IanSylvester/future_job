const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Import routes
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/users', userRoutes);

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://joey:aaaaaaaa@cluster0.yjikia1.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// test for root route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Possible route file structure:
// app.use("/api/users", require("./routes/users"));
