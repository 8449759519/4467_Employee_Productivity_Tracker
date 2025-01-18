import express from "express";
import { connect } from "mongoose";
import { userRouter } from "./router/userRouter.js";
let app = express();
app.use(express.json());
app.use("/user", userRouter);

app.listen(5000, async () => {
  let connection = await connect(
    "mongodb+srv://ab422380:newPassword@cluster0.ckd1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("server has started on port 5000");
});
