// Conexión al socket (detecta automáticamente el dominio en producción)
const socket = io();

// Elementos del DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const btn = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

// Evento 1: Emitir mensaje al hacer clic
btn.addEventListener('click', () => {
    if(message.value && handle.value){
        socket.emit('chat', {
            message: message.value,
            handle: handle.value
        });
        message.value = ""; // Limpiar input
    }
});

// Evento 2: Emitir "Escribiendo..." al teclear
message.addEventListener('keypress', () => {
    socket.emit('typing', handle.value);
});

// Escuchar eventos del servidor

// A. Recibir mensaje (chat)
socket.on('chat', (data) => {
    feedback.innerHTML = ""; // Borrar mensaje de "escribiendo"
    output.innerHTML += `<p><strong>${data.handle}: </strong>${data.message}</p>`;
    // Auto-scroll hacia abajo
    const chatWindow = document.getElementById('chat-window');
    chatWindow.scrollTop = chatWindow.scrollHeight;
});

// B. Recibir "Escribiendo..." (typing)
socket.on('typing', (data) => {
    feedback.innerHTML = `<p><em>${data} está escribiendo un mensaje...</em></p>`;
});