const socket = io();
const form = document.getElementById("form");
const inputMessage = document.getElementById("mensagemInput");
const inputName = document.getElementById("nameInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!inputName.value) {
    alert("Digite seu nome para iniciar a conversa");
    return false;
  } else if (!inputMessage.value) {
    alert("Digite uma mensagem");
    return false;
  }

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
