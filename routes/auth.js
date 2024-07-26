const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../config/database');
const router = express.Router();

// Render login page
router.get('/login', (req, res) => {
    res.render('login');
});

// Render register page
router.get('/register', (req, res) => {
    res.render('register');
});

// Handle registration
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
        res.redirect('/auth/login');
    } catch (error) {
        console.log(error);
        res.send('Error registering user');
    }
});

// Handle login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length > 0) {
            const user = rows[0];
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                req.session.userId = user.id;
                req.session.userRole = user.role;
                return res.redirect('/protected/dashboard');
            }
        }
        res.send('Invalid credentials');
    } catch (error) {
        res.send('Error logging in user');
    }
});

// Handle logout
router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error logging out');
        }
        res.redirect('/auth/login');
    });
});

module.exports = router;
