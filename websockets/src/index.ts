

//Code without HTTP Servers
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
  console.log("Client connected");

  // ws.send("Hello, Nikil here");

  // const interval = setInterval(() => {
  //   ws.send("Hello, Nikil here " + Math.random());
  // }, 500);

  ws.on('message', (message) => {
    const msg=message.toString()
    console.log(msg)
    console.log("Received message:", msg.toUpperCase());
    if (msg.toUpperCase() === "HELLO") {
      console.log("here");
      ws.send("Hello Nikhil here");
    }
  });

  ws.on('close', () => {
    console.log("Client disconnected");
    // clearInterval(interval);
  });
});