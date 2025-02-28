import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState(""); // Store sent message
  const [reply, setReply] = useState(""); // Store server reply
  const inputRef = useRef<HTMLInputElement>(null);

  function sendMessage() {
    if (!socket || !inputRef.current) return;

    const msg = inputRef.current.value;
    setMessage(msg); // Save the sent message
    socket.send(msg);
    inputRef.current.value = ""; // Clear input after sending
  }

  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');
    setSocket(newSocket);

    newSocket.onopen = () => {
      console.log('Connection established');
      newSocket.send('Hello Server!');
    };

    newSocket.onmessage = (message) => {
      console.log('Message received:', message.data);
      setReply(message.data); // Save the server reply
    };

    return () => newSocket.close();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <input
        type="text"
        ref={inputRef}
        className="w-80 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message..."
      />
      <button
        onClick={sendMessage}
        className="px-4 py-2 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Send
      </button>

      <div className="mt-4 p-4 w-96 bg-white border border-gray-300 rounded-lg shadow-lg text-center">
  <p className="text-lg font-medium text-gray-700">
    <strong className="text-blue-600">Message:</strong> {message || <span className="text-gray-400">No message sent</span>}
  </p>
  <hr className="my-2 border-gray-300" />
  <p className="text-lg font-medium text-gray-700">
    <strong className="text-green-600">Reply:</strong> {reply || <span className="text-gray-400">No reply yet</span>}
  </p>
</div>
    </div>
  );
}

export default App;