const express = require('express');
const dotEnv = require("dotenv");
dotEnv.config();

const schoolsRoutes = require('./routes/schoolRoute.js');
const db = require('./config/db.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the School Management Portal.' });
});

app.use('/', schoolsRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});