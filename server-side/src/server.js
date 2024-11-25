import mongoose from "mongoose";
import app from "./app.js";
import config from "./config/index.js";
import {server, socketConnection} from "./socket.js";

const port = config.port || 3000;

// Database connection
const connectToDatabaseAndStartServer = async () => {
  try {
    await mongoose.connect(config.database_url);
    console.log("🚀 Database connected successfully");

    // Start server
    server.listen(port, () => {
      console.log(`App listening on port ${port}`);
      // Additional initialization steps can be placed here if needed
    });
  } catch (err) {
    console.log("Failed to connect to the database", err);
    process.exit(1);
  }
};

// Uncaught exception handling
process.on("uncaughtException", (err) => {
  console.log("Uncaught exception", err);
  process.exit(1);
});

// Unhandled rejection handling
process.on("unhandledRejection", (error) => {
  console.log("Unhandled rejection", error);
  process.exit(1);
});

// Establish socket connection
socketConnection();

// Export the function to connect to the database and start the server
connectToDatabaseAndStartServer();
