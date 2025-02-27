"use strict";
// import WebSocket, { WebSocketServer } from 'ws';
// import http from 'http';
Object.defineProperty(exports, "__esModule", { value: true });
// const server = http.createServer(function(request: any, response: any) {
//     console.log((new Date()) + ' Received request for ' + request.url);
//     response.end("hi there");
// });
// const wss = new WebSocketServer({ server });
// wss.on('connection', function connection(ws) {
//   ws.on('error', console.error);
//   ws.on('message', function message(data, isBinary) {
//     wss.clients.forEach(function each(client) {
//       if (client.readyState === WebSocket.OPEN) {
//         client.send(data, { binary: isBinary });
//       }
//     });
//   });
//   ws.send('Hello! Message From Server!!');
// });
// server.listen(8080, function() {
//     console.log((new Date()) + ' Server is listening on port 8080');
// });
//Code without HTTP Servers
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    console.log("Client connected");
    ws.send("Hello, Nikil here");
    const interval = setInterval(() => {
        ws.send("Hello, Nikil here " + Math.random());
    }, 500);
    ws.on('message', (message) => {
        console.log("Received message:", message.toString());
    });
    ws.on('close', () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });
});
