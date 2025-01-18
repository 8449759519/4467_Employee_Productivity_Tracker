import User from "../Model/userModel.js";

let getalluser = async (req, res) => {
  let result = await User.find();

  res.send(result);
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify the password directly
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Send success response with userId
    res.status(200).json({ message: "Login successful", userId: user._id });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

export { getalluser, signup, login };
