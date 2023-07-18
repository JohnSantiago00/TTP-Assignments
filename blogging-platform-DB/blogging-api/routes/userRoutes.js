const express = require("express");
const User = require("../models/User");
const { userRouter, UserController } = require("../controllers/userController");

const router = express.Router();

router.get("/current_user", async (req, res) => {
  if (req.session.userId) {
    const user = await User.findByPk(req.session.userId);
    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
      },
    });
  } else {
    return res.status(401).json({ user: null });
  }
});
router.use("/users", userRouter);
router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.delete("/logout", UserController.logout);

module.exports = router;
