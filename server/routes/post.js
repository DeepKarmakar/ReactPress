const express = require('express')
const router = express.Router()
const { authenticateJWT } = require('../utilities/responseMessage');
const { createNew, allPosts, singlePosts } = require('../controller/post');

router.get("/", (req, res) => {
	res.json({ key: "post api is working" });
});


router.post('/create-new', authenticateJWT, createNew)

router.get('/all-posts', authenticateJWT, allPosts)

router.get('/single-posts', authenticateJWT, singlePosts)

module.exports = router