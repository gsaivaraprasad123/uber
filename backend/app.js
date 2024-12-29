import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./db/db.js";

//Routes
import userRoutes from "./routes/user.routes.js";

const app = express();

connectDB();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // You can set your front-end app origin here
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send(`Hello`);
});

app.use("/users", userRoutes);

export default app;
