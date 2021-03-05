const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator')

// Model
const User = require('../../models/User');

// @route   GET api/auth
// @desc    Get user
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }
})


// @route   GET api/auth
// @desc    Authenticate user && get token - Login
// @access  Public
router.post('/', [
    // Validations
    check('email', "Please include a valid email").isEmail(),
    check('password', "Password is required").exists(),
], async (req, res) => {
    const errors = validationResult(req);

    // If we've any error it will show us
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {

        // Check if the user exists
        let user = await User.findOne({ email })


        if (!user) {
            res
            .status(400)
            .json({ errors: [{ msg: 'Invalid credentials' }] });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            res
            .status(400)
            .json({ errors: [{ msg: 'Invalid credentials' }] });
        }

        // Return jsonwebtoken
        const payload = {
            user: {
                id: user.id
            }
        }
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            })

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server error")
    }

})

module.exports = router;