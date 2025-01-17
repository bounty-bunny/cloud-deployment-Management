// src/server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('AssignmentHub API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
