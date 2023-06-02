const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

//Available routes
app.use("/api", require("./routes/updateData.js"));
app.use("/api", require("./routes/getData.js"));

const start = async () => {
  try {
    await connectToMongo(process.env.mongoURI);
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
