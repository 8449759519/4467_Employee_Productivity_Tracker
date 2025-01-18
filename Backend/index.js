import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import { userRouter } from "./router/userRouter.js";

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

app.use("/user", userRouter);

app.listen(5000, async () => {
  try {
    // Connect to MongoDB
    await connect(
      "mongodb+srv://ab422380:newPassword@cluster0.ckd1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Connected to MongoDB and server started on port 5000");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
