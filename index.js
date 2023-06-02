const connectToMongo = require("./db");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

//Available routes
app.use("/api", require("./routes/updateData.js"));
app.use("/api", require("./routes/getData.js"));

const start = async () => {
  try {
     await connectToMongo();
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();


