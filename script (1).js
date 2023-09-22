const chatBox = document.querySelector('.chat-box');
const chatMessages = document.querySelector('.chat-messages');
const chatInput = document.querySelector('.chat-input');
const inputField = document.querySelector('input');
const sendButton = document.querySelector('button');
sendButton.addEventListener('click', () => {
  const message = inputField.value;
  if (message) {
    const newMessage = document.createElement('div');
    newMessage.classList.add('message');
    newMessage.innerHTML = `<p>${message}</p>`;
    chatMessages.appendChild(newMessage);
    inputField.value = '';
  }
});
// Create a new WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');
// Create a message queue.
const messageQueue = [];
// Send a message to the server.
socket.send(JSON.stringify({
  message: 'Hello from user 1',
}));
// Add the message to the message queue.
messageQueue.push({
  message: 'Hello from user 1',
});
// Process the message queue.
while (messageQueue.length > 0) {
  // Get the next message from the queue.
  const message = messageQueue.shift();
  // Send the message to the server.
  socket.send(JSON.stringify(message));
}

};
// Create a new WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');
// Create a message queue.
const messageQueue = [];
// Send a message to the server.
socket.send(JSON.stringify({
  message: 'Hello from user 1',
}));
// Add the message to the message queue.
messageQueue.push({
  message: 'Hello from user 1',
});
// Process the message queue.
while (messageQueue.length > 0) {
  // Get the next message from the queue.
  const message = messageQueue.shift();
  // Send the message to the server.
  socket.send(JSON.stringify(message));
}