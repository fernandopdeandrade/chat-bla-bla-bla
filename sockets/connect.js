module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id} `);

    socket.on("disconnect", () => {
      console.log(`Usuário desconectado. ID: ${socket.id} `);
    });

    socket.emit("welcome", `Olá, Seja bem vindo(a) ao nosso chat!`);

    socket.broadcast.emit("serverMessage", {
      message: "Um novo usuário entrou no chat",
    });

    socket.on("mensagem", (msg) => {
      io.emit("serverMessage", {
        message: msg,
      });
    });
  });
};
