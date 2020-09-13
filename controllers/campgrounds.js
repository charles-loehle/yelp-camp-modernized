// const campgrounds = [
//   {
//     name: 'Salmon Creek',
//     image:
//       'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
//   },
//   {
//     name: 'Star Creek',
//     image:
//       'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   },
//   {
//     name: 'Flower Creek',
//     image:
//       'https://images.unsplash.com/photo-1502218808493-e5fd26249efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   },
//   {
//     name: 'Coffee Creek',
//     image:
//       'https://images.unsplash.com/photo-1571863533956-01c88e79957e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
//   },
//   {
//     name: 'Charles Creek',
//     image:
//       'https://images.unsplash.com/photo-1487730116645-74489c95b41b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
//   },
// ];

const Campground = require('../models/Campground');
const Comment = require('../models/Comment');

// @desc      Show all campgrounds page
// @route     GET /campgrounds
// @access    Public
exports.getCampgrounds = async (req, res) => {
  try {
    const allCampgrounds = await Campground.find();
    res.render('campgrounds/index', { campgrounds: allCampgrounds });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc      Show the create new campground page
// @route     GET /campgrounds/new
// @access    Public
exports.showCreateCampground = (req, res) => {
  res.render('campgrounds/createCampground');
};

// @desc      Create new campground
// @route     POST /campgrounds
// @access    Private
exports.createCampground = async (req, res) => {
  const { name, image, description } = req.body;

  try {
    await Campground.create({ name, image, description });
    res.redirect('/campgrounds');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// @desc      Get a single campground
// @route     GET /campgrounds/:id
// @access    Public
exports.getCampground = async (req, res) => {
  try {
    const campground = await Campground.findById(req.params.id).populate(
      'comments'
    );

    if (!campground)
      return res.status(404).json({ msg: 'Campground not found' });

    console.log(campground);
    res.render('campgrounds/show', { campground });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
