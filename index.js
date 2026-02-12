const express = require('express');
const socket = require('socket.io');

// Configuración de la App
const app = express();
// Puerto dinámico para Render o 3000 para local
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Archivos estáticos
app.use(express.static('public'));

// Configuración de Socket.io
const io = socket(server);

io.on('connection', (socket) => {
    console.log('Nueva conexión WebSocket:', socket.id);

    // 1. Manejar evento de chat (mensaje enviado)
    socket.on('chat', (data) => {
        // io.sockets.emit envía el mensaje a TODOS los clientes (incluido el remitente)
        io.sockets.emit('chat', data);
    });

    // 2. Manejar evento de 'escribiendo' (broadcasting)
    socket.on('typing', (data) => {
        // socket.broadcast.emit envía a TODOS EXCEPTO al remitente
        socket.broadcast.emit('typing', data);
    });
});