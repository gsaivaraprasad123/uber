import { body } from "express-validator";
import { registerUser, loginUser, getUserProfile, logoutUser } from "../controllers/user.controller.js";
import authUser from "../middlewares/auth.middleware.js";
import { Router } from "express";

const router = Router();

router
.route("/register")
  .post(
    [
      body("email").isEmail().withMessage("Invalid email"),
      body("fullname.firstname")
        .isLength({ min: 3 })
        .withMessage("First name should be at least 5 characters long"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password should be at least 6 characters long"),
    ],
    registerUser
  );

router.route("/login").post(
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be at least 6 characters long"),
  ],
  loginUser
);

router.route("/profile").get(authUser, getUserProfile);

router.route("/logout").get(authUser, logoutUser)

export default router;
