const express = require("express");
const app = express();
const http = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:5000", // url aceita pelo cors
    methods: ["GET", "POST"], // Métodos aceitos pela url
  },
});

app.use(cors());
app.use(express.static(__dirname + "/public"));

require("./sockets/connect.js")(io);

app.get("/", (_req, res) => {
  res.sendFile(__dirname + "/index.html");
});

http.listen(5000, () => {
  console.log("Servidor ouvindo na porta 5000");
});
