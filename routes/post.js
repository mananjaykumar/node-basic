const express = require('express');
const router = express.Router();
const postCtrl = require('../controller/postCtrl')

router.get('/', postCtrl.getPosts);
router.post('/', postCtrl.createPosts);

module.exports = router;