const { validationResult } = require('express-validator');
//const bcrypt = require('bcryptjs');

const db = require('../config/dbConfig');


const registerDevice= (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    //res.send('Device registered');
    db.query('SELECT * FROM device WHERE ip = ?', [req.body.ip], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Database query error' });
        }
        if (results.length > 0) {
            return res.status(409).json({ message: 'Thing already registered' });
        } else {
            let device = { name: req.body.name, ip: req.body.ip, username: req.body.username };
            let sql = 'INSERT INTO device SET ?';
            db.query(sql, device, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ message: 'Database insert error' });
                } else {
                    return res.status(200).json({ message: 'Thing registered' });
                }
            });
        }
    });


};

module.exports = {
    registerDevice
};
   