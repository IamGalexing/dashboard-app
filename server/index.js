import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";

import connectDB from "./mongodb/connect.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send({ message: "Hello world!" });
});

const startServer = async () => {
  try {
    //connect to database...
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server started at port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();