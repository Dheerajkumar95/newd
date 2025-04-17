const bcrypt = require("bcryptjs");
const cloudinary = require("../lib/cloudinary.js");
const { generateToken } = require("../lib/utils.js");
const User = require("../models/user.model.js");

const signup = async (req, res) => {
  const { fullName, contact, email, password } = req.body;

  try {
    if (!fullName || !contact || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const existingUserByContact = await User.findOne({ contact });
    if (existingUserByContact) {
      return res.status(400).json({ message: "Contact already exists" });
    }
    if (contact.length !== 10 ) {
      return res.status(400).json({ message: "Contact must be at least 10 digit" });
    }
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      contact,
      password: hashedPassword,
    });
    if (newUser) {
    await newUser.save(); // Save first
    generateToken(newUser._id, res); // Then generate token

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      email: newUser.email,
      contact: newUser.contact,
      profilePic: newUser.profilePic, // fixed typo
    });
  }
    else {
      res.status(400).json({ message: "Invalid user data " });
    }
  } catch (error) {
    console.log("Error in signup controller:", error.message);
    res.status(500).json({ message: "Internal Server Error " });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid Password" });
    }

    generateToken(user._id, res);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;
    
    if (!profilePic) {
      return res.status(400).json({ message: "Profile pic is required" });
    }

    const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadResponse.secure_url },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("error in update profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { signup, login, logout, updateProfile, checkAuth };