const express = require('express');

const { listSchools, addSchool } = require('../controllers/schoolController.js');
const { listSchoolsValidation, addSchoolValidation } = require('../utils/validation.js');

const router = express.Router();

// Get all schools
router.get('/listSchools', listSchoolsValidation, listSchools);

// Add a new school
router.post('/addSchool', addSchoolValidation, addSchool);

module.exports = router;