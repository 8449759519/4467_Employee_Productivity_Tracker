import { Schema, model } from "mongoose";

const trackerSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 255,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      required: true,
    },
    reference: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    userId: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tracker = model("Tracker", trackerSchema);

export { Tracker };
