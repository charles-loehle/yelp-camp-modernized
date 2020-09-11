const mongoose = require('mongoose');

const CampgroundSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Campground', CampgroundSchema);
