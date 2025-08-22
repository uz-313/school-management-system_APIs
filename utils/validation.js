function addSchoolValidation(req, res, next) {
    const { name, address, latitude, longitude } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'School Name is required..!' });
    }
    if (!/^[A-Za-z\-'.]+(\s[A-Za-z\-'.]+)*$/.test(name)) {
        return res.status(400).json({ message: 'Invalid School Name format..!' });
    }

    if (!address) {
        return res.status(400).json({ message: 'School Address is required..!' });
    }
    if (!/^[A-Za-z0-9,\-.'()\/#&]+(\s[A-Za-z0-9,\-.'()\/#&]+)*$/.test(address)) {
        return res.status(400).json({ message: 'Invalid School Address format..!' });
    }

    if (latitude === undefined || latitude === null || latitude === "") {
        return res.status(400).json({ message: "School's latitude is required..!" });
    }

    if (longitude === undefined || longitude === null || longitude === "") {
        return res.status(400).json({ message: "School's longitude is required..!" });
    }

    const lat = Number(latitude);
    const lng = Number(longitude);
    if (Number.isNaN(lat) || Number.isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        return res.status(400).json({ message: 'Invalid latitude/longitude..!' });
    }

    req.validatedData = { name: name.trim(), address: address.trim(), latitude: lat, longitude: lng };

    next();
}


function listSchoolsValidation(req, res, next) {
    const { latitude, longitude } = req.query;

    if (latitude === undefined || latitude === null || latitude === "") {
        return res.status(400).json({ message: "School's latitude is required..!" });
    }

    if (longitude === undefined || longitude === null || longitude === "") {
        return res.status(400).json({ message: "School's longitude is required..!" });
    }

    const lat = Number(latitude);
    const lng = Number(longitude);
    if (Number.isNaN(lat) || Number.isNaN(lng) || lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        return res.status(400).json({ message: 'Invalid latitude/longitude..!' });
    }

    req.validatedData = { latitude: lat, longitude: lng };

    next();
}


module.exports = { addSchoolValidation, listSchoolsValidation };