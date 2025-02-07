import express from 'express';

const app = express();
const port = 3004;

app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});