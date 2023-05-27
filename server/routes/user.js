const express = require('express')
const router = express.Router()
const { logIn, signIn, setPassword, approve, getAllUsers, isAuthnticUser } = require('../controller/user');
const { authenticateJWT } = require('../utilities/responseMessage');

router.get("/", (req, res) => {
	res.json({ key: "user api is working" });
});


router.post('/login', logIn)

router.post('/signup', signIn)

router.post('/users', authenticateJWT, getAllUsers)

router.get('/isAuthnticate', authenticateJWT, isAuthnticUser)

module.exports = router