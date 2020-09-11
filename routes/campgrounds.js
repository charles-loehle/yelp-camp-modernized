const express = require('express');
const {
  getCampgrounds,
  showCreateCampground,
  createCampground,
} = require('../controllers/campgrounds');

const router = express.Router();

router.route('/').get(getCampgrounds).post(createCampground);
router.route('/new').get(showCreateCampground);

module.exports = router;
