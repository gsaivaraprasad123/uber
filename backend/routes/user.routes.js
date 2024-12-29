import { body } from "express-validator";
import registerUser from "../controllers/user.controller.js";
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

export default router;
