const express = require('express');

const feedController = require('../controllers/feeds')

const router = express.Router();

// Configurando os endpoints

// GET /feed/posts
router.get('/posts', feedController.pegandoPosts);

// POST /feed/post
router.post('/post', feedController.criandoPost);



module.exports = router;