const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = 'mongodb://admin:password@mongodb';
const DB_NAME = 'userDB';

app.use(bodyParser.json());
app.use(express.static('public'));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Connection to MongoDB
MongoClient.connect(MONGO_URL)
    .then(client => {
        console.log('Connected to MongoDB');
        const db = client.db(DB_NAME);
        const collection = db.collection('users');

        // Handle form submission
        app.post('/submit', (req, res) => {
            const userData = {
                name: req.body.name,
                email: req.body.email,
                hobbies: req.body.hobbies
            };

            // Insert user data into the database
            collection.insertOne(userData)
                .then(result => {
                    console.log('Data submitted successfully');
                    res.json({ success: true });
                })
                .catch(err => {
                    console.error('Error inserting data:', err);
                    res.status(500).json({ success: false });
                });
        });

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });
