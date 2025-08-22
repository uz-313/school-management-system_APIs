const geolib = require('geolib');
const dbConnection = require('../config/db.js');

// List schools controller
const listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.validatedData;

        const sql = 'SELECT id, name, address, latitude, longitude FROM schools';
        const [schools] = await dbConnection.query(sql);

        if (!schools || schools.length === 0) {
            return res.status(404).json({ message: 'No schools found' });
        }

        const sortedSchools = schools.toSorted((a, b) => {
            const distA = geolib.getDistance(
                { latitude: latitude, longitude: longitude },
                { latitude: a.latitude, longitude: a.longitude }
            );

            const distB = geolib.getDistance(
                { latitude: latitude, longitude: longitude },
                { latitude: b.latitude, longitude: b.longitude }
            );

            return distA - distB;
        });

        res.status(200).json({ schools: sortedSchools, message: 'Schools List retrieved successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ schools: schoolsDistance, message: 'Internal Server Error' });
    }
}


// Add school controller
const addSchool = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.validatedData;

        const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
        const [result] = await dbConnection.query(sql, [name, address, latitude, longitude]);

        const sql2 = 'SELECT id, name, address, latitude, longitude FROM schools WHERE id = ?';
        const [insertedSchool] = await dbConnection.query(sql2, [result.insertId]);

        res.status(201).json({ message: 'School added successfully', school: insertedSchool[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = { listSchools, addSchool };