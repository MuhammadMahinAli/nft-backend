import {createServer} from "http";
import {Server} from "socket.io";
import app from "./app.js";

export const server = createServer(app);
export const socketConnection = () => {
  const io = new Server(server, {
    cors: {
      origin: "https://www.nftclosetx.com",
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log("user connected" + socket.id);
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
    socket.on("send_message", (data) => {
      io.emit("receive_message", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });
};
