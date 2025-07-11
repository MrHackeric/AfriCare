import express from "express";
import { Server } from "socket.io";
import http from "http";
import readline from "readline";
import cors from "cors"; // Import cors

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Adjust this to match your frontend's origin
    methods: ["GET", "POST"],
  },
});

app.use(cors()); // Use cors middleware
app.use(express.json());

let pendingMessage = null;

// Handle chat messages via POST request
app.post("/chat", (req, res) => {
  const { text } = req.body;

  console.log("Incoming Chat Request:", { text });

  if (!text) {
    return res.status(400).json({ error: "Invalid request body" });
  }

  // Emit the message to all connected clients
  io.emit("receive_message", {
    user: "User1", // Replace with actual user info
    content: text,
    timestamp: new Date(),
  });

  // Log the message that has been sent
  console.log("Message broadcasted to clients:", {
    user: "User1",
    content: text,
    timestamp: new Date(),
  });

  // Indicate typing status
  io.emit("typing_status", "Typing...");

  pendingMessage = {
    text: text,
    id: Date.now(), // Generate a unique ID for the message
  };

  res.status(200).json({ message: "Typing..." });
});

// Setup console input to respond to messages
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  if (pendingMessage) {
    console.log(`Responding to: ${pendingMessage.text}`);
    io.emit("receive_message", {
      user: "Operator", // The operator's name
      content: input,
      timestamp: new Date(),
      replyTo: pendingMessage.id,
    });
    console.log("Message sent by operator:", {
      user: "Operator",
      content: input,
      timestamp: new Date(),
      replyTo: pendingMessage.id,
    });
    pendingMessage = null;
  } else {
    console.log("No message to respond to.");
  }
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("receive_message", (message) => {
    console.log("Received message from user:", message);
    pendingMessage = message; // Set the message to respond to
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
