import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import { userRouter } from "./router/userRouter.js";

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Enable CORS for all origins (Allow everyone to access the API)
app.use(cors({ origin: "*" }));

// Route for user-related operations
app.use("/user", userRouter);

// Start the server
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
