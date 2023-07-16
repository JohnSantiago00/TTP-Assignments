// UserController.js

const bcrypt = require("bcrypt");

const User = require("../models/User");

const UserController = {
  register: async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    try {
      // Create a new user with the hashed password
      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email, // Include email property
        password: hashedPassword,
      });

      // Send a cookie to the client
      req.session.userId = newUser.id;

      res.status(201).json({
        message: "User created successfully",
        name: newUser.name,
      });
    } catch (err) {
      if (err.name === "SequelizeValidationError") {
        return res
          .status(422)
          .json({ errors: err.errors.map((e) => e.message) });
      }
      res.status(500).json({
        message: "Error occurred while creating user!",
        error: err,
      });
    }

    // res.send("Welcome to the Job App Tracker API!!!!");
    // try {
    //   const { name, email, password } = req.body; // Add email to the destructuring assignment
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   const user = await User.create({ name, email, password: hashedPassword }); // Include email property
    //   res.json({ message: "User registered successfully", user });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).json({ message: "Internal server error" });
    // }
  },

  login: async (req, res) => {
    try {
      const { name, password } = req.body;
      console.log("name:", name);
      console.log("password:", password);

      const user = await User.findOne({ where: { name } });
      // console.log(user);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid password" });
      }
      req.session.userId = user.id;
      res.json({ message: "Login successful" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.json({ message: "Logout successful" });
  },
};

module.exports = UserController;
