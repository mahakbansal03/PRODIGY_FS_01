const express = require('express');
const router = express.Router();

const requireAuth = (req, res, next) => {
    if (!req.session.userId) {
        return res.redirect('/auth/login');
    }
    next();
};

const requireRole = (role) => {
    return (req, res, next) => {
        if (req.session.userRole !== role) {
            res.render('admin',{access : "N"});
        }
        next();
    };
};

router.get('/dashboard', requireAuth, (req, res) => {
    res.render('dashboard');
});

// Example of a protected route that requires admin role
router.get('/admin', requireAuth, requireRole('admin'), (req, res) => {
    res.render('admin',{access : "Y"});
});

module.exports = router;
