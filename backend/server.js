import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
import http from "http";
import app from "./app.js";

const port = process.env.PORT || 8080;

// Create an HTTP server
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`🤖 Server is running on port ${port}`);
});
