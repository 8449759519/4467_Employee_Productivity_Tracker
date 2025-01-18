import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import { userRouter } from "./router/userRouter.js";
let app = express();
app.use(express.json());
app.use("/user", userRouter);
// app.use(
//   cors({
//     origin: "http://127.0.0.1:5500",
//   })
// );

app.use(cors({ origin: "*" }));
app.listen(5000, async () => {
  let connection = await connect(
    "mongodb+srv://ab422380:newPassword@cluster0.ckd1k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("server has started on port 5000");
});
