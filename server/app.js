const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000;

//IMPORT ROUTES

const authRoute = require("./routes/auth/auth");
const surveyRoute = require("./routes/survey/survey");
const contextRoute = require("./routes/context/context");
const surveyUserRoute = require("./routes/surveyUser/surveyUser");

dotenv.config();

//CONNECTION TO DATABASE
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server up and running at ${PORT}`));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

//MIDDLEWARE

app.use(express.json(), cors());

//ROUTE MIDDLEWARE

app.use("/api/auth", authRoute);
app.use("/api/survey", surveyRoute);
app.use("/api/context", contextRoute);
app.use("/api/surveyUser", surveyUserRoute);

app.get("/", (req, res) => {
  res.send(`<p>Ai Fairness Backend !</p>`);
});
