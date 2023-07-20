const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");
const path = require("path");

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5000", // url aceita pelo cors
    methods: ["GET", "POST"], // Métodos aceitos pela url
  },
});

require("./public/models/connect.js")(io);

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

http.listen(5000, () => {
  console.log("Servidor ouvindo na porta 5000");
});
