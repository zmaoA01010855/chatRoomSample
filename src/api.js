import openSocket from 'socket.io-client';
const url = "http://localhost:8080";
// const socket = openSocket(url);

const subscribeToTimer = (data, cb) => {
    // socket.on('chat', data => cb(null, data));
    // socket.emit('chat', data);
}

export default subscribeToTimer;