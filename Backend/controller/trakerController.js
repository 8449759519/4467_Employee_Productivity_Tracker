import { Tracker } from "../Model/trakerModel.js";

let getall = async (req, res) => {
  let result = await Tracker.find();

  res.send(result);
};

const createTask = async (req, res) => {
  try {
    const { title, priority, reference, description, userId } = req.body;

    if (!title || !priority || !userId) {
      return res
        .status(400)
        .json({ error: "Title, priority, and userId are required fields." });
    }

    const task = {
      title: title.trim(),
      priority: priority.toLowerCase(),
      reference: reference ? reference.trim() : null,
      description: description ? description.trim() : null,
      userId: userId.trim(),
    };

    const result = await Tracker.create(task);

    res
      .status(201)
      .json({ message: "Task created successfully.", data: result });
  } catch (error) {
    console.error("Error creating task:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the task." });
  }
};

const getByUserId = async (req, res) => {
  try {
    const { id: userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required." });
    }

    const trackers = await Tracker.find({ userId });

    if (trackers.length === 0) {
      return res
        .status(404)
        .json({ error: "No trackers found for the given user ID." });
    }

    res.status(200).json({ data: trackers });
  } catch (error) {
    console.error("Error fetching trackers by user ID:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching trackers." });
  }
};

export { getall, createTask, getByUserId };
