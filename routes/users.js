const express = require('express');
const router = express.Router();
const passport = require('passport');
const users = require('../controllers/user');
const multer = require('multer');
const { storage } = require('../cloudinary')
const upload = multer({ storage });

router.route('/register')
    .post( upload.array('image'), users.register);

router.route('/userDash')
    .get(users.userDetails)

router.route('/update')
    .put(upload.array('image'), users.updateUser)

module.exports = router;