const socket = io();
const form = document.getElementById("form");
const inputMessage = document.getElementById("mensagemInput");
const inputName = document.getElementById("nameInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  socket.emit("mensagem", `${inputName.value} disse: ${inputMessage.value}`);

  inputMessage.value = "";
  return false;
});

const createMessage = (message) => {
  const messageUl = document.querySelector("#mensagens");
  const messageLi = document.createElement("li");
  messageLi.innerText = message;
  messageUl.appendChild(messageLi);
};

socket.on("welcome", (message) => createMessage(message));
socket.on("serverMessage", ({ message }) => createMessage(message));
