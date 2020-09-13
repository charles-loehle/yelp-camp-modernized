const express = require('express');
const {
  getCampground,
  getCampgrounds,
  showCreateCampground,
  createCampground,
} = require('../controllers/campgrounds');

const router = express.Router();

router.route('/').get(getCampgrounds).post(createCampground);

router.route('/new').get(showCreateCampground);

router.route('/:id').get(getCampground);

module.exports = router;
