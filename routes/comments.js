const express = require('express');
const { showCreateComment } = require('../controllers/comments');

const router = express.Router();

// GET /campgrounds/:id/comments/new
// show the create comment form
router.route('/new').get(showCreateComment);

// POST /campgrounds/:id/comments
// create a comment
//router.route('/')

module.exports = router;
